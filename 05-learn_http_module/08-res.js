const http = require('http');

// 1.create a server
const server = http.createServer((req, res) => {
    // set timeout
    res.setTimeout(100);
    // because res is write stream, so we can use end to send msg
    setTimeout(() => {
        res.write('hello!');
        res.write('哈哈哈');
        res.end('end!');
    }, 300);
    // res.closed() // the method is set to read-only, so we couldn't use it
});

// 2.start the server and set port
// port scope 1024 - 65535  2*10 - 256*256
server.listen(8080, () => {
    console.log('Server started successfully!');
});