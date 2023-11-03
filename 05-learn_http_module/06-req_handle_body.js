const http = require('http');

// 1.create a server
const server = http.createServer((req, res) => {
    // 1、 set encoding
    req.setEncoding('utf-8');
    let isLogin = false;

    // 2、handle body msg by listener
    req.on('data', (data) => {

        const loginInfo = JSON.parse(data);
        console.log(loginInfo); // { name: 'hly', pwd: 'hly123' }
        const { name, pwd } = loginInfo;

        if (name === 'hly' && pwd === 'hly123') {
            isLogin = true;
        } else {
            isLogin = false
        }
    });

    // 3、on end listener to send msg to client
    req.on('end', (data) => {
        if (isLogin) {
            res.end('login success');
        } else {
            res.end('login error');
        }
    });
});

// 2.start the server and set port
// port scope 1024 - 65535  2*10 - 256*256
server.listen(8080, () => {
    console.log('Server started successfully!');
});