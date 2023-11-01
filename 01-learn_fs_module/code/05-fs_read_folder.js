const fs = require('fs');

const path = '../assets/txts';

// 1、read folder  return fileName [ 'abc.txt', 'write.txt' ]
// fs.readdir(path, (err, files) => {
//     console.log(files); //[ 'abc.txt', 'write.txt' ]
// })

// 2、read folder retun an array of object with file infomation 
// the object has a method called isDirectory to determine whether it is a folder
// fs.readdir(path, {
//     withFileTypes: true,
// }, (err, files) => {
//     if (err) return;
//     console.log(files);
//     files.forEach(item => {
//         if (item.isDirectory()) {
//             console.log('item is a folder');
//         } else {
//             console.log('item is a file');
//         }
//     });
// });


// recursive foo
function recursionFoo(path) {
    fs.readdir(path, {
        withFileTypes: true,
    }, (err, files) => {
        if (err) return;
        files.forEach(item => {
            const _path = `${path}/${item.name}`
            if (item.isDirectory()) {
                recursionFoo(_path)
                console.log('item is a folder: ', _path);
            } else {
                console.log('item is a file: ', _path);
            }
        });
    });
}
recursionFoo(path);