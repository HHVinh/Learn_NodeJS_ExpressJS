// YÊU CẦU
// 1️⃣ Trang /

// Hiển thị form:

// Họ tên: [__________]
// [Nút Gửi]

// 2️⃣ Khi submit:

// ❌ Nếu trống → báo lỗi + link “Quay lại”

// ✅ Nếu có → hiển thị:

// Xin chào <Họ tên>

const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extends: true}));

app.get('/', (req, res) => {
    res.send(
        `<h2>Nhập họ và tên</h2>
        <form method='POST' action='/submit'>
            <label>Nhập họ và tên</label>
            <input type='text' name='name'></input>
            <button type='submit'>Gửi</button>
        </form>`
    );
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    if(!name) {
        res.send(`
            <p style="color:red;">Nhập họ và tên</p>
            <a href="/">Quay lại</a>
        `)
    } else {
        res.send(`Xin chào ${name}!`)
    }
});

app.listen(port, () => {
    console.log("http://localhost:3000/");
});