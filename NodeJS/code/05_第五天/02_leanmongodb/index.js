/**
 * 测试连接mongoDB以及基本操作
 */

//引包
var mongoose = require('mongoose');
//连接MongoDB数据库,test为我们要操作的数据库
// mongoose.connect('mongodb://localhost/test',{
// useMongoClient:true
// });
//WARNING: The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it.
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

var Cat = mongoose.model('Cat',{
    name: 'String'
});

// var kitty = new Cat({name:'KITTY'});
// 持久化保存kitty实例
// kitty.save(function(error){
//     if(error){
//         console.log(error);
//     } else {
//         console.log('meow');
//     }
// })
// 重复持久化多个文档对象（表记录）
for(var i = 0; i< 100;i++){
    var kitty = new Cat({name:'KITTY'});
    kitty.save(function(error){
        if(error){
            console.log(error);
        } else {
            console.log('meow');
        }
    })
}