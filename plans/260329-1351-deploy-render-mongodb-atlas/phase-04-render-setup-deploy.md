---
phase: 4
title: Render Setup & Deploy
status: pending
human_involved: true
---

# Phase 4: Render Setup & Deploy

## Overview
Tạo tài khoản Render, connect GitHub repo, cấu hình và deploy app.

---

## Step 1: Tạo tài khoản Render 👤 HUMAN

1. Mở trình duyệt, vào **dashboard.render.com**
2. Click **"Get Started for Free"**
3. Chọn **"Sign in with GitHub"** (recommended — giúp connect repo dễ hơn)
   - Authorize Render access GitHub account
4. Hoàn tất đăng ký (verify email nếu cần)

---

## Step 2: Tạo Web Service 👤 HUMAN

1. Trong Render Dashboard, click **"New +"** (góc trên phải) → chọn **"Web Service"**

2. **Connect Repository:**
   - Nếu chưa thấy repo: click **"Configure account"** → cho phép Render truy cập repo
   - Tìm và chọn repo **Learn_NodeJS_ExpressJS** (hoặc tên repo trên GitHub)
   - Click **"Connect"**

3. **Cấu hình service:**

   | Field | Giá trị |
   |-------|---------|
   | **Name** | `my-blog` (sẽ thành `my-blog.onrender.com`) |
   | **Region** | **Singapore (Southeast Asia)** |
   | **Branch** | `main` |
   | **Runtime** | **Node** |
   | **Build Command** | `npm install && npm run build` |
   | **Start Command** | `npm run start:prod` |
   | **Instance Type** | **Free** |

   > ⚠️ **Build Command** giải thích:
   > - `npm install` — cài dependencies
   > - `npm run build` — compile SCSS → CSS
   >
   > ⚠️ **Start Command**: dùng `start:prod` (node) thay vì `start` (nodemon)

---

## Step 3: Thêm Environment Variables 👤 HUMAN

Vẫn trong trang tạo service, kéo xuống phần **"Environment Variables"**:

1. Click **"Add Environment Variable"**

   | Key | Value |
   |-----|-------|
   | `MONGODB_URI` | `mongodb+srv://blogadmin:password@my-blog.xxxxx.mongodb.net/blog_dev?retryWrites=true&w=majority` |
   | `NODE_ENV` | `production` |

   > ⚠️ Paste connection string Atlas đầy đủ từ Phase 1 (đã thay password + tên DB)

2. **KHÔNG** thêm `PORT` — Render tự quản lý biến này

---

## Step 4: Deploy 👤 HUMAN

1. Kiểm tra lại tất cả config ở trên
2. Click **"Create Web Service"**
3. Render sẽ bắt đầu build + deploy:
   - Pull code từ GitHub
   - Chạy `npm install && npm run build`
   - Start app bằng `npm run start:prod`
4. ⏳ Chờ 2-5 phút cho lần deploy đầu tiên

5. **Theo dõi logs:**
   - Trong Render dashboard → service → tab **"Logs"**
   - Tìm dòng: `Connected to MongoDB` và `App listening at...`
   - Nếu thấy 2 dòng này → deploy thành công ✅

---

## Step 5: Verify Live URL 👤 HUMAN

1. Render hiện URL ở góc trên: `https://my-blog.onrender.com`
2. Mở URL đó trong browser
3. ⚠️ **Lần đầu** có thể mất 30-50 giây (cold start — bình thường với free tier)

---

## Troubleshooting

| Vấn đề | Nguyên nhân | Cách fix |
|---------|-------------|----------|
| Build failed: `sass not found` | `sass` nằm trong devDependencies | Render mặc định install cả devDeps, nếu không: set env `NODE_ENV=development` cho build, hoặc move sass to dependencies |
| `Failed to connect to MongoDB` | Connection string sai | Kiểm tra lại env var MONGODB_URI trên Render dashboard |
| App crash loop | Port hardcode | Đảm bảo code dùng `process.env.PORT` |
| 404 on all pages | Views path sai | Kiểm tra `app.set('views', ...)` dùng `path.join(__dirname, ...)` |

---

## Checklist
- [ ] Tạo tài khoản Render (login via GitHub)
- [ ] Tạo Web Service, connect repo
- [ ] Cấu hình Build/Start commands
- [ ] Thêm env vars (MONGODB_URI, NODE_ENV)
- [ ] Deploy thành công, logs show "Connected to MongoDB"
- [ ] URL accessible trong browser

## Output
→ App live tại `https://my-blog.onrender.com` (hoặc tên bạn chọn).
