// 使用express框架重写留言板功能
const express = require('express');
const template = require('art-template');
const fs = require('fs');
// 创建服务器
const server = express();
// 设置端口号
const part = 9000;
console.log('-------------------创建数据-------------------------------------------------------');
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

// 处理请求响应
console.log('-------------------处理请求响应---------------------------------------------------');
/**
 *首页渲染
 */
server.get('/',function(request,response){
    fs.readFile('./views/index.html',(error,data)=>{
        if(error){
            console.log('首页数据读取失败');
            return response.send('<h1>index file read failed</h1>')
        } else {
            var str = template.render(data.toString(),{
                commonList:commonList
            })
            return response.send(str);
        }
    })
});
/**
 * 留言添加
 */
server.get('/post',function(request,response){
    fs.readFile('./views/post.html',function(error,data){
        if(error){
            console.log('添加留言数据读取失败');
            response.setHeader('Content-Type','text/html')
            return response.send('<h1>post file read failed</h1>')
        } else {
            response.setHeader('Content-Type','text/html')
            return response.send(data);
        }
    })
    });
/**
 * 添加之后跳转
 */
server.get('/pinglun',function(request,response){
      // 添加到评论数据中
      request.query.dateTime = '2020-09-09';
      commonList.unshift(request.query);
      // 执行重定向返回首页中,并重新渲染
      response.statusCode = 302;
      response.setHeader('Location','/')
      return response.send()
})
console.log('-------------------静态资源开放---------------------------------------------------');
// 处理开放资源的访问,只要这样做了，就可以通过/public/xx的方式来访问public目录下面的所有的静态资源
server.use('/public/',express.static('./public/'))
console.log('-------------------端口监听-------------------------------------------------------');
// 监听端口号
server.listen(part,()=>{
    console.log('server is runing');
})