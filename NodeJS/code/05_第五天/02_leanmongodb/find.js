// 测试find接口
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/findemo');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var person  = new Schema({
    name:String,
    age:Number
});

var PersonInfo = mongoose.model('PersonInfo',person);
var person1 = new PersonInfo({
    name:'sily',
    age:18
})
person1.save(function(error){
    if(error){
        console.log(error);  
    }
})
var person2 = new PersonInfo({
    name:'smith',
    age:55
})
person2.save(function(error){
    if(error){
        console.log(error);
    }
})
// 不带参数查询所有
PersonInfo.find(function(error,data){
    if(error){
        return console.log(error);
    } else {
        //console.log("data:",data);
        return console.log(data);
    }
})
// [
//     { _id: 5ec8f5100480c01a30d0d1d3, name: 'sily', age: 18, __v: 0 }, 
//     { _id: 5ec8f5100480c01a30d0d1d4, name: 'smith', age: 55, __v: 0 },
//     { _id: 5ec8f595e23c541edc2ab26b, name: 'sily', age: 18, __v: 0 }, 
//     { _id: 5ec8f595e23c541edc2ab26c, name: 'smith', age: 55, __v: 0 } 
// ]
  
// find携带参数查询:查找PersonInfo表中
PersonInfo.find({
    name:'sily'
},function(error,data){
    if(error){
        return console.log(error); 
    } else {
        return console.log(data);
        
    }
})
// [
//     { _id: 5ec8f5100480c01a30d0d1d3, name: 'sily', age: 18, __v: 0 }, 
//     { _id: 5ec8f5100480c01a30d0d1d4, name: 'smith', age: 55, __v: 0 },
//     { _id: 5ec8f595e23c541edc2ab26b, name: 'sily', age: 18, __v: 0 }, 
//     { _id: 5ec8f595e23c541edc2ab26c, name: 'smith', age: 55, __v: 0 },
//     { _id: 5ec8f5abb36b35053c5b7530, name: 'sily', age: 18, __v: 0 }, 
//     { _id: 5ec8f5abb36b35053c5b7531, name: 'smith', age: 55, __v: 0 } 
//   ]
//   [
//     { _id: 5ec8f5100480c01a30d0d1d3, name: 'sily', age: 18, __v: 0 },
//     { _id: 5ec8f595e23c541edc2ab26b, name: 'sily', age: 18, __v: 0 },
//     { _id: 5ec8f5abb36b35053c5b7530, name: 'sily', age: 18, __v: 0 } 
//   ]
// 按照条件查询单个，查到一个就自动退出，为一个对象

PersonInfo.findOne({
    // 查询条件
    name:'smith'
},function(error,data){
    if(error){
        console.log("查询出错:",error);
    } else {
        console.log('打印结果:',data);//{ _id: 5ec8f5100480c01a30d0d1d4, name: 'smith', age: 55, __v: 0 }
    }

})