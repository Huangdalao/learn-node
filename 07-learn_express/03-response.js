const express = require('express');
const { json: parseJson, urlencoded: parseUrlencoded } = express;
// create a server
const app = express();

// handle application/json message to json in req.body
app.use(parseJson());
// handle application/x-www-form-urlencoded message to json in req.body
app.use(parseUrlencoded({ extended: true }));

app.get('/home', (req, res, next) => {
    res.status(200);
    res.json({
        code:0,
        msg: 'home message',
        data: [
            {name: 'iphone', price: '312'},
            {name: 'xm', price: '312'},
            {name: 'computer', price: '312'},
        ]
    })
});

app.listen('8888', () => {
    console.log('Express server started successfully!');
});