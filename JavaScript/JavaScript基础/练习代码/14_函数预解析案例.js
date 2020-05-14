// console.log(a);//[Function: a]
// var a = 1;
// console.log(a);//1
// function a(){
//     console.log('hello world');
// }

/*
解析：可以知道 var a和function a都被提升到了当前作用域的最前面，也就是
var a;
function a(){...}
console.log(a)
a = 1;
console.log(a);
 */

// function test(){
//     console.log('test');  
// }
// console.log(test);//[Function: test]
// test = 1;
// console.log(test);//1 说明声明函数可以直接被替换掉，类似于重新赋值




// console.log(a);//[Function: a]
// var a = 1;
// console.log(a);//1
// function a(){
//     console.log(a);
// }
// /**
//  * function a(){...}
//  * var a;
//  * console.log(a);
//  * a = 1;
//  * console.log(a)
//  */

// var num = 100;
// function func(){
// console.log(num);//undefined
// var num = 10;
// console.log(num);//10
// }
// func();



// var a = 16;
// fn1();
// function fn1(){
//     var b = 9;
//     console.log(a);//undefined
//     console.log(b);//9
//     var a = '123'
// }

f1();
console.log(c);//9
console.log(b);//9
console.log(a);//9
function f1(){
    var a = b = c = 9;
    console.log(a);//9
    console.log(b);//9
    console.log(c);//9
}


