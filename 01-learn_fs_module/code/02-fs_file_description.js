const fs = require('fs');

const path = '../assets/abc.txt';

fs.open(path, (err, fd) => {
    if (err) return;
    fs.fstat(fd, (err, stats) => {
        if (err) return;

        /**
         * Stats {
            dev: 2524556816,
            mode: 33206,
            nlink: 1,
            uid: 0,
            gid: 0,
            rdev: 0,
            blksize: 4096,
            ino: 844424931652280,
            size: 20,
            blocks: 0,
            atimeMs: 1698834072995.627,
            mtimeMs: 1698802759871.188,
            ctimeMs: 1698823232505.017,
            birthtimeMs: 1698802759871.188,
            atime: 2023-11-01T10:21:12.996Z,
            mtime: 2023-11-01T01:39:19.871Z,
            ctime: 2023-11-01T07:20:32.505Z,
            birthtime: 2023-11-01T01:39:19.871Z
        }
         */
        // 逻辑代码
        console.log(stats);

        // 文件打开后，不会自动关闭，需要手动关闭
        fs.close(fd);
    });
});