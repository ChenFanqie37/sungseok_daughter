const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const secretPatterns = [
  { name: "OpenAI/DeepSeek-style API key", regex: /sk-[A-Za-z0-9_-]{16,}/g },
  { name: "Common private key block", regex: /-----BEGIN (?:RSA |EC |OPENSSH |)?PRIVATE KEY-----/g }
];

let files = [];

try {
  const output = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard"], {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"]
  });
  files = output.split(/\r?\n/).filter(Boolean);
} catch {
  console.log("secret-scan: skipped because this folder is not a git repository yet.");
  process.exit(0);
}

const findings = [];

for (const relativePath of files) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) continue;
  const stat = fs.statSync(absolutePath);
  if (!stat.isFile() || stat.size > 1024 * 1024) continue;

  const content = fs.readFileSync(absolutePath, "utf8");
  for (const pattern of secretPatterns) {
    const matches = content.match(pattern.regex);
    if (matches && matches.length) {
      findings.push(`${relativePath}: ${pattern.name}`);
    }
  }
}

if (findings.length) {
  console.error("Potential secrets found in files that would be committed:");
  for (const finding of findings) console.error(`- ${finding}`);
  process.exit(1);
}

console.log(`secret-scan: checked ${files.length} publishable files; no obvious secrets found.`);
