# 成硕女儿模拟器

平行世界虚构同人家庭成长文游：左侧主线正文，右侧 iOS 风格小手机。核心体验是从出生到成年，在公开受祝福、边界清楚、爱意稳定的家庭里长大。

## 启动

```bash
npm run dev
```

默认地址：

```text
http://localhost:8787
```

## LLM 接入

前端只请求本地代理：

```text
/api/chat/completions
```

项目根目录的 `apikey.txt` 每行放一个 key。服务端会读取、去重并轮换使用，不会把 key 下发到浏览器。

仓库中只保留 `apikey.example.txt`。真实 `apikey.txt`、历史 `api.txt`、`.env`、运行日志和本地开发文档都已加入 `.gitignore`。服务端也会拒绝静态访问 `apikey.txt`、`api.txt` 和 `.env`。

可复制 `.env.example` 为 `.env` 后调整：

```env
PORT=8787
API_BASE_URL=https://api.deepseek.com
API_MODEL=deepseek-chat
API_KEY_FILE=apikey.txt
API_KEYS=
```

服务器部署时也可以不用文件，改用 `API_KEYS` 环境变量放多枚 key，使用换行或英文逗号分隔。

如果代理不可用，KKT 智能体会自动使用本地角色模板兜底，主线仍可完整游玩。

GitHub Pages 只能托管静态页面，不能安全保存 API key 或运行 Node 代理；部署到 Pages 时游戏可打开，KKT 会走本地兜底。需要真实 LLM 时，请在本机或支持 Node 的服务上运行 `npm run start`，并把 key 放在服务器的 `apikey.txt` 或环境密钥里。

## 已实现

- 左侧文游主线：出生、幼儿园、小学、青春期、成年礼等 12 个事件。
- 数值系统：家庭安全感、父母亲密度、父母甜度、独立值、才艺、叔叔团宠、粉丝祝福、隐私保护。
- 右侧 iOS 小手机：KKT、相册、回忆档案馆、粉丝祝福墙、日记、日历。
- 四位叔叔与两位父亲的 KKT 智能体聊天。
- 回忆档案逐步解锁，成年终章全部开放。
- 点击粒子小动画、聊天输入动效、相册视觉卡片。
- 提交前密钥扫描：`npm run secret-scan` 会检查将要提交的文件里是否含有明显 API key。

## 边界

本项目仅为平行世界虚构同人互动故事，不代表现实人物、现实关系、现实私生活或现实新闻。内容重点是亲子陪伴、成长、家庭沟通与边界清楚的爱。
