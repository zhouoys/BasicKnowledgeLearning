/**
 * 测试获取客户端的ip地址和端口号
 */
var http = require('http');
var server = http.createServer();
server.on('request',function(request,response){
    console.log('打印客户端浏览器的id地址：'+ request.socket.remoteAddress);//打印客户端浏览器的id地址：::1
    console.log('打印客户端浏览器的端口号：'+ request.socket.remotePort);//打印客户端浏览器的端口号：1809
});

server.listen(3000,function(){
    console.log('服务器启动了');
})