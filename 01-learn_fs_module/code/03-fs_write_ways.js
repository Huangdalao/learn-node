const fs = require('fs');

const path = '../assets/write.txt';

const content = '\nI am a piece of information sent from the client' + (Math.random() * 100).toFixed(0);


/**
 * flag: common values
 * w: writeFile api's default value, no file will automatically created
 * r: readFile api's default value
 * a: Abbreviation for append, which means opening a file for writing and 
 *    placing the stream at the end of the file. Create file if not present
 */
fs.writeFile(path, content, {
    encoding: 'utf8',
    flag: 'a'
}, (err) => {
    if (err) {
        console.log('文件写入失败！');
    } else {
        console.log('文件写入成功！');
    }
});

fs.promises.writeFile(path, content, {
    encoding: 'utf8',
    flag: 'a'
}).then(res => {
    console.log('文件写入成功！');
}).catch(err => {
    console.log('文件写入失败！');
});