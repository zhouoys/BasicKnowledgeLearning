/**
 * 学生信息管理系统的增删改查
 */
var express = require('express');
var template = require('art-template');
var bodyParser = require('body-parser');
// var router = require('./router');
var router = require('./router1');

// 服务器创建
var app = express();
// 静态资源开放处理
app.use('/node_modules/',express.static('./node_modules'))
app.use('/public/',express.static('./public'))
// 配置art-template
app.engine('html',require('express-art-template'));
// 配置body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// 将路由容器挂载道express中
app.use(router)
//设置监听
app.listen(9000,function(){
    console.log('the server is running');
})
