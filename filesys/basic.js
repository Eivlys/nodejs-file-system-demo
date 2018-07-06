const fs = require('fs');

try {
	console.info("同步删除文件");
    fs.unlinkSync('./files/delete');
    console.log('successfully deleted ./files/delete');
} catch (err) {
	console.log(err);
// handle the error
}

fs.rename('./files/hello', './files/world', (err) => {
 	console.info('异步修改文件属性');
    if (err) throw err;
    fs.stat('./files/world', (err, stats) => {
        if (err) throw err;
        console.log(`文件属性: ${JSON.stringify(stats)}`);
    });
});