const http = require('http');
const fs = require('fs');

// 1.create a server
const server = http.createServer((req, res) => {
    // request  url/method/headers/params
    console.log(req.url); // /uploadFile

    const writeStream = fs.createWriteStream('./error.jpg',{
        flags: 'a+'
    })
    // if file is too big,it will send some times
    // so we can use writeStream to write
    // method 1
    // req.on('data', (data) => {
    /**
     * 
        <Buffer 2d 2d 2d 2d 2d 2d 2d 2d 2d 2d 2d 2d 2d 2d 
        2d 2d 2d 2d 2d 2d 2d 2d 2d 2d 2d 2d 2d 2d 39 39 33 
        36 32 33 39 37 37 31 39 39 31 30 38 38 39 33 38 39 31 33
         ... 228 more bytes>
    */
    // console.log(data)
    //     writeStream.write(data)
    // });
    // method 2
    req.pipe(writeStream)

    

    req.on('end', () => {
        res.end('file upload success!');
    });
});

// 2.start the server and set port
// port scope 1024 - 65535  2*10 - 256*256
server.listen(8080, () => {
    console.log('Server started successfully!');
});