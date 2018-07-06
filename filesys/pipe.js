const fs = require("fs");
let inpath = './files/input.txt';
let outpath = './files/output.txt';

let readerStream = fs.createReadStream(inpath);
let writerStream = fs.createWriteStream(outpath);
readerStream.pipe(writerStream);
