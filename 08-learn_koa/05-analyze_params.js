const Koa = require('koa');
const KoaRouter = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const multer = require('@koa/multer');

const app = new Koa();

app.use(bodyParser());

const userRouter = new KoaRouter({ prefix: '/users' });
const formParser = multer();

// http://localhost:8888/users?name=hly
userRouter.get('/', (ctx, next) => {
    console.log(ctx.query); // { name: 'hly' }
    ctx.body = 'user list data ~';
});

// http://localhost:8888/users/asd
userRouter.get('/:type', (ctx, next) => {
    console.log(ctx.params.type); //asd
    ctx.body = 'user list data ~';
});

userRouter.post('/json', (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = 'user json info';
});

userRouter.post('/urlencoded', (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = 'user urlencoded info';
});

userRouter.post('/form-data', formParser.any(), (ctx, next) => {
    console.log(ctx.request.body, ctx.req.body);
    ctx.body = 'user form-data info';
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8888);