// YÊU CẦU BÀI TOÁN

// Khi người dùng truy cập URL:

// http://localhost:3000/hello?name=Vinh&age=20


// 👉 Trang web hiển thị:

// Xin chào Vinh, bạn 20 tuổi

const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    const {name, age} = req.query;
    res.send(`Xin chào ${name}, bạn ${age} tuổi`);
});

app.listen(port, () => {
    console.log('Sever running on localhost: http://localhost:3000/');
});