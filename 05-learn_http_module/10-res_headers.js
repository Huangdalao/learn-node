const http = require('http');

// 1.create a server
const server = http.createServer((req, res) => {
    // This string may be garbled in the browser
    // because browser's encoding may not be utf8

    // so we should tell browser it't encoding way

    // 1、by setHeader

    // res.setHeader('Content-Type', 'text/plain;charset=utf8;')
    // res.end('水岸东方'); 

    // res.setHeader('Content-Type', 'application/json')
    // res.end('{"message": "json"}'); 


    // 2、by writeHead

    // res.writeHead('200', {
    //     'Content-type': 'text/plain;charset=utf8;'
    // })
    // res.end('水岸东方'); 

    res.writeHead('200', {
        'Content-type': 'application/json'
    })
    res.end('{"message": "json"}'); 

});

// 2.start the server and set port
// port scope 1024 - 65535  2*10 - 256*256
server.listen(8080, () => {
    console.log('Server started successfully!');
});