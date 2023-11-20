const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const { json: parseJson, urlencoded: parseUrlencoded } = express;
// create a server
const app = express();


app.use(cors({
    origin: ['https://dev.linktopo.com'],
    optionsSuccessStatus: 200,
    credentials: true
}));

// handle application/json message to json in req.body
app.use(parseJson());
// handle application/x-www-form-urlencoded message to json in req.body
app.use(parseUrlencoded({ extended: true }));
app.post('/login', (req, res, next) => {
    res.end('login success');
});
app.post('/pulseData/pulseDataListDerive', (req, res) => {
    console.log(req.body);
    // let fileUrl = path.join(__dirname, './uploads/新建 XLSX 工作表.xlsx');
    // let fileUrl = path.join(__dirname, './uploads/新建 DOCX 文档.docx');
    // let fileUrl = path.join(__dirname, './uploads/新建 DOCX 文档.pdf');
    let fileUrl = path.join(__dirname, './uploads/1.jpg');
    res.sendFile(fileUrl);
});
app.listen('8888', () => {
    console.log('Express server started successfully!');
});