// var date = new Date();
// console.log(date);//2020-05-12T07:43:37.617Z

// var date1 = new Date('2015-8-23');
// console.log(date1);//2015-08-22T16:00:00.000Z

// var date2 = new Date('2015-08-23');
// console.log(date2);//2015-08-23T00:00:00.000Z


// var date3 = new Date(2015,10,06);
// console.log(date3);//2015-11-05T16:00:00.000Z


// var date4 = new Date('2016-10-06 08:08:08');
// console.log(date4);//2016-10-06T00:08:08.000Z

// //输出指定格式的当前日期
// var date5 = new Date();
// //获取年份
// var year =  date5.getFullYear();
// //获取月份(0-11)
// var month = date5.getMonth()+1;
// //获取日期
// var date = date5.getDate();
// //获取星期(0-6)
// var day = date5.getDay();
// //获取小时
// var hours = date5.getHours();
// //获取分钟
// var minutes = date5.getMinutes();
// //获取秒钟
// var seconds = date5.getSeconds();

// //设置星期数组
// var week = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六']
// console.log(year+'年'+month+'月'+date+'日'+ week[day]);//2020年5月12日星期二

// 获取当前时间
// function getTime(){
//     var date = new Date();
//     //获取小时
//     var hours = date.getHours();
//     hours = hours < 10 ?'0'+hours :hours;
//     //获取分钟
//     var minutes = date.getMinutes();
//     minutes = minutes < 10 ?'0'+minutes :minutes;
//     //获取秒钟
//     var seconds = date.getSeconds();
//     seconds = seconds < 10 ?'0'+seconds :seconds;
//     return hours + ":" + minutes + ":" + seconds
// }
// console.log(getTime());//16:26:05


// 获取日期总的毫秒数
// 方式一
// var millisecond1 = new Date().valueOf();
// console.log(millisecond1);//1589272254554
// // 方式二
// var millisecond2 = new Date().getTime();
// console.log(millisecond2);//1589272314409
// // 方式三
// var millisecond3 = + new Date();
// console.log(millisecond3);//1589272387909
// // 方式四
// var millisecond4 =Date.now();
// console.log(millisecond4);//1589272470060






