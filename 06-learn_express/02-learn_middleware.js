// The natural of middleware is cb
const express = require('express');

const app = express();
// There two types of middleware
// 1、 method middleware
app.post('/login', (req,res,next)  =>{
    // 1.1、 you can do anythings in cb
    console.log(req.url);

    // 1.2、 you can change req/res
    req.age = 18;

    // 1.3、 you can end the request
    // res.end('login success!')

    // 1.4、 you can use the middleware
    next()
})


// 2、 normal middleware
// every normal middleware will be called 
// in any method middleware, if method middle don't 
// res.end('response content')
app.use((req,res,next) => {
    // you can only call one middleware
    // expect you call next()
    next()
})

app.use((req,res,next) => {
    next()
})

app.use()

app.listen('8888', () => {
    console.log('Express server start!');
})