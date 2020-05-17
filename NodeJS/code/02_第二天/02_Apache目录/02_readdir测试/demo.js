
var sum = null
function callback(num1,num2){
        sum = num1 +num2;
}
function hell(callback){
    console.log(callback);
    callback(1,2)
}
hell(callback);
console.log(sum);//3

var items = [1,2,3,4];
var sum = null;
items.forEach(function(item){
    sum += item
})
console.log(sum);
