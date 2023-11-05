const express = require('express');

const app = express();

app.get('/getProduct', (req,res,next) => {

})

app.listen(8888, () => {
    console.log('Express start successfully!');
})