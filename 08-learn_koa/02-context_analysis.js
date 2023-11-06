const Koa = require('koa');

const app = new Koa();

/**
 * {
        request: {
            method: 'POST',
            url: '/login',
        response: {
            status: 404,
            message: 'Not Found',
            header: [Object: null prototype] {}
        },
        app: { subdomainOffset: 2, proxy: false, env: 'development' },
        originalUrl: '/login',
        req: '<original node req>',
        res: '<original node res>',
        socket: '<original node socket>'
    }
 */
// http://localhost:8888/login
app.use((ctx, next) => {
    console.log(ctx);
    
    ctx.body = 'hhh'
})

app.listen(8888, () => {
    console.log('Koa server started successfully!');
});