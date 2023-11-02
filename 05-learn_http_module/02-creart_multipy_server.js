const http = require('http');

// 1.create a server
const server = http.createServer((request, response) => {
    response.end('2000 port response info')
});

server.listen(2000, () => {
    console.log('2000 port server start');
});


const server2 = http.createServer((request, response) => {
    console.log(111);
    response.end('2001 port response info')
});

server2.listen(2001, () => {
    console.log('2001 port server start');
});