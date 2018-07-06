const fs = require('fs');
let path = './files/readFile.txt';
let options = {
    encoding: 'utf8',
};

fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('buffer data',data);
});


let readable = fs.createReadStream(path, options);
readable.on('error', (err) => {
    console.log('发生异常:', err);
});
readable.on('open', (fd) => {
    console.log('文件已打开:', fd);
});
readable.on('ready', () => {
    console.log('文件已准备好..');
});
readable.on('data', (chunk) => {
    console.log('读取文件数据:', chunk);
});
readable.on('end', () => {
    console.log('读取已完成..');
});
readable.on('close', () => {
    console.log('文件已关闭！');
});

//其中open，ready等为底层事件，当读取文件时，执行顺序为：open → ready → end → close，使用时可以直接调用fs.createReadStream();