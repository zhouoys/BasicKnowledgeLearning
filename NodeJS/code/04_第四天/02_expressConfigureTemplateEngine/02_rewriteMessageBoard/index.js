/**
 * 使用express+art-template重写留言板案例
 */
// 引包
var express = require('express');
var template = require('art-template');
// post请求单独处理
var bodyParser = require('body-parser')
// 创建数据
var commentList = [
    {id:'10001',
     name:'silly',
     comment:'hello world',
     dateTime:'2019-12-12 09:26:45'
    },
    {id:'10002',
    name:'silly',
    comment:'hello world',
    dateTime:'2019-12-12 09:26:45'
   },
   {id:'10003',
   name:'silly',
   comment:'hello world',
   dateTime:'2019-12-12 09:26:45'
  },
  {id:'10004',
  name:'silly',
  comment:'hello world',
  dateTime:'2019-12-12 09:26:45'
 }]
// 创建服务器
var app = express();
// 配置express-art-template
app.engine('html',require('express-art-template'));
// 配置body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
// 配置开放静态资源
app.use('/node_modules/',express.static('./node_modules'));
app.use('/public/',express.static('./public'))
// 处理 首页请求
app.get('/index',function(request,response){
    response.render('index.html',{
        title:'留言板案例',
        commonList:commentList
    })
})
// 保存新添加的评论记录
app.post('/index',function(request,response){
    var comment = request.body; // 直接使用body-parser技术
    comment.id = new Date().getTime().toString();
    comment.dateTime = '2020-02-02 02-20-22';
    commentList.unshift(comment);
    response.redirect('/index');
})

// 处理 添加请求
app.get('/addItem',function(request,response){
    response.render('addItem.html')
})
// 监听端口
app.listen(3000,function(){
    console.log('the server is running');
})
