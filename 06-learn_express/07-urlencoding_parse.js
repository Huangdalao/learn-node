const express = require('express');

// create app server 
const app = express();

app.post('/login', (req, res, next) => {
    
});

app.listen('8888', () => {
    console.log('Express server started successfully!');
});