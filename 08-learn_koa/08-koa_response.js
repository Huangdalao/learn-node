const Koa = require('koa');
const KoaRouter = require('@koa/router');
const fs = require('fs');

const app = new Koa();


const userRouter = new KoaRouter({ prefix: '/users' });

userRouter.get('/getUserInfo', (ctx, next) => {
    // 1.string
    // ctx.body = 'user list data ~';

    // 2.buffer
    // In the browser client, the returned result will be downloaded as a file.
    // const buffer = Buffer.from('你好啊 hly ~')
    // ctx.body = buffer;  

    // 3.stream
    // Set the type of the returned stream. The default is text type. 
    // Set it to image/jpeg, which means a picture.
    // if set to image/jpeg, just like static resource, return as a image in browser client.
    // const readStream = fs.createReadStream('./uploads/1699581101558_u=4080826490,615918710&fm=193&f=GIF.jpg')
    // ctx.type = 'image/jpeg'; // if not set to image/jpeg, the returned result will be downloaded as a file.
    // ctx.body = readStream;

    // 4.as object/array type    the most used method

    ctx.body = {
        "serviceName": "users",
        "methodName": "getUserInfo",
        code: 0,
        "message": {
            name: 'hly',
            age: 18,
            height: 180,
        }
    };
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8888);