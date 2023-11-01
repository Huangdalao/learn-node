const fs = require('fs');

const path = '../assets/abc.txt';

fs.open(path, (err, fd) => {
    if (err) return;
    fs.fstat(fd, (err, stats) => {
        if (err) return;

        // 逻辑代码
        console.log(stats);

        // 文件打开后，不会自动关闭，需要手动关闭
        fs.close(fd);
    });
});