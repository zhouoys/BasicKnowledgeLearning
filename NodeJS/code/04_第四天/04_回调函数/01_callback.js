// 异步回调函数的作用
function fn(callback){
    setTimeout(function(){
        var data = 4000;
        callback(data);
    },3000)
}
function fn2(data){
    console.log(data);//4000
}
fn(fn2)