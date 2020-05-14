// 随机生成一个数组
var arr = [];
[1,2,3,4]
for(let i = 0;i<20;i++){
    arr[i] = parseInt(Math.random()*100 )
}
console.log("打印随机生成的数组："+arr);

// 对随机生成的数组进行排序操作(主要采用冒泡排序)
for(var k =0;k<arr.length-1;k++){// 第一个循环用来控制循环的次数
    for(var n = 0; n<arr.length-k-1;n++){// 第二个循环用来控制比较的次数
        if(arr[n]>arr[n+1]){
            var temp = arr[n];
            arr[n] = arr[n+1];
            arr[n+1] = temp;
        }
    }
}
console.log("打印排序之后的arr:"+arr);


var num = 89;
function test(){
    console.log(num);//undefined
    var num = 77; 
}
test();