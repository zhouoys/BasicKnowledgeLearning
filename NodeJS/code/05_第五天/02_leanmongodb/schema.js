/**
 * 测试规定文档结构，也就是表结构
 */
// 引包
var mongoose = require("mongoose");
// 获取schema构造函数
var Schema = mongoose.Schema;
// 连接mongdb
mongoose.connect('mongodb://localhost/studentManager');
mongoose.Promise = global.Promise;
// 创建文档结构对象
var student = new Schema({
    name:{
        require:true,
        type:String
    },
    age:{
        require:true,
        type:Number
    },
    cardID:{
        require:true,
        type:String

    },
    comment:{
        type:String
    }
})
// 创建model
var Student = mongoose.model('studentInfo',student);
// 保存学生信息
for(var i = 0;i<50; i++){
    var student = new Student({
        name:'alice' + i,
        age:78 + i,
        cardID: '20141110154' + i,
        comment:'cool!!!'
    })
    student.save(function(error){
        if(error){
            console.log(error);
        } else {
            console.log('保存学生信息成功');1
        }
    })
}
