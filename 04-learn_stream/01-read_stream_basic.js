const fs = require('fs');

// 1、once get fileInfo
// fs.readFile('./test.txt', (err, data) => {
//     console.log(data, 'readFile');
//     // <Buffer 68 65 6c 6c 6f 20 74 65 73 74 2e 74 78 74 21> readFile
// });

// 2、read file by stream
const readStream = fs.createReadStream('./test.txt', {
    start: 2,
    end: 20,
});
readStream.on('data', (data) => {
    console.log(data.toString()); // llo test.txt!程序 
});


const readStream2 = fs.createReadStream('./test.txt', {
    start: 2,
    end: 20,
    highWaterMark: 5
});
readStream2.on('data', (data) => {
    console.log(data.toString());
    readStream2.pause();
    setTimeout(() => {
        readStream2.resume()
    }, 1000);
});

// llo t
// est.t
// xt!�
// �序