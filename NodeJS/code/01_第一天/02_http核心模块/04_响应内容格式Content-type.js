/**
 * 知道我们的node解析字符串都是采用外国码也就是utf-8来解析的
 * 而电脑中的浏览器除非我们给它说明要采取什么信息来解析页面，否则
 * 都是按照操作系统的编码格式来解析的，所以可以知道我们中文操作系统的编码
 * 格式是GBK,所以浏览器按照GBK来解析html页面字符,所以这样就造成了页面乱码现象
 * 所以我们要使用Content-type设置响应头来告诉浏览器采用什么样的编码格式。
 */
var http = require('http');
var fs = require('fs')
var server = http.createServer();
server.on('request',function(request,response){
    // 设置中文乱码
    var code = request.url
    if(code === '/'){
        response.setHeader('Content-type','text/plain;charset=utf-8')
        response.end('中文乱码');
        return ;
    } else if(code === '/plain'){// 字符串文本
        // Nodejs Error: Can't set headers after they are sent错误解决
        // 在服务器返回响应时用return， 避免出现一次请求后，返回两次响应
        response.setHeader('Content-type','text/plain;charset=utf-8')
        // 采用text\plain无法解析html字符串
        response.end('<h1>中文正常</h1>');// <h1>中文正常</h1>
        return ;
    } else if(code === '/html'){// html字符串解析
        // 设置传递的字符串是html文本，用以被浏览器解析执行
        response.setHeader('Content-type','text/html;charset=utf-8');
        response.end('<h1>中文正常h1标题</h1>')//中文正常h1标题
        return ;
    } else if(code === '/htmlFile'){// 字符串文件
        // 读取html文件
        fs.readFile('./source/01_htmlFile.html',function(error,data){
            if(error){
                console.log('读取文件失败');
                console.log(error);
            } else {
                console.log('读取文件成功');//读取文件成功
                response.setHeader('Content-type','text/html;charset=utf-8')
                response.end(data);//这是一个被传到浏览器html文件
                return;
            }
        })

    } else if(code === '/img'){ // 图片资源解析
            fs.readFile('./source/timg11.png',function(error,data){
                if(error){
                    console.log('图片加载失败');
                    console.log(error);  
                } else{
                    console.log('图片加载成功');
                    response.setHeader('Content-type','image/png');// 图片采用特殊的编码格式，
                    //不需要指定utf-8这种字符而不是图片编码
                    //https://tool.oschina.net/commons 查询对应的图片编码格式
                    response.end(data);// time11.png
                    return ;   
                }
            })}
    })
server.listen(9000,function(){
    console.log('服务器启动成功!!!');
})