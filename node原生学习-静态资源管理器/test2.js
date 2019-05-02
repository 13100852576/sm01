// var fs = require("fs");
// var stream1=fs.createReadStream("3.txt")


var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
    console.log("data");
   data += chunk;
});

readerStream.on('end',function(){
    console.log("end");
   console.log(data);
});

readerStream.on('error', function(err){
    console.log("error");
   console.log(err.stack);
});

// readerStream.emit("end");
console.log("程序执行完毕");