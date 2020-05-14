/**
 * 测试文件的读写操作之写出
 */
 // 第一步引入核心模块
 var fs = require('fs');
 // 调用fs的api
 fs.writeFile('./source/testFile4.pop','我是新创建的文件中写入的数据',function(error,data){
    if(error){
        // 失败则error返回失败对象，包含失败信息
        // [Error: ENOENT: no such file or directory, open 'd:\documents\Git\BasicKnowledgeLearning\NodeJS\source\testFile.text'] {
        //     errno: -4058,
        //     code: 'ENOENT',
        //     syscall: 'open',
        //     path: 'd:\\documents\\Git\\BasicKnowledgeLearning\\NodeJS\\source\\testFile.text'
        console.log('文件写入失败');//文件写入失败
        console.log(error);//null
    } else {
        console.log('文件写入成功');//文件写入成功
        console.log(data);//undefined
        
    }
 })