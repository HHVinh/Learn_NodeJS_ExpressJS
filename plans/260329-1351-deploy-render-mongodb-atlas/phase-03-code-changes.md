---
phase: 3
title: Code Changes for Production
status: pending
human_involved: false
---

# Phase 3: Code Changes for Production

## Overview
Sửa code để app chạy được trên Render — chủ yếu đọc config từ environment variables thay vì hardcode.

---

## Thay đổi 1: `src/config/db/index.js` — MongoDB URI từ env

**Hiện tại:**
```js
await mongoose.connect('mongodb://localhost:27017/blog_dev');
```

**Sửa thành:**
```js
await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/blog_dev');
```

> Khi chạy local vẫn hoạt động bình thường (dùng fallback localhost). Trên Render sẽ đọc từ env var.

---

## Thay đổi 2: `src/index.js` — Port từ env

**Hiện tại:**
```js
const port = 4000;
```

**Sửa thành:**
```js
const port = process.env.PORT || 4000;
```

> Render tự assign port qua env var `PORT`. Local vẫn dùng 4000.

---

## Thay đổi 3: `package.json` — Thêm production scripts

**Thêm scripts:**
```json
{
  "scripts": {
    "start": "nodemon --inspect src/index.js",
    "start:prod": "node src/index.js",
    "build:css": "sass src/resources/scss:src/public/css --style=compressed --no-source-map",
    "build": "npm run build:css",
    "watch": "sass --watch src/resources/scss:src/public/css"
  }
}
```

> - `build`: Render sẽ chạy trước khi start → compile SCSS thành CSS
> - `start:prod`: Render dùng để start app (không cần nodemon)
> - `--style=compressed`: minify CSS cho production

---

## Thay đổi 4: `.gitignore` — Thêm các file cần ignore

**Thêm vào `.gitignore`:**
```
node_modules/
.env
src/public/css/
```

> - `.env`: chứa secrets, không commit
> - `src/public/css/`: file compiled, Render sẽ tự build

---

## Thay đổi 5 (optional): `.env` — File local cho dev

**Tạo file `.env` ở root:**
```
MONGODB_URI=mongodb://localhost:27017/blog_dev
PORT=4000
```

> Dùng cho local dev. Không commit lên Git. Render set env vars trên dashboard.

⚠️ Nếu dùng `.env` thì cần cài `dotenv`:
```bash
npm install dotenv
```
Và thêm vào đầu `src/index.js`:
```js
require('dotenv').config();
```

Hoặc **bỏ qua bước này** — không cần `.env` nếu bạn OK với fallback values hardcode trong code.

---

## Files cần sửa
| File | Thay đổi |
|------|----------|
| `src/config/db/index.js` | MongoDB URI từ env |
| `src/index.js` | Port từ env (+ dotenv nếu dùng) |
| `package.json` | Thêm `build`, `start:prod` scripts |
| `.gitignore` | Thêm `.env`, `src/public/css/` |

## Checklist
- [ ] `src/config/db/index.js` — dùng `process.env.MONGODB_URI`
- [ ] `src/index.js` — dùng `process.env.PORT`
- [ ] `package.json` — thêm `build` và `start:prod` scripts
- [ ] `.gitignore` — thêm `.env` và `src/public/css/`
- [ ] Test local: app vẫn chạy bình thường với fallback values
- [ ] Commit & push lên GitHub

## Output
→ Code sẵn sàng deploy, push lên GitHub.
