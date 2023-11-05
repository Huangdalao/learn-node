const express = require('express');

const app = express();


// if this ask is too complex
// you can register some middleware to handle
app.get('/getProduct', (req,res,next) => {
    console.log('getProduct success 01');
    next()
}, (req,res,next) => {
    console.log('getProduct success 02');
    next()
}, (req,res,next) => {
    console.log('getProduct success 03');
    next()
}, (req,res,next) => {
    console.log('getProduct success 04');
})

app.listen(8888, () => {
    console.log('Express start successfully!');
})