/**
 * 测试node文件读写之读取文件
 */
// 1.第一步加载核心fs模块
var fs = require('fs')
// 2.调用核心模块的api
// 注意callback里面的参数第一个为错误信息，第二个为正确信息，不要搞混淆了。
// 注意如果路径文件不存在，则直接创建对应的文件路径，而不是报错
fs.readFile('./source/testFile1.text',function(error,data){
    if(error){
        // 如果报错信息不为null
        console.log('文件读取失败');
        //读取失败者返回出错的信息，为一个对象
        //ENOENT: no such file or directory, open 
        //'D:\documents\Git\BasicKnowledgeLearning\NodeJS\code\第一天\01_文件的读写\source\testFile1.text'
        console.log(error.toString());
    } else {
        // 读取成功之后返回的是文件的内容也就是data为hello nodeJS
        console.log('文件读取成功,文件信息为:');//文件读取成功,文件信息为:
        console.log(data.toString());//'hello nodeJS'
    }
})
// ctrl +c 可以停止node