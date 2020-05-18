// 测试重定向
var http = require('http');
var url = require('url');
var server = http.createServer();
server.on('request',function(request,response){
    var urlObjectb =url.parse(request.url,true);
    var urlpath =urlObjectb.pathname;
    if(urlpath === '/redirect'){
        // 执行301永久重定向，也就是缓存重定向
        response.statusCode = 302;
        response.setHeader('Location','/index');
        console.log('访问了redirect');
        return response.end();
    } else if(urlpath === '/index'){
        return response.end('hello index');
    } else {
        return response.end('404 Not found')
    }
})
server.listen(3000,function(){
    console.log('重定向启动');
})