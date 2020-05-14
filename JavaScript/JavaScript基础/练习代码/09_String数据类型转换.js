var param1 = undefined;
var param2 = null;
param1 = new String(param1);
param2 = new String(param2);
console.log(typeof param1);//object
console.log(typeof param2);//object
// 结果对象是一个伪数组么？
console.log(Array.isArray(param1));//false
console.log(Array.isArray(param2));//false
// 很明显返回的是一个字符串形式的伪数组
console.log(Array.isArray([...param1]));//true
console.log(param1.length);//9
console.log(param2.toString());
for(var item in param1){
    console.log(item); // 0 1,2,3,4,5.6.7.8.9
}


console.log(undefined == undefined);//true
console.log(undefined === undefined);//true

console.log(null == null);//true
console.log(null === null);//true

console.log(12+'12');//1212

if(-1){
    console.log('这是-1');//这是-1
    
}
if(0){ // 默认为false
    console.log('这是0');
    
}
if(1){
    console.log('这是1');//这是1
    
}
// undefined
if(undefined){ // 默认为false
    console.log('这是undefined');
    
}
// 空指针对象
if(null){ // 默认为false
    console.log('这是null');
    
}
// 空串
if(''){ // 默认为false
    console.log('这是"-"');
    
}
// 空串有空格
if('  '){
    console.log('这是"---"');//这是"---"
    
}
if(NaN){ // 默认为false
    console.log('这是NaN');
}


console.log(1 + 'smith');//1smith
console.log(true + 'smith');//truesmith
console.log('smith' + 1);//smith1
console.log('smith' + true);//smithtrue

console.log(0 + 'smith');//0smith
console.log(false + 'smith');//falsesmith
console.log('smith' + 0);//smith0
console.log('smith' + false);//smithfalse