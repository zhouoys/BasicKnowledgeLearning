
// 引入express模块
const express = require('express');
// 创建服务器
const app = express();
// 处理请求
app.get('/',function(request,response){
    response.send('hello world! nodejs')
})
// 创建监听
app.listen(9000,function(){
    console.log('express server is running');
})




