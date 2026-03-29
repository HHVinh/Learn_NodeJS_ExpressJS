// Yêu cầu:

// Dùng Express

// Khi mở http://localhost:3000

// Trình duyệt hiển thị đúng:

// Xin chào NodeJS

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Xin chào NodeJS');
});

app.listen(port, () => {
    console.log("Sever running on localhost: http://localhost:3000/");
});