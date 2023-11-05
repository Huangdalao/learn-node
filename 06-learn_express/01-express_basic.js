const express = require('express');

// 1、create a server
const app = express()

app.post('/login', (req,res) => {
    // handle login
    res.end('login success')
})

app.get('/getProductList', (req,res) => {
    res.end('getProductList success')
})

// 2、start the server 
app.listen('8888', () => {
    console.log('Express server start successfully!');
})
