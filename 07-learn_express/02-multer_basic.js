const express = require('express');
const multer = require('multer');
const { json: parseJson, urlencoded: parseUrlencoded } = express;
// create a server
const app = express();

// handle application/json message to json in req.body
app.use(parseJson());
// handle application/x-www-form-urlencoded message to json in req.body
app.use(parseUrlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename(req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});
const upload = multer({ storage });

app.post('/uploadSingleImage', upload.single('image'), (req, res, next) => {
    res.end('upload success');
});

app.post('/uploadImages', upload.array('images', 12), (req, res, next) => {
    res.end('upload success');
});

app.listen('8888', () => {
    console.log('Express server started successfully!');
});