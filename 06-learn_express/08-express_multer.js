const express = require('express');
const multer = require('multer');
// create app server 
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination (req, file, cb) {
            cb(null, './uploads');
        },
        filename (req, file, cb) {
            cb(null, Date.now() + '_' + file.originalname);
        }
    })
});

app.post('/uploadSingleImage', upload.single('image'), (req, res, next) => {
    console.log(req.file);
    res.end('upload success');
});
app.post('/uploadImages', upload.array('images'), (req, res, next) => {
    console.log(req.files);
    res.end('upload success');
});

app.listen('8888', () => {
    console.log('Express server started successfully!');
});