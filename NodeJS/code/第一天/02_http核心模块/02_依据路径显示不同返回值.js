/**
 * 依据不同的request.url返回不同的值给浏览器
 */
// 引入核心模块
var http = require('http');
// 创建服务器
var server = http.createServer();
// 获取request,response
server.on('request',function(request,response){
    console.log('请求的路径:'+request.url);
    // 依据request.url的值来返回不同的值给浏览器
    var url = request.url;
    if(url === '/'){
        response.end('index page');
    } else if(url === '/login'){
        response.end('login page');
    } else {
        response.end('default page');
    }
});

// 绑定端口监听
server.listen('3000',function(){
    console.log('服务器启动了'); 
})