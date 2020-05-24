// 测试删除数据
// 配置连接
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carInfo');
mongoose.Promise = global.Promise;
//获取schema构造函数
var CarSchema = mongoose.Schema;
//实例化schema
var carSchema = new CarSchema({
    carName:{
        type:String,
        require:true
    },
    brand:{
        type:String,
        require:true
    },
    weight:{
        type:Number,
        default:0.0
    },
    height:{
        type:Number,
        default:0.0
    }
});
// 创建model
var Car = mongoose.model('CarInfo',carSchema);

// 创建实例保存数据
var car1 = new Car({
    carName:'奔驰-1',
    brand:'大众-1',
    weight:19.1,
    height:22.1
})
// car1.save(function(error,data){
//     if(error){
//         console.log('保存失败:',+error);
//     } else {
//         console.log('保存成功',data);
//     }
// })

// Car.find(function(error,data){
//     if(error){
//         console.log("查找失败:",error);
//     } else {
//         console.log('查找成功:',data);
//     }
// })

// 无条件删除，删除所有
// Car.remove(function(error,data){
//     if(error){
//         console.log('删除失败:',error);
//     } else {
//         console.log('删除成功:',data); //删除成功: { n: 6, ok: 1, deletedCount: 6 }
//     }
// })

// 删除所有符合条件的文档对象
// Car.remove({
//     carName:'奔驰-1'
// },function(error,data){
//     if(error){
//         console.log('删除失败:',error);
//     } else {
//         console.log('删除成功:',data);//删除成功: { n: 2, ok: 1, deletedCount: 2 }
//     }
// })
// 根据条件删除符合条件中的一个文档对象
// Car.findOneAndRemove({
//     carName:'奔驰-2'
// },function(error,data){
//     if(error){
//         console.log("删除失败:",error);
//     } else {
//         console.log('删除成功:',data);
//         // 删除成功: {
//         //     weight: 19.2,
//         //     height: 22.2,
//         //     _id: 5ec9d2a6584d16209ca57e45,
//         //     carName: '奔驰-2',
//         //     brand: '大众-2',
//         //     __v: 0
//         //   }
//     }
// })
// 根据id删除删除文档对象
Car.findByIdAndRemove({
    _id:"5ec9d2ae0048d6205016afaa"
},function(error,data){
    if(error){
        console.log("根据ID删除失败",error);
    } else {
        console.log("根据ID删除成功",data);
        // 根据ID删除成功 {
        //     weight: 19.2,
        //     height: 22.2,
        //     _id: 5ec9d2ae0048d6205016afaa,
        //     carName: '奔驰-2',
        //     brand: '大众-2',
        //     __v: 0
        //   }
    }
})
Car.find(function(error,data){
    if(error){
        console.log("查找失败:",error);
    } else {
        console.log('查找成功:',data);
    }
})