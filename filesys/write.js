const fs = require('fs');
let path = '/filesys/files/writeFile.txt';
let options = {
    flags: 'a',
};

/*writeFile*/
fs.writeFile(path, 'Node.js-writeFile', (err) => {
    if (err) throw err;
    console.log('读取文件新内容:', fs.readFileSync(path, 'utf8'));
    console.log('文件已保存！');
});


/*createWriteStream*/
let writable = fs.createWriteStream(path, options);
writable.on('error', (err) => {
    console.log('发生异常:', err);
});
writable.on('open', (fd) => {
    console.log('文件已打开:', fd);
});
writable.on('finish', () => {
    console.log('写入已完成..');
    console.log('读取文件新内容:', fs.readFileSync(path, 'utf8'));
});
writable.on('close', () => {
    console.log('文件已关闭！');
});
writable.write('Adding Content');
writable.end();

/*其中open，ready等为底层事件，当读取文件时，执行顺序为：open → ready → end → close，使用时可以直接调用fs.createWriteStream();


写入时已有内容会被覆盖，可以通过指定options中的flag属性向文件尾部追加数据*/