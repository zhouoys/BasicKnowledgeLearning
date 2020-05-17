/**
 * 创建服务器
 */
 var fs = require('fs');
 var http = require('http');
 var server = http.createServer();
 var absolutePate = 'D:/documents/Git/BasicKnowledgeLearning/NodeJS/code/02_第二天/02_Apache目录/01_直接静态'
 server.on('request',function(request,response){
       var url = request.url;
       if(url === '/'){
            // 相比之前，此处采用绝对路径来完成         
           fs.readFile( absolutePate + '/index.html',function(error,data){
               if(error){
                   console.log('文件读取失败：'+error);
                  return response.end('404 Not Found')
               } else {
                   console.log('文件读取成功');
                  return response.end(data) 
               }
           })
       }else if(url ==='/apple/login'){
           fs.readFile(absolutePate + '/www/apple/login.html',function(error,data){
               if (error) {
                   console.log(error);
                  return response.end('404 Not Found')
               } else {
                   return response.end(data)
               }
           })
       }
 })
 server.listen(3000,function(){
     console.log('server is running');
 })