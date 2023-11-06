const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
    ctx.body = 'hhh'
})

app.listen(8888, () => {
    console.log('Koa server started successfully!');
});