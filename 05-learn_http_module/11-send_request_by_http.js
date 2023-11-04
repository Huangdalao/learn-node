const http = require('http');
// 1、request by get
http.get('http://localhost:8080/home', (res) => {
    res.on('data', (data) => {
        const dataString = data;
        const dataInfo = JSON.parse(dataString);
        console.log(dataInfo); // { message: 'json' }
    });
});

// 2、request by post
const req = http.request({
    method: 'GET',
    hostname: 'localhost',
    port: 8080
}, (res) => {
    res.on('data', (data) => {
        const dataString = data;
        const dataInfo = JSON.parse(dataString);
        console.log(dataInfo); // { message: 'json' }
    });
});

// request必须调用end结束
req.end()