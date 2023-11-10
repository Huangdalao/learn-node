const Koa = require('koa');
const KoaRouter = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const multer = require('@koa/multer');

const app = new Koa();
app.use(bodyParser());

const uploadUtil = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, './uploads');
        },
        filename(req, file, cb) {
            cb(null, `${Date.now()}_${file.originalname}`);
        }
    })
});

const userRouter = new KoaRouter({
    prefix: '/users'
});

userRouter.post('/uploadSingleImage', uploadUtil.single('image'), (ctx, next) => {
    console.log(`ctx.request.file:    ${ctx.request.file}`); // ctx.request.file:    [object Object]
    ctx.body = 'File uploaded successfully~'
});

userRouter.post('/uploadImages', uploadUtil.array('images'), (ctx, next) => {
    console.log(`ctx.request.file:    ${ctx.request.file}`);
    ctx.body = 'File uploaded successfully~'
});

app.use(userRouter.routes())

app.listen('8888', () => {
    console.log('Koa server started successfully ~');
});