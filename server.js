const http = require("http");
const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const env = loadEnv(path.join(rootDir, ".env"));
const port = Number(process.env.PORT || env.PORT || 8787);
const apiBaseUrl = (process.env.API_BASE_URL || env.API_BASE_URL || "https://api.deepseek.com").replace(/\/+$/, "");
const apiModel = process.env.API_MODEL || env.API_MODEL || "deepseek-chat";
const keyFile = process.env.API_KEY_FILE || env.API_KEY_FILE || "apikey.txt";
const envKeys = process.env.API_KEYS || env.API_KEYS || "";
const proxyToken = process.env.PROXY_ACCESS_TOKEN || env.PROXY_ACCESS_TOKEN || "";

let keyCache = { mtimeMs: 0, keys: [], index: 0 };

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

const blockedFiles = new Set(["apikey.txt", "api.txt", ".env"]);

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

    if (url.pathname === "/api/health") {
      sendJson(res, 200, { ok: true, model: apiModel, hasKeys: getApiKeys().length > 0 });
      return;
    }

    if (url.pathname === "/api/chat/completions") {
      await handleChatProxy(req, res);
      return;
    }

    if (req.method !== "GET" && req.method !== "HEAD") {
      sendText(res, 405, "Method not allowed");
      return;
    }

    serveStatic(url.pathname, req, res);
  } catch (error) {
    sendJson(res, 500, { error: "server_error", message: error.message });
  }
});

server.listen(port, () => {
  console.log(`成硕女儿模拟器已启动：http://localhost:${port}`);
});

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const result = {};
  const content = fs.readFileSync(filePath, "utf8");
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const splitAt = line.indexOf("=");
    if (splitAt === -1) continue;
    const key = line.slice(0, splitAt).trim();
    const value = line.slice(splitAt + 1).trim();
    result[key] = value;
  }
  return result;
}

function serveStatic(pathname, req, res) {
  const normalized = decodeURIComponent(pathname).replace(/\\/g, "/");
  const cleanPath = normalized === "/" ? "/index.html" : normalized;
  const basename = path.basename(cleanPath);

  if (blockedFiles.has(basename)) {
    sendText(res, 404, "Not found");
    return;
  }

  const filePath = path.normalize(path.join(rootDir, cleanPath));
  if (!filePath.startsWith(rootDir)) {
    sendText(res, 403, "Forbidden");
    return;
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      sendText(res, 404, "Not found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Cache-Control": "no-store"
    });

    if (req.method === "HEAD") {
      res.end();
      return;
    }

    fs.createReadStream(filePath).pipe(res);
  });
}

async function handleChatProxy(req, res) {
  if (req.method !== "POST") {
    sendText(res, 405, "Method not allowed");
    return;
  }

  if (proxyToken) {
    const auth = req.headers.authorization || "";
    const sent = auth.startsWith("Bearer ") ? auth.slice(7) : "";
    if (sent !== proxyToken) {
      sendJson(res, 401, { error: "unauthorized" });
      return;
    }
  }

  const body = await readJsonBody(req);
  const keys = getApiKeys();
  if (!keys.length) {
    sendJson(res, 503, { error: "missing_api_key", message: "No API keys found in apikey.txt" });
    return;
  }

  const upstreamBody = {
    model: body.model || apiModel,
    messages: Array.isArray(body.messages) ? body.messages : [],
    temperature: body.temperature ?? 0.85,
    max_tokens: body.max_tokens ?? 420,
    stream: false
  };

  const attempts = Math.min(keys.length, 2);
  let lastError = null;

  for (let i = 0; i < attempts; i += 1) {
    const key = nextApiKey(keys);
    try {
      const upstream = await fetch(`${apiBaseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${key}`
        },
        body: JSON.stringify(upstreamBody)
      });

      const text = await upstream.text();
      res.writeHead(upstream.status, {
        "Content-Type": upstream.headers.get("content-type") || "application/json; charset=utf-8",
        "Cache-Control": "no-store"
      });
      res.end(text);
      return;
    } catch (error) {
      lastError = error;
    }
  }

  sendJson(res, 502, { error: "proxy_failed", message: lastError ? lastError.message : "Unknown proxy failure" });
}

function getApiKeys() {
  if (envKeys.trim()) return normalizeKeys(envKeys);

  const filePath = path.resolve(rootDir, keyFile);
  if (!fs.existsSync(filePath)) return [];
  const stat = fs.statSync(filePath);
  if (stat.mtimeMs === keyCache.mtimeMs && keyCache.keys.length) return keyCache.keys;

  const content = fs.readFileSync(filePath, "utf8");
  const keys = normalizeKeys(content);

  keyCache = { mtimeMs: stat.mtimeMs, keys, index: 0 };
  return keys;
}

function normalizeKeys(content) {
  const keys = [];
  const seen = new Set();
  for (const rawLine of content.split(/[\r\n,]+/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const match = line.match(/sk-[A-Za-z0-9_-]+/);
    const key = match ? match[0] : line;
    if (!seen.has(key)) {
      seen.add(key);
      keys.push(key);
    }
  }
  return keys;
}

function nextApiKey(keys) {
  if (!keys.length) return "";
  const key = keys[keyCache.index % keys.length];
  keyCache.index = (keyCache.index + 1) % keys.length;
  return key;
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.setEncoding("utf8");
    req.on("data", chunk => {
      raw += chunk;
      if (raw.length > 1024 * 1024) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(payload));
}

function sendText(res, status, text) {
  res.writeHead(status, {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(text);
}
