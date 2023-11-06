const express = require('express');
const { json: parseJson, urlencoded: parseUrlencoded } = express;
// create a server
const app = express();
// handle application/json message to json in req.body
app.use(parseJson());
// handle application/x-www-form-urlencoded message to json in req.body
app.use(parseUrlencoded({ extended: true }));
app.use(express.static('./uploads'));
app.use(express.static('./dist'));

app.post('/login', (req, res, next) => {
    res.end('login success');
});

app.listen('8888', () => {
    console.log('Express server started successfully!');
});