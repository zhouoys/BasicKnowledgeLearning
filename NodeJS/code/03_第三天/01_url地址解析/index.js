/**
 * 测试url地址解析
 */
var http = require('http');
// 引入url核心模块
var url = require('url')
var server = http.createServer();
 server.on('request',function(req,res){
     var urlObject = url.parse(req.url,true);//直接将参数转成对象形式输出
     console.log(urlObject);
     return res.end('hello url');
 })
 server.listen(9000,function(){
    console.log('server is runing');
 })