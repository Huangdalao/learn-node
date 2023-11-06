const Koa = require('koa');
const KoaRouter = require('@koa/router');
const app = new Koa();

const userRouter = new KoaRouter({ prefix: '/users' });

userRouter.get('/', (ctx, next) => {
    ctx.body = 'user list';
});
userRouter.post('/', (ctx, next) => {
    ctx.body = 'add user';
});
userRouter.delete('/:id', (ctx, next) => {
    ctx.body = 'delete user';
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8888, () => {
    console.log('Koa server started successfully!');
});