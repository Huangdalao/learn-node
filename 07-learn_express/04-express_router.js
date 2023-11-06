const express = require('express');
const { userRouter } = require('./router/userRouter');
const { json: parseJson, urlencoded: parseUrlencoded } = express;
// create a server
const app = express();

// handle application/json message to json in req.body
app.use(parseJson());
// handle application/x-www-form-urlencoded message to json in req.body
app.use(parseUrlencoded({ extended: true }));

app.post('/login', (req, res, next) => {
    res.end('login success');
});

// 用户相关的接口，使用 app 注册中间件
// app.get('/users', (req, res, next) => {
//     res.end('返回了用户列表~');
// });
// app.get('/users/:id', (req, res, next) => {
//     console.log('id:', req.params.id);
//     res.end('返回了用户信息~');
// });
// app.post('/users', (req, res, next) => {
//     res.end('新增了用户列表~');
// });
// app.delete('/users/:id', (req, res, next) => {
//     console.log('id:', req.params.id);
//     res.end('删除了用户~');
// });
// app.patch('/users/:id', (req, res, next) => {
//     console.log('id:', req.params.id);
//     res.end('修改了用户~');
// });

// const userRouter = express.Router();
// app.use('/users', userRouter);
// userRouter.get('/', (req, res, next) => {
//     res.end('返回了用户列表~');
// });
// userRouter.get('/:id', (req, res, next) => {
//     console.log('id:', req.params.id);
//     res.end('返回了用户信息~');
// });
// userRouter.post('/', (req, res, next) => {
//     res.end('新增了用户列表~');
// });
// userRouter.delete('/:id', (req, res, next) => {
//     console.log('id:', req.params.id);
//     res.end('删除了用户~');
// });
// userRouter.patch('/:id', (req, res, next) => {
//     console.log('id:', req.params.id);
//     res.end('修改了用户~');
// });

app.use('/users', userRouter);

app.listen('8888', () => {
    console.log('Express server started successfully!');
});