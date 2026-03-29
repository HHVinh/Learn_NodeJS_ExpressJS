---
phase: 1
title: MongoDB Atlas Setup
status: pending
human_involved: true
---

# Phase 1: MongoDB Atlas Setup

## Overview
Tạo tài khoản MongoDB Atlas và cluster M0 (free forever, 512MB).

---

## Step 1: Tạo tài khoản MongoDB Atlas 👤 HUMAN

1. Mở trình duyệt, vào **cloud.mongodb.com**
2. Click **"Try Free"** (góc trên phải)
3. Đăng ký bằng **Google account** hoặc **email**
   - Nếu dùng email: nhập email, password, first name, last name → click **"Create Your Atlas Account"**
   - Check email để verify (nếu dùng email)
4. Sau khi đăng nhập, Atlas sẽ hỏi vài câu survey:
   - "What is your goal?" → chọn **"Learn MongoDB"** (hoặc bất kỳ)
   - Các câu còn lại chọn tùy ý
   - Hoặc click **"Skip"** nếu có

---

## Step 2: Tạo Free Cluster 👤 HUMAN

1. Sau khi login, Atlas tự động hiện trang **"Deploy your database"**
   - Nếu không thấy: click **"Database"** (sidebar trái) → **"Build a Database"**

2. Chọn plan: **M0 FREE** (có label "Free forever")
   - ⚠️ KHÔNG chọn M2, M5 hay Serverless — những cái đó tính tiền

3. **Provider & Region:**
   - Provider: **AWS** (recommended)
   - Region: chọn **Singapore (ap-southeast-1)** — gần Việt Nam nhất, latency thấp
   - Nếu không có Singapore: chọn **Hong Kong** hoặc **Tokyo**

4. **Cluster Name:** đặt tên tùy ý (vd: `my-blog`, hoặc giữ mặc định `Cluster0`)

5. Click **"Create Deployment"**

6. ⏳ Chờ 1-3 phút để cluster khởi tạo xong

---

## Step 3: Tạo Database User 👤 HUMAN

Atlas sẽ tự động hiện popup **"Connect to your cluster"** ngay sau khi tạo cluster.

1. **Authentication Method:** chọn **"Username and Password"**
2. Nhập:
   - **Username:** `blogadmin` (hoặc tên bạn muốn)
   - **Password:** click **"Autogenerate Secure Password"** → click **"Copy"** để lưu lại
   - ⚠️ **LƯU PASSWORD NÀY LẠI** vào notepad/1Password — sẽ cần cho connection string
3. Click **"Create Database User"**

> ⚠️ Password không được chứa ký tự đặc biệt như `@`, `#`, `%` vì sẽ gây lỗi trong connection string URI. Nếu autogenerate có ký tự đặc biệt, hãy tự đặt password chỉ gồm chữ + số.

---

## Step 4: Cấu hình Network Access 👤 HUMAN

Vẫn trong popup "Connect", hoặc vào **"Network Access"** (sidebar trái):

1. Click **"Add IP Address"**
2. Click **"Allow Access from Anywhere"** → điền `0.0.0.0/0`
   - Điều này cho phép mọi IP kết nối (cần cho Render — vì Render IP thay đổi)
   - ⚠️ Với project học tập thì OK. Production thật thì nên giới hạn IP.
3. Click **"Confirm"**

---

## Step 5: Lấy Connection String 👤 HUMAN

1. Vào **"Database"** (sidebar trái) → click **"Connect"** (nút bên cạnh cluster)
2. Chọn **"Drivers"** (Connect your application)
3. Driver: **Node.js**, Version: **6.0 or later**
4. Copy connection string, dạng:
   ```
   mongodb+srv://blogadmin:<password>@my-blog.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. **Thay `<password>`** bằng password đã tạo ở Step 3
6. **Thêm tên database** vào URI: thay `/?` thành `/blog_dev?`
   ```
   mongodb+srv://blogadmin:yourpassword@my-blog.xxxxx.mongodb.net/blog_dev?retryWrites=true&w=majority
   ```
7. **Lưu connection string này** — sẽ dùng ở Phase 2 và Phase 4

---

## Checklist
- [ ] Tạo tài khoản Atlas
- [ ] Tạo cluster M0 Free (region Singapore/gần VN)
- [ ] Tạo database user + lưu password
- [ ] Allow access from anywhere (0.0.0.0/0)
- [ ] Copy connection string + thay password + thêm tên DB

## Output
→ Connection string hoàn chỉnh, sẵn sàng dùng cho Phase 2.
