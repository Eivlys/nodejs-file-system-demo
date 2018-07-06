const fs = require('fs');
let path = './files/watch.txt';

fs.watch(path, (eventType, filename) => {
	console.log(`事件类型是: ${eventType}`);
	if (filename) {
	    console.log(`提供的文件名: ${filename}`);
	} else {
	    console.log('未提供文件名');
	}
});