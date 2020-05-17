/**
 * 测试无 ; 情况下三种出错的情况
 */

 // 第一种哦贵()
(function(){
    console.log('hello ( first)');//hello ( first)
    
})();
(function(){
    console.log('hello (second)');//hello (second)
})()
// 不加分割符号 ; 直接报错

// 第二种 []
var arr = ['1','2','3'];// 不加 ; 直接报错
['4','5','6'].forEach(function(item){
    console.log(item);
});
// 第三种 ``
var str = `hello world`;// 不加 ; 直接报错
`heheheh`.trim();