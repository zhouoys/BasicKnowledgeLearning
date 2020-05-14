// // 查早字符串中'o'出现的位置以及次数
// var str = 'rtyuhoouyioonmopojomotobforofoobaodofo';
// // 获取'o'第一次出现的索引
// var index = str.indexOf('o');
// // 计算'o'的次数
// var num = 0;
// // 进行循环遍历
// while(index !== -1){
//     console.log(index);
//     num++;
//     // 如果获取到'o'的位置，则在当前'o'的位置上继续下一位查找
//     index = str.indexOf('o',++index);
// }
// console.log(num);

// // 查找字符串中出现次数最多的字符，并统计其次数
// var str = 'abcefeaoeofogoabocooo'
// // 定义一个空对象
// var obj = {};
// // 遍历字符串
// for(var i = 0;i<str.length;i++){
//     var key = str[i];
//     if(obj[key]){ // 如果该对象已经具有该属性了,就自动添加1
//         obj[key] +=1;
//     } else { // 如果该对象不具有该属性，就添加该属性并设置其值为1；
//         obj[key] = 1;
//     }
// }
// console.dir(obj);//{ a: 3, b: 2, c: 2, e: 3, f: 2, o: 8, g: 1 }
// // 求取最多的字符，并且打印次数
// // 设最大次数为0
// var max = 0;
// // 对应字符为a;
// var maxChar = 'a'
// for(var k in obj){
//     if(obj[k] > max){
//         max = obj[k];
//         maxChar = k;
//     }
// }
// console.log('重复次数最多次数:'+ max);//重复次数最多次数:8
// console.log('对应字符为：'+ maxChar);//对应字符为：o


// 字符串拼接、截取
// var str1 = 'hello world'
// var str = '春风又绿江南岸，明月何时照我还';
// console.log(str1.concat(str));//hello world春风又绿江南岸，明月何时照我还
// console.log(str.substr(1,3));//风又绿
// console.log(str.slice(1,3));//风又
// console.log(str.substring(1,4));//风又绿

// var str = 'abcefeaoeofogoabocooo';
// console.log(str.replace('o','*')); // abcefea*eofogoabocooo
// while(str.indexOf('o') !== -1){
//     str = str.replace('o','*')
// }
// console.log(str);// abcefea*e*f*g*ab*c***
// 作业

var str = 'abaasdffggghhjjkkgfddsssss3444343';
// 字符串长度
console.log(str.length);//33
// 取出指定位置的字符，如0，3，5，9 等
console.log(str[0]);//a
console.log(str.charAt(3));//a
console.log(str.charAt(5));//d
console.log(str.charAt(9));//g
// 查找指定字符是否在以上的字符串中出现，如 i、c、b等
console.log(str.indexOf('i') === -1);//true
console.log(str.indexOf('c') === -1);//true
console.log(str.indexOf('b') === -1);//false
// 替换指定的字符，例如：g替换为22，ss替换为b等操作方法
var copyStr1 = str;
var copyStr2 = str;
function replaceStr(str,sourStr,targetStr){
    while(str.indexOf(sourStr) !== -1){
        str = str.replace(sourStr,targetStr);
    }
    return str;
}
console.log(replaceStr(copyStr1,'g','22'));//abaasdff222222hhjjkk22fddsssss3444343
console.log(replaceStr(copyStr2,'ss','b'));//abaasdffggghhjjkkgfddbbs3444343
// 截取指定开始位置到结束位置的字符串，如取得1-5的字符串
console.log(str.slice(1,5));//baas
console.log(str.substring(1,5));//baas
// 找到以上字符中出现频率最大的字符和出现的次数
var obj = {};
for(var i = 0;i < str.length; i++){
    var key = str.charAt(i);
    if(obj[key]){
        obj[key] +=1;
    } else {
        obj[key] = 1;
    }
}
console.log(obj);
/**
 * {
  '3': 3,
  '4': 4,
  a: 3,
  b: 1,
  s: 6,
  d: 3,
  f: 3,
  g: 4,
  h: 2,
  j: 2,
  k: 2
}
 */
var max = 0;
var maxChar = 'a';
for( var k in obj){
    if(obj[k] > max){
        max = obj[k];
        maxChar = k;
    }
}
console.log(max);//6
console.log(maxChar);//s

// 遍历字符串，并且将遍历的字符的两边天降'@'
var newStr = ''
for(var j = 0;j < str.length ;j++){
    newStr += "@" + str.charAt(j) + '@'
}
console.log(newStr);
//@a@@b@@a@@a@@s@@d@@f@@f@@g@@g@@g@@h@@h@@j@@j@@k@@k@@g@@f@@d@@d@@s@@s@@s@@s@@s@@3@@4@@4@@4@@3@@4@@3@
















