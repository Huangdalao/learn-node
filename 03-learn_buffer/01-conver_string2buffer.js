const fs = require('fs');

const str = 'hello world!';
const str2 = '你好啊';


// 1、not recommended and deprecated
// const buffer = new Buffer(str);
// console.log(buffer);


// 2、recomended
const buffer2 = Buffer.from(str2);
console.log(buffer2);
console.log(buffer2.toString());


// 3、Inconsistent encoding and decoding may result in garbled characters
const buffer3 = Buffer.from(str2, 'utf16le'); // encoding
console.log(buffer3);
console.log(buffer3.toString('utf8')); // decoding

