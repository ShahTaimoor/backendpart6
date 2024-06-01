const path  = require('path')

// ! path.basename() -> Last path of the file

// const fileName = path.basename('/user/test/file.txt');
// console.log(fileName);


// ! path.dirname -> Directory name but the file

// const fileName = path.dirname('/user/test/file.txt');
// console.log(fileName);

// ! path.extname

// const fileName = path.extname('/user/test/file.txt');
// console.log(fileName);

// ! path.join

// const fileName = path.join('/user','test','file.txt');
// console.log(fileName);


// ! path.resolve

// const fileName = path.resolve('test','file.txt');
// console.log(fileName);

// ! path.isAbsolute

// const fileName = path.isAbsolute('/user/test');
// console.log(fileName);

// ! path.parse

const fileName = path.parse('/user/test/file.txt');
console.log(fileName);