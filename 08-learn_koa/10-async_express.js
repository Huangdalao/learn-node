const express = require('express');
const axios = require('axios');

// 创建 app 对象
const app = express();

// 编写中间件
app.use(async (req, res, next) => {
    console.log('express middleware01');
    req.msg = 'aaa';
    next(); // 在这里，如果使用 await 是无效的；express 中，next 返回的不是 Promise。
    // 返回值结果
    // res.json(req.msg) // 在这里返回结果，下方中间件中的 axios.get 异步操作还没执行。
});

app.use(async (req, res, next) => {
    console.log('express middleware02');
    req.msg += 'bbb';
    next(); // 在这里，如果使用 await 是无效的；express 中，next 返回的不是 Promise。
});

// 执行异步代码
app.use(async (req, res, next) => {
    console.log('express middleware03');
    const resData = await axios.get('http://123.207.32.32:8000/home/multidata');
    req.msg += resData.data.data.banner.list[0].title;

    // 只能在异步操作有结果后，返回响应结果，才将上方异步操作结果，放入执行后，返回的。
    res.json(req.msg);
});

// 启动服务器
app.listen(8888, () => {
    console.log('express服务器启动成功~');
});

// 客户端接收返回的结果："aaabbb焕新女装节"