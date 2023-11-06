const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
    console.log(ctx.method, ctx.path); // post login
    // according to this two params to handle
    // but we always use router to use
});

app.listen(8888, () => {
    console.log('Koa server started successfully!');
});