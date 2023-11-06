const express = require('express');
const { json: parseJson, urlencoded: parseUrlencoded } = express;
// create a server
const app = express();

// handle application/json message to json in req.body
app.use(parseJson());
// handle application/x-www-form-urlencoded message to json in req.body
app.use(parseUrlencoded({ extended: true }));

app.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        next(-1001)
    } else if (username !== 'hly' || password !== 'hly123') {
        next(-1002)
    }else {
        res.json({
            code: 200,
            message: 'login success',
            token: 'fjfhfjkldah2fr6g2fgds'
        })
    }

});

app.use((err,req,res,next)=>{
    const code = err; 
    let message = '';
    switch (code) {
        case -1001:
            message = 'please enter your username or password'
            break;
        case -1002:
            message = 'please enter right username or password'
            break;
    
        default:
            break;
    }
    res.json({
        code,
        message
    })
})

app.listen('8888', () => {
    console.log('Express server started successfully!');
});