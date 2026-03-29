---
phase: 5
title: Verify & Go Live
status: pending
human_involved: true
---

# Phase 5: Verify & Go Live

## Overview
Kiểm tra toàn bộ chức năng trên production, đảm bảo mọi thứ hoạt động.

---

## Step 1: Test các trang chính 👤 HUMAN

Mở `https://my-blog.onrender.com` (hoặc URL của bạn) và kiểm tra:

| Trang | URL | Kiểm tra |
|-------|-----|----------|
| Home | `/` | Hiển thị đúng layout, CSS loaded |
| Courses list | `/courses` hoặc `/me/stored/courses` | Hiển thị courses đã migrate |
| Create course | `/courses/create` | Form hoạt động, submit tạo course mới |
| Edit course | `/courses/:id/edit` | Sửa course, save thành công |
| Delete course | (soft delete button) | Xóa mềm hoạt động |
| Trash | `/me/trash/courses` | Hiển thị courses đã xóa |
| Restore | (restore button) | Khôi phục course đã xóa |

---

## Step 2: Kiểm tra CSS/Styles 👤 HUMAN

- Trang hiển thị đúng styling (không bị raw HTML)
- Nếu CSS bị lỗi: kiểm tra build step đã compile SCSS chưa
  - Vào Render logs → tìm dòng `sass` trong build output

---

## Step 3: Test auto-deploy 👤 HUMAN

1. Sửa nhỏ 1 file trong local (vd: thêm comment)
2. Commit & push lên GitHub
3. Kiểm tra Render dashboard → tab **"Events"** → thấy deploy mới tự động trigger
4. Chờ deploy xong → verify thay đổi trên live URL

---

## Lưu ý vận hành

### Cold Start (Free Tier)
- App sẽ tự **tắt sau 15 phút** không có request
- Request đầu tiên sau đó mất **30-50 giây** để khởi động lại
- Đây là giới hạn của free tier, không phải bug

### MongoDB Atlas Limits (M0)
- **512MB** storage
- **500 connections** max
- Đủ cho project học tập, không phù hợp production thật

### Khi cần update env vars
- Vào Render Dashboard → Service → **"Environment"** tab
- Sửa giá trị → Render tự restart app

---

## Checklist
- [ ] Tất cả trang hiển thị đúng
- [ ] CRUD courses hoạt động (create, read, update, soft delete)
- [ ] CSS/styles load đúng
- [ ] Auto-deploy từ GitHub hoạt động
- [ ] Hiểu giới hạn free tier (cold start, 512MB)

## Done 🎉
App đã live và hoạt động. Mỗi lần push code lên GitHub main branch, Render tự động deploy lại.
