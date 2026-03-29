// YÊU CẦU BÀI TOÁN

// 1️⃣ Trang /
// → Hiển thị form nhập ID

// 2️⃣ Khi nhấn Submit
// → Hiển thị:

// ID bạn nhập là: xxx

// Nếu id rỗng → “Vui lòng nhập ID”

// Nếu có → “ID hợp lệ: xxx”


const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`
        <h2>Hãy nhập ID</h2>
        <form method='POST' action='/submit'>
            <label>Id:</label>
            <input type='text' name='id'></input>
            <button type='submit'>Gửi</button>
        </form>
    `);
});

app.post('/submit', (req, res) => {
    const id =req.body.id;
    if (!id) {
        res.send(`
            <p style="color:red;">Hãy nhập ID trước</p>
            <a href="/">Quay lại</a>
        `);
        
    }
    else {
        res.send(`ID của bạn là: ${id}`);
    };
});

app.listen(port, () => {
    console.log("Sever http://localhost:3000");
});