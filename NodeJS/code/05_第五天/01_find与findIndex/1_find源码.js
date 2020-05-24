/**
 * 测试find源码
 */
 Array.prototype.myFind = function(conditionFunc){
   for(var index  = 0; index < this.length ; index++){
       if(conditionFunc(this[index],index)){
           return this[index];
       }
   }
 }
 var arr = [4,5,6,1,8,9];
 var ret = arr.myFind(function(item,index){
     return item >= 6
 })
 console.log(ret);//6