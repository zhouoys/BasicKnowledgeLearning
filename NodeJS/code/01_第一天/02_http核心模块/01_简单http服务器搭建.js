/**
 * 创建简单的nodjs服务器
 */
// 1 引入核心模块
var http = require('http');
// 2 创建服务器
var server = http.createServer();
// 3 获取请求、响应
server.on('request',function(request,response){
    // 打印请求的路径
    console.log('打印请求的路径:'+request.url);
    // 响应请求
    response.end('hello NodeJS')
});
// 4 绑定端口号，启动服务器
server.listen('3000',function(){
    console.log('服务器启动了');
})