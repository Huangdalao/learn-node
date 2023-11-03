const http = require('http');

// 1.create a server
const server = http.createServer((request, response) => {
    // request  url/method/headers/params
    handleRequest(request, response)
});

// 2.start the server and set port
// port scope 1024 - 65535  2*10 - 256*256
server.listen(8080, () => {
    console.log('Server started successfully!');
});

function handleRequest(request,response) {
    const { url, method } = request;
    switch (url) {
        case '/login':
            method == 'POST' && response.end('login successfully')
            break;
        case '/product':
            method == 'GET' && response.end('get product list successfully')
            break;
        default:
            break;
    }
}