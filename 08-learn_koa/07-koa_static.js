const Koa = require('koa');
const KoaRouter = require('@koa/router');
const koaStatic = require('koa-static');

const app = new Koa();

// users
const userRouter = new KoaRouter({ prefix: '/users' });

userRouter.post('/addUser', (ctx, next) => {

});

app.use(userRouter.routes());
app.use(koaStatic('./dist'));
app.use(koaStatic('./uploads'));

app.listen('8888');