const fs = require("fs");
let inpath = '/filesys/files/input.txt';
let outpath = '/filesys/files/output.txt';

let readerStream = fs.createReadStream(inpath);
let writerStream = fs.createWriteStream(outpath);
readerStream.pipe(writerStream);
