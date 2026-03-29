// YÊU CẦU
// Nhập Họ tên + Năm sinh → Tính tuổi

const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send(`
        <h1>Nhập thông tin</h1>
        <form method="POST" action="/submit">
            <label>Họ và tên</label>
            <input type="text" name="name"></input>
            <br><br>
            <label>Ngày sinh</label>
            <input type="date" name="dob"></input>
            <br><br>
            <button type="submit">Gửi</button>
        </form>
    `);
});

app.post("/submit", (req, res) => {
    const {name, dob} = req.body;

    if(!name || !dob) {
        res.send(`
            <p>Nhập đủ dữ liệu</p>
            <a href="/">Quay lại</a>
        `);
    } else {
        const namSinh = new Date(dob).getFullYear();
        const namHienTai = new Date().getFullYear();
        const tuoi = namHienTai - namSinh;
        
        res.send(`
            Xin chào ${name}, bạn ${tuoi} tuổi!
        `);
    };
});

app.listen(port, () => {
    console.log("http://localhost:3000");
});