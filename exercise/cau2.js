// YÊU CẦU BÀI TOÁN

// Khi người dùng truy cập URL: http://localhost:3000/hello?name=Vinh&age=20
// 👉 Trang web hiển thị:

// Xin chào Vinh, bạn 20 tuổi

// Nếu thiếu name hoặc age  → hiển thị:

// Vui lòng nhập đầy đủ name và age

const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    const {name, age} = req.query;
    if (!name || !age) {
        res.send('Vui lòng nhập đầy đủ name và age');
        return
    };

    res.send(`Xin chào ${name}, bạn ${age} tuổi`);
});

app.listen(port, () => {
    console.log('Sever running on localhost: http://localhost:3000/');
});