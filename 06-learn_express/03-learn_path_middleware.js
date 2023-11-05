const express = require('express');

const app = express();

app.get('/getProduct', (req,res,next) => {
    next()
})

// path middleware can limit path but it couldn't 
// limit methods
app.use('/getProduct',(req,res,next) => {
    console.log('path middleware');
})
app.use((req,res,next) => {
    console.log('common middleware');
})




app.listen(8888, () => {
    console.log('Express start successfully!');
})