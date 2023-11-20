const fs = require('fs');


fs.readFile('./foo.txt', (err, data) => {
    console.log(data);
    !err && console.log('read success');
    fs.writeFile('./foo_copy.txt', data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('write success');
        }
    });
});



const readStream = fs.createReadStream('./foo.txt');
const writeStream = fs.createWriteStream('./foo_copy2.txt');

readStream.on('data', (data) => {
    writeStream.write(data, (err) => {
        console.log(err);
    });
});


const readStream2 = fs.createReadStream('./foo.txt');
const writeStream2 = fs.createWriteStream('./foo_copy3.txt');

readStream2.pipe(writeStream2);