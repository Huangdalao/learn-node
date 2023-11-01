const fs = require('fs');

const buf = Buffer.alloc(8);
console.log(buf); // <Buffer 00 00 00 00 00 00 00 00>

console.log(buf[0]); // 0
console.log(buf[1]); // 0

buf[0] = 251;
buf[1] = 0x66;
console.log(buf); // <Buffer fb 66 00 00 00 00 00 00>
console.log(buf[0]); // 251
console.log(buf[1]); // 102
console.log(buf[1].toString()); // 102