const http = require('http');

// 1.create a server
const server = http.createServer((req, res) => {
    // 1、 by statusCode
    // res.statusCode = '200';

    // 2、 by writeHead
    res.writeHead('401', "you haven't authorization!")

    res.end('hhh')
});

// 2.start the server and set port
// port scope 1024 - 65535  2*10 - 256*256
server.listen(8080, () => {
    console.log('Server started successfully!');
});