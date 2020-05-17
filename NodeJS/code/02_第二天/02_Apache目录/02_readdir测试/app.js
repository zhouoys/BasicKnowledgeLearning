/**
 * 采用手动字符串拼接，然后替换的方法
 */
var fs = require('fs');
var http = require('http');
var server = http.createServer();
var absolutePate = 'D:/documents/Git/BasicKnowledgeLearning/NodeJS/code/02_第二天/02_Apache目录/01_直接静态/www'
server.on('request',function(request,response){
      var url = request.url;
      if(url === '/'){
        // 相比之前，此处采用绝对路径来完成         
          fs.readFile('./template.html',function(error,data){
              if(error){
                  console.log('文件读取失败：'+error);
                 return response.end('404 Not Found')
              } else {
                    var dirs = fs.readdir(absolutePate,function(error,fileNames){
                    if(error){
                        console.log('获取目录文件失败：' + error);
                    } else {
                            var content = '';
                            console.log('fileNames:'+fileNames);
                            
                            fileNames.forEach(function(item){
                                content += `
                                <tr>
                                <td data-value="apple/"><a class="icon dir" href="/D:/Movie/www/apple/">${item}/</a></td>
                                <td class="detailsColumn" data-value="0"></td>
                                <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
                                </tr>
                            `
                            })
                            data = data.toString();
                            // 直接使用replace字符串替换
                            console.log(content);
                            data = data.replace('^_^', content)
                            console.log(data);
                            return response.end(data) 
                        }
                            })
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