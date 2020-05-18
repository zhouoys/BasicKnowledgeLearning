/**
 * 测试express
 */
const express = require('express');
const app = express();
const part = 9000;
app.get('/',function(request,response){
    response.send('hello world Express')
})
app.listen(part,() =>{
    console.log('the express server is starting');
})