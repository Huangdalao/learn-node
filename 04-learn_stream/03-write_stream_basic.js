const fs = require('fs');

fs.writeFile('./write.txt', '\nwrite by writeFile', {
    flag: 'a'
}, (err) => {
    console.log(err);
});

const writeStream = fs.createWriteStream('./write.txt', {
    flags: 'a'
});

writeStream.write('\nwrite by writeStream');

// you should manual close to make close cb effective
// 1、by close
// writeStream.close()

// 2、by end
writeStream.end('\nwrite end')


// listen methods
writeStream.on('open', () => {
    console.log('file opend!');
});

writeStream.on('finish', () => {
    console.log('file finished!');
});

writeStream.on('close', () => {
    console.log('file closed!');
});
