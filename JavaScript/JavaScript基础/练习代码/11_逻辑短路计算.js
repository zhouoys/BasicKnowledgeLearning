// 逻辑与短路
console.log( 123 && 456 && 678);//678
console.log(0 && 1+2 && 100*678);//0
console.log(''&& 3+4 && 900);//''
console.log(null && 3+4 && 900);//null
console.log(NaN && 3+4 && 900);//NaN
console.log(undefined && 3+4 && 900);//undefined



