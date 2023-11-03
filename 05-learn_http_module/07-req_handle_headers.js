const http = require('http');

// 1.create a server
const server = http.createServer((req, res) => {
    // request  url/method/headers/params
    console.log(req.headers);
    /**
     * content-type：请求携带的数据的类型，包括以下取值：

        application/x-www-form-urlencoded：表示数据被编码成以 '&' 
        分隔的键值对，同时以 '=' 分隔键和值。

        application/json：表示是一个 json 类型；

        text/plain：表示是文本类型；

        application/xml：表示是 xml 类型；

        multipart/form-data：表示是上传文件；
     */
    console.log(req.headers['content-type']);

    const token = req.headers.authorization;
    console.log(token); // Bearer aaa
    res.end('hello world!');
});

// 2.start the server and set port
// port scope 1024 - 65535  2*10 - 256*256
server.listen(8080, () => {
    console.log('Server started successfully!');
});