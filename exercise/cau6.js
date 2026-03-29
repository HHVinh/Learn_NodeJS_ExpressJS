// Level 1: HTTP là gì + tạo server đơn giản
// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end('Xin chào, tôi đang học Node.js thuần');
// });

// server.listen(3000);
// console.log('Server sẵn sàng phục vụ tại http://localhost:3000');



// Level 2: req / res là gì? Routing thủ công (if req.url)
// const http = require('http');
// const server = http.createServer((req, res) => {
//     const URL = req.url;
//     if (URL === '/')
//         res.end("Đây là Trang chủ");
//     else if (URL === '/about')
//         res.end("Đây là trang giới thiệu")
//     else
//         res.end("404 - Không tìm thấy trang")

// });

// server.listen(3000);
// console.log('http://localhost:3000');



// Level 3: Query string (?name=)
// const http = require('http');
// const url = require('url');
// const queryString = require('querystring');

// const server = http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url);
//     const pathName = parsedUrl.pathname;
//     const params = queryString.parse(parsedUrl.query)

//     if (pathName === '/')
//         res.end('Trang chu');
//     else if (pathName === '/hello') {
//         const name = params.name
//         if (name)
//             res.end(`Xin chào ${name}`);
//         else
//             res.end('Xin chào bạn');
//         }
//     else
//         res.end('404')
// })

// server.listen(3000, () => {
//     console.log('http://localhost:3000');
// });



// Level 4: GET vs POST
const http = require('http');
const queryString = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(`
            <form method='POST' action='/hello'>
                <h1>Nhập thông tin</h1>
                <label>Họ và tên:</label>
                <input name='name'>
                <button type='submit'>Gửi</button>
            </form>
        `);
        return
    } else if (req.method === 'POST' && req.url === '/hello') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        req.on('end', () => {
            const params = queryString.parse(body);
            const name = params.name;
            
            res.end(`Xin chao ${name}`);
        return;
        });
    } else
        res.end('404')
});

server.listen(3000, () => {
    console.log('http://localhost:3000');
});


// Level 5: HTML form + xử lý dữ liệu




// Level 6: Tách file, viết gọn hơn