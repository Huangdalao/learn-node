const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     if (req.headers['content-type'].includes('application/json')) {
//         req.on('data', (data) => {
//             const jsonInfo = JSON.parse(data.toString());
//             req.body = jsonInfo;
//         });
//         req.on('end', () => {
//             next();
//         });
//     } else {
//         next();
//     }
// });

app.use(express.json())

app.post('/login', (req, res, next) => {
    console.log(req.body);
    const {username, password} = req.body;
    if (username === 'hly' && password === 'hly123') {
        res.end('login success! Welocome to home!')
    }else {
        res.end('username or password is error!')
    }
});

app.listen('8888', () => {
    console.log('Express server statr successfully!');
});