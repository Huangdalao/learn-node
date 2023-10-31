const fs = require('fs');

const path = '../assets/abc.txt';

// 1、同步读取
// 报错会中断代码
const res = fs.readFileSync(path, { encoding: 'utf8' });
console.log(res);

// 2、异步读取
fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

// 3、promise异步读取
fs.promises.readFile(path, { encoding: 'utf8' }).then(res => {
    console.log(res);
}).catch(err => {
    console.log((err));
});