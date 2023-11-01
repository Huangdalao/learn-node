const fs = require('fs');
const st = new Date();
fs.rename('../assets/abc.txt', '../assets/abc_rename.txt', (err) => {
    if (err) {
        console.log('file rename error!', err);
    }
    console.log('abc', new Date() - st);
    fs.rename('../assets', '../assets_rename', (err) => {
        if (err) {
            console.log('file rename error!', err);
        }
        console.log('assets', new Date() - st);
    });
});

