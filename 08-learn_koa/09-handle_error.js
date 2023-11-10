const Koa = require('koa');
const KoaRouter = require('@koa/router');

const app = new Koa();


const userRouter = new KoaRouter({ prefix: '/users' });

userRouter.get('/', (ctx, next) => {
    const isLogin = false;

    // 1. handle separately
    // if (isLogin) {
    //     ctx.body = {
    //         code: 0,
    //         "message": {
    //             name: 'hly',
    //             age: 18,
    //             height: 180,
    //         }
    //     };
    // } else {
    //     ctx.body = {
    //         code: -1001,
    //         "message": 'Your login have expired, please login again!'
    //     };
    // }

    // 2. handle by error listener
    if (isLogin) {
        ctx.body = {
            code: 0,
            "message": {
                name: 'hly',
                age: 18,
                height: 180,
            }
        };
    } else {
        app.emit('error', -1003, ctx);
    }
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.on('error', (code, ctx) => {
    let message = '';
    switch (code) {
        case -1001:
            message = '帐号或密码错误~';
            break;
        case -1002:
            message = '请求参数不正确~';
            break;
        case -1003:
            message = '未授权的请求,请检查token是否正确~';
        default:
            break;
    }
    ctx.body = {
        code,
        message
    };
});

app.listen(8888);