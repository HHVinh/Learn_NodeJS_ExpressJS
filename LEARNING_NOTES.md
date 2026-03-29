# 📚 Tổng Kết Học Node.js/Express - Blog Project

> **Ngày học:** 04/02/2026  
> **Conversation ID:** 0d414f0f-6b63-4484-8997-003bad67975b

---

## 🎯 Tổng quan Project

Đây là một **Blog/Course Management** app với kiến trúc **MVC**:

```
src/
├── app/
│   ├── controllers/    # Xử lý logic
│   └── models/         # Schema MongoDB
├── config/db/          # Kết nối database
├── routes/             # Định nghĩa routes
├── resources/views/    # Template Handlebars
└── index.js            # Entry point
```

---

## ✅ Kiến Thức Đã Nắm Vững

| Chủ đề           | Mức độ | Ghi chú                                       |
| ---------------- | ------ | --------------------------------------------- |
| MVC Pattern      | ⭐⭐⭐ | Hiểu flow Model → Controller → View           |
| Route ordering   | ⭐⭐⭐ | Static route trước dynamic route              |
| Slug concept     | ⭐⭐⭐ | Hiểu lý do dùng slug thay vì \_id             |
| Helper functions | ⭐⭐⭐ | toObject(), check null/undefined              |
| Request flow     | ⭐⭐⭐ | index.js → routes → controller → model → view |

---

## 📚 Kiến Thức Cần Cải Thiện

### 1. Promise & Async/Await ⚠️

**Điểm yếu:** Hiểu sai thứ tự thực thi async

```javascript
console.log("1");
Course.findOne({}).then(() => console.log("2"));
console.log("3");
// Kết quả: 1, 3, 2 (KHÔNG PHẢI 1, 2, 3)
```

**Lý do:** JavaScript là non-blocking, Promise `.then()` luôn chạy SAU code đồng bộ.

**Cần học thêm:**

- Event Loop
- Call Stack vs Microtask Queue
- async/await syntax

---

### 2. Middleware ⚠️

**Điểm yếu:** Chưa hiểu rõ `express.urlencoded()` vs `express.json()`

- `urlencoded`: Parse body từ **form HTML** (Content-Type: application/x-www-form-urlencoded)
- `json`: Parse body từ **API calls** (Content-Type: application/json)

**Không phải** đọc từ URL!

---

### 3. Error Handling ⚠️

**Điểm yếu:** Chưa hiểu rõ `next(error)`

```javascript
.catch(next)  // = .catch(error => next(error))
```

- `next` là function chuyển sang middleware tiếp theo
- `next(error)` → chuyển đến error handling middleware

---

## 🔄 Câu Hỏi Đang Dở Dang

### Câu tiếp theo về Promise/Event Loop:

Tôi đã giải thích về:

- Call Stack
- Microtask Queue
- Tại sao `.then()` luôn chạy sau code đồng bộ

**Tiếp tục hỏi:** Viết code async/await, xử lý multiple promises, Promise.all(), etc.

---

## 📝 Checklist Học Tiếp

- [ ] Hiểu sâu Event Loop
- [ ] Viết lại controller methods bằng async/await
- [ ] Tạo error handling middleware
- [ ] Thêm validation cho form input
- [ ] Học về authentication (JWT/Session)

---

## 💬 Để Tiếp Tục Học

Khi quay lại, nói với Antigravity:

> "Xem file LEARNING_NOTES.md và tiếp tục dạy tôi phần Promise/Async-Await"

---

_File này sẽ được update mỗi khi học thêm kiến thức mới._
