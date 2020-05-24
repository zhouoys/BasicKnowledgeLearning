/**
 * 采用mongodb+mongoose方法，重写CRUD项目
 */
// 创建数据连接
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/zw_crud');

// 创建Schema
var StudentSchema = mongoose.Schema
var studentSchema = new StudentSchema({
    name:String,
    motto:String,
    gender:String,
    hobby:String
})

// 获取model
var Student = mongoose.model('StudentInfo',studentSchema);
// 将创建好的集合结构model（也就是表结构导出到router1.js）

module.exports = Student;