/**
 * 测试使用art-template结合express实现渲染机制
 */
// 1.引入文件
var express = require('express');
var template = require('art-template');
var fs = require('fs');

// 2.创建服务器
var app = express();
// 配置art-template的渲染引擎机制，默认是从view文件夹根目录查找,第一个参数也就是要渲染的文件的后缀名，可以修改
app.engine('html',require('express-art-template'));
/**
 * 修改默认的渲染页面的路径，（一般不做修改，此处是为了测试）
 */
// 将默认的views页面，改为page页面，思考一下，有没有将所有的页面都放置在views文件夹里面的这种可能
// 因为存在默认路径这种情况，貌似还真是只能这样，因为我们不能单独对一个请求页面做模块划分，除非在请求的
// 时候可以处理，倒是可以试一试
// app.set('views','page')
// 尝试设置多条路径
   app.set('views','default/demo');
   // Error: Failed to lookup view "param.html" in views directory "default/demo"
   // 此时当渲染param.html的时候，页面报错，所以符合预期
// 此处不用默认路径
// app.get('/demo',function(request,response){
//     fs.readFile('./views/demo/demo.html',function(error,data){
//        if(error){
//             console.log(error);
//        } else{
//         // response.render(data.toString()) 测试发现此时报错，说明无法采用res.render()这个渲染函数
//         // 来自定义渲染路径
//         response.send(data.toString());// 使用express自带的send就没有问题，说明此路不通。
//        }
//     })
// })

// 3.处理请求,渲染404页面
app.get('/index',function(request,response){
    response.render('404.html')
})
// 处理请求，渲染页面
app.get('/param',function(resquest,response){
    response.render('param.html',{
        person:{
            name:'杨过',
            age:45
        }
    })
})
//4. 监听端口
app.listen(3000,function(){
    console.log('the server is running');
})