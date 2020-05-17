/**
 * 创建留言板服务器
 */
var http = require('http');
var fs = require('fs');
var template = require('art-template');
var url = require('url');

var commonList = [{
    name:'silly1',
    comment:'hello world1',
    dateTime:'2019-09-24'
},{
    name:'silly2',
    comment:'hello world2',
    dateTime:'2019-09-24'
},{
    name:'silly3',
    comment:'hello world3',
    dateTime:'2019-09-24'
},{
    name:'silly4',
    comment:'hello world4',
    dateTime:'2019-09-24'
},{
    name:'silly5',
    comment:'hello world5',
    dateTime:'2019-09-24'
},{
    name:'silly6',
    comment:'hello world6',
    dateTime:'2019-09-24'
}]

var server = http.createServer();
server.on('request',function(request,response){
    var urlObj = url.parse(request.url,true);
    console.log(urlObj)
    var urlPath = urlObj.pathname;
    if(urlPath ==='/'){//  // 渲染首页
        fs.readFile('./views/index.html',function(error,data){
            if(error){
                console.log('读取index.html报错：'+error);
            } else {
                // 通过art-template模板引擎渲染
                data = data.toString();// 16进制数字转字符串
                var str = template.render(data,{commonList:commonList})
                // 将已经渲染完成的数据提交给浏览器
                return response.end(str)
            }
        })
    } else if(urlPath.indexOf('/public') === 0){ // 针对public文件里面的静态资源开放
        // 可以知道url 为/public/img,或者public/css这种形式，所以可以在此处灵活设置开放资源
        fs.readFile('.'+ urlPath,function(error,data){
            if(error){
                console.log('public资源请求失败:'+error);
                fs.readFile('./views/error.html',function(error,data){
                    return response.end(data);
                })
            } else {
                return response.end(data)
            }
        })
    } else if(urlPath === '/post'){
        fs.readFile('./views/post.html',function(error,data){
            if(error){
                console.log('添加页面读取错误:'+error);
                 //渲染错误页面
                fs.readFile('./views/error.html',function(error,data){
                        return response.end(data);
                })
                
            } else {
                fs.readFile('./views/post.html',function(error,data){
                    if(error){
                        console.log('添加编辑读取错误:'+error);
                        //渲染错误页面
                       fs.readFile('./views/error.html',function(error,data){
                               return response.end(data);
                       })

                    } else {
                        return response.end(data);
                    }
                })
            }
        })
    } else if(urlPath === '/pinglun'){
        // 将传递过来的数据天添加到数组中
        var obj = {};
        obj.name = urlObj.query.name;
        obj.comment = urlObj.query.message;
        obj.dateTime = '2020-12-31';
        commonList.unshift(obj);
        console.log(commonList);
        
        // 重定向到首页
        response.statusCode = 302;
        response.setHeader('Location','/');
        response.end();

    }  else {
        //渲染错误页面
        fs.readFile('./views/error.html',function(error,data){
            return response.end(data);
        })
    }
})
server.listen(9000,function(error,data){
    console.log('server is running');
})