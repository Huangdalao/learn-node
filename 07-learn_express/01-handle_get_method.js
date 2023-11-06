const express = require('express');
const { json: parseJson, urlencoded: parseUrlencoded } = express;
// create a server
const app = express();

// handle application/json message to json in req.body
app.use(parseJson());
// handle application/x-www-form-urlencoded message to json in req.body
app.use(parseUrlencoded({ extended: true }));

app.post('/login', (req, res, next) => {
    console.log(req.body);
    res.end('login success');
});

// http://localhost:8888/getUserInfo/schoolInfo?name=hly&age=18&id=1
app.get('/getUserInfo/:type', (req, res, next) => {
    console.log(req.params); // { type: 'schoolInfo' }
    console.log(req.query); // { name: 'hly', age: '18', id: '1' }
    res.end('getUserInfo success!');
});

app.listen('8888', () => {
    console.log('Express server started successfully!');
});