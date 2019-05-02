// var http = require("http");
// var url = require("url");
// var server = http.createServer(function(req, res){
//     var req_path = url.parse(req.url).path;
//     var str = '<div style="font-size:24px;color:red">我们的请求路径为：'+req_path+'</div>';
//     res.writeHead(200, {'Content-Type' : 'text/html;charset=utf8'});
//     res.write(str);
// });
// server.listen('9090');



var http = require("http");
var url = require("url");
var fs = require("fs");
var server = http.createServer(function (req, res) {

    var req_path = url.parse(req.url).path;
    // 将url进行解析
    console.log(req_path);
    console.log("====================");
    console.log(url.parse(req.url));
    console.log("====================");
    console.log(req.url);
    var filepath = __dirname + req_path;

    fs.exists(filepath, function (exists) {
        // 判断文件是否存在
        if (exists) {
            fs.stat(filepath, function (err, stats) {

                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/html;charset=utf8' });
                    res.end('<div styel="color:black;font-size:22px;">server error</div>');
                } else {
                    console.log(stats);
                    if (stats.isFile()) {
                        // 判断是否是文件
                        var file = fs.createReadStream(filepath);
                        /* 
在js代码中，如果我们读取数据或者是打印数据，一般是var 或 let 一个变量，再打印出来

但是这样的方法需要开辟一个新的内存，来保存这个变量

当我们在网页上读取内存较大的文件时（比如视频、图片等），写入写出会极大的占用内存

这时候就需要在node.js中提供给我们的流  ——stream

stream可以边读边写，这样就可以更好的不占用太多内存，并且完成所需任务


                        */
                        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
                        file.pipe(res);
                        // 把文件中内容写入到输出中

                    } else {
                        // 如果是文件夹,显示文件夹中的所有文件
                        fs.readdir(filepath, function (err, files) {
                            var str = '';
                            for (var i in files) {
                                str += files[i] + '<br/>';
                            }
                            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
                            res.write(str);
                        });
                    }
                }
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html;charset=utf8' });
            res.end('<div styel="color:black;font-size:22px;">404 not found</div>');
        }
    });
});
server.listen('9090', '127.0.0.1');