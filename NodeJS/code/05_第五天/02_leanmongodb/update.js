// 测试更新接口

// 导包
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/foodInfo');
mongoose.Promise = global.Promise;

// 配置集合结构（表结构）
var FoodScheme = mongoose.Schema;
var foodScheme = new FoodScheme({
    foodName:String,
    price:Number
})

// 获取model
var Food = mongoose.model('FoodInfo',foodScheme);

// 实例化并且保存到mongodb中

var food = new Food({
    foodName:'臭豆腐',
    price:9.99
})

var alterfood = new Food({
    foodName:'臭豆腐--修改',
    price:9.99999999
})
// food.save(function(error,data){
//     if(error){
//         console.log('保存失败:',error);
//     } else {
//         console.log('保存成功:',data);
//     }
// });
// Food.remove(function(error,data){
//     if(error){
//         console.log("删除失败:",error);
//     } else {
//         console.log('删除成功:'.data);
//     }
// });
// 根据条件更新所有
Food.findByIdAndUpdate('5ec9dee170ad863bb8c94290',{foodName:'臭豆腐---修改了'},function(error,data){
    if(error){
        console.log('修改失败:',error);
    } else {
        console.log("修改成功",data);
    }
})
Food.find(function(error,data){
    if(error){
        console.log("查找失败:",error);
    } else {
        console.log('查找成功:',data);
    }
})

