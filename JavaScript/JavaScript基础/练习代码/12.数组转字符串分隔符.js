
var arr = ['aaa','bbb','ccc','dddd'];
var str = '';
var separator = '|'
for(var i=0;i<arr.length;i++){
    str += arr[i] + separator;
}
console.log(str);//aaa|bbb|ccc|dddd|
