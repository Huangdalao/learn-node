const fs = require('fs');

// 1、read file by stream
const readStream = fs.createReadStream('./test.txt', {
    start: 2,
    end: 20,
});


readStream.on('data', (data) => {
    console.log('file read');
});

readStream.on('open', (fd) => {
    fs.fstat(fd, (err, stats) => {
        // console.log(stats);
    });
    console.log('file open');
});


readStream.on('end', (fd) => {
    // It will auto call readStream.close()
    console.log('file close');
});

// console info
// file open
// file read
// file close