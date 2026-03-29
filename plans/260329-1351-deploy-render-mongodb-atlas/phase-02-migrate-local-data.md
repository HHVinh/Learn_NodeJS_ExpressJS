---
phase: 2
title: Migrate Local Data to Atlas
status: pending
human_involved: partial
---

# Phase 2: Migrate Local MongoDB Data to Atlas

## Overview
Export dữ liệu từ MongoDB local → import lên Atlas cluster.

## Yêu cầu
- MongoDB local đang chạy (`mongod` active)
- Đã có connection string Atlas từ Phase 1
- Cài `mongodump` và `mongorestore` (có sẵn khi cài MongoDB)

---

## Step 1: Kiểm tra MongoDB Tools đã cài chưa 🤖 CLAUDE/HUMAN

Chạy trong terminal:
```bash
mongodump --version
mongorestore --version
```

**Nếu chưa có** (command not found):
```bash
# macOS với Homebrew
brew install mongodb-database-tools
```

---

## Step 2: Export dữ liệu từ local 🤖 CLAUDE/HUMAN

```bash
# Tạo folder chứa backup
mkdir -p ~/mongodb-backup

# Export toàn bộ database blog_dev
mongodump --db blog_dev --out ~/mongodb-backup
```

Sau khi chạy xong, kiểm tra:
```bash
ls ~/mongodb-backup/blog_dev/
```
Sẽ thấy các file `.bson` và `.metadata.json` cho mỗi collection (courses, etc.)

---

## Step 3: Import dữ liệu lên Atlas 👤 HUMAN

```bash
# Thay <ATLAS_CONNECTION_STRING> bằng connection string từ Phase 1
# Ví dụ: mongodb+srv://f8admin:password@f8-blog.xxxxx.mongodb.net

mongorestore --uri="<ATLAS_CONNECTION_STRING>" --db blog_dev ~/mongodb-backup/blog_dev
```

⚠️ **Lưu ý:**
- Connection string ở đây **KHÔNG** cần phần `?retryWrites=true&w=majority`
- Nếu gặp lỗi authentication: kiểm tra lại password, đảm bảo không có ký tự đặc biệt
- Nếu gặp lỗi network: kiểm tra Network Access đã allow 0.0.0.0/0 chưa

---

## Step 4: Verify dữ liệu trên Atlas 👤 HUMAN

1. Vào **Atlas Dashboard** → **Database** → click **"Browse Collections"**
2. Chọn database **blog_dev**
3. Kiểm tra:
   - Collection **courses** có đúng số documents không
   - Dữ liệu các fields (name, description, image, videoId, slug...) đúng không
   - Soft-deleted documents (nếu có) cũng được migrate

---

## Checklist
- [ ] Cài mongodb-database-tools (nếu chưa có)
- [ ] mongodump từ local thành công
- [ ] mongorestore lên Atlas thành công
- [ ] Verify dữ liệu trên Atlas Dashboard

## Output
→ Dữ liệu đã có trên Atlas, sẵn sàng cho Phase 3.
