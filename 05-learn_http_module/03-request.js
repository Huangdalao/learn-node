const http = require('http');
console.log(__dirname,__filename);
// 1.create a server
const server = http.createServer((request, response) => {
    // request  url/method/headers/params
    // 1、url infomation
    console.log(request.url); // /home

    // 2、method infomation
    console.log(request.method); // POST

    // 3、headers infomation
    /**
     * {
        'user-agent': 'PostmanRuntime/7.32.2',
        accept: '/',
        'postman-token': '7b069ecb-77e4-47fc-ab91-6fa038881a1f',
        host: '127.0.0.1:8080',
        'accept-encoding': 'gzip, deflate, br',
        connection: 'keep-alive',
        'content-length': '0'
    }
     */
    console.log(request.headers);

    response.end('hello world!');
});

// 2.start the server and set port
// port scope 1024 - 65535  2*10 - 256*256
server.listen(8080, () => {
    console.log('Server started successfully!');
});