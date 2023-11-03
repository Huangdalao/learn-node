const http = require('http');
const url = require('url');
const qs = require('querystring');
// 1.create a server
const server = http.createServer((req, res) => {
    const urlString = req.url;
    console.log(urlString); // /getProduct?pageSize=10&current=1

    /**
     * {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: '?pageSize=10&current=1',
        query: 'pageSize=10&current=1',
        pathname: '/getProduct',
        path: '/getProduct?pageSize=10&current=1',
        href: '/getProduct?pageSize=10&current=1'
    }
     */
    // 1、handle url
    const urlInfo = url.parse(urlString);
    console.log(urlInfo);

    // 2、handle query
    const querystring = urlInfo.query;
    const queryInfo = qs.parse(querystring);
    console.log(queryInfo); // { pageSize: '10', current: '1' }
    console.log(queryInfo.pageSize, queryInfo.current); // 10 1
});

// 2.start the server and set port
// port scope 1024 - 65535  2*10 - 256*256
server.listen(8080, () => {
    console.log('Server started successfully!');
});