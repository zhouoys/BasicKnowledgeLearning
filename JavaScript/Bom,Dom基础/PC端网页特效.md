# PC端网页特效



![image-20200427173120970](PC端网页特效.assets/image-20200427173120970.png)



![image-20200427173143517](PC端网页特效.assets/image-20200427173143517.png)



## 1.元素偏移量offset系列

### 1.1 offset概述

![image-20200427173416564](PC端网页特效.assets/image-20200427173416564.png)



![image-20200427173717830](PC端网页特效.assets/image-20200427173717830.png)



![image-20200430164858872](PC端网页特效.assets/image-20200430164858872.png)



![image-20200430164957351](PC端网页特效.assets/image-20200430164957351.png)



![image-20200430164918225](PC端网页特效.assets/image-20200430164918225.png)





![image-20200430165131564](PC端网页特效.assets/image-20200430165131564.png)



![image-20200430165252599](PC端网页特效.assets/image-20200430165252599.png)





![image-20200430165312374](PC端网页特效.assets/image-20200430165312374.png)



![image-20200430165357979](PC端网页特效.assets/image-20200430165357979.png)



![image-20200430165449938](PC端网页特效.assets/image-20200430165449938.png)





![image-20200430165508682](PC端网页特效.assets/image-20200430165508682.png)





![image-20200430165623311](PC端网页特效.assets/image-20200430165623311.png)





![image-20200430170026369](PC端网页特效.assets/image-20200430170026369.png)





![image-20200430165754185](PC端网页特效.assets/image-20200430165754185.png)



![image-20200430165859129](PC端网页特效.assets/image-20200430165859129.png)





![image-20200430165933202](PC端网页特效.assets/image-20200430165933202.png)



![image-20200430170152799](PC端网页特效.assets/image-20200430170152799.png)



![image-20200430170231385](PC端网页特效.assets/image-20200430170231385.png)





![image-20200430170403598](PC端网页特效.assets/image-20200430170403598.png)



![image-20200430170510235](PC端网页特效.assets/image-20200430170510235.png)





### 1.2 offset与style区别

![image-20200427173554430](PC端网页特效.assets/image-20200427173554430.png)



### 案例：获取鼠标在盒子内的坐标

![image-20200427173911417](PC端网页特效.assets/image-20200427173911417.png)



![image-20200427174001049](PC端网页特效.assets/image-20200427174001049.png)



![image-20200427174102530](PC端网页特效.assets/image-20200427174102530.png)





![image-20200430174633829](PC端网页特效.assets/image-20200430174633829.png)



![image-20200430174714776](PC端网页特效.assets/image-20200430174714776.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            /* offSet要求父元素的定位元素不为static */
            position: relative;
            top:100px;
            left: 100px;
            width: 200px;
            height: 200px;
            background-color: purple;
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
<script>
    var box = document.querySelector('div');
    box.addEventListener('click',function(event){
        // 获取鼠标相对于整个文档的位置
        console.log("event.pageX",event.pageX)
        console.log("event.pageY",event.pageY)
        // 获取box相对于整个文档的位置
        console.log("box.offsetTop",box.offsetTop)
        console.log("box.offsetLeft",box.offsetLeft);
        // 计算鼠标在box中的坐标
        var X = event.pageX - box.offsetLeft + 'px';
        var Y = event.pageY - box.offsetTop + 'px';
        box.innerHTML = '鼠标的位置信息: x:'+ X + ',y:'+Y;
    })
</script>
</html>
~~~



![image-20200430220709294](PC端网页特效.assets/image-20200430220709294.png)







### 案例：模态框拖拽

![image-20200427174243294](PC端网页特效.assets/image-20200427174243294.png)



![image-20200427174357747](PC端网页特效.assets/image-20200427174357747.png)



![image-20200430174845168](PC端网页特效.assets/image-20200430174845168.png)





![image-20200430174916836](PC端网页特效.assets/image-20200430174916836.png)



![image-20200430175011481](PC端网页特效.assets/image-20200430175011481.png)





![image-20200430175055391](PC端网页特效.assets/image-20200430175055391.png)





![image-20200430175255276](PC端网页特效.assets/image-20200430175255276.png)



![image-20200430175402050](PC端网页特效.assets/image-20200430175402050.png)



![image-20200430175816457](PC端网页特效.assets/image-20200430175816457.png)





![image-20200430180036379](PC端网页特效.assets/image-20200430180036379.png)





![image-20200430180356678](PC端网页特效.assets/image-20200430180356678.png)





![image-20200430180641524](PC端网页特效.assets/image-20200430180641524.png)





### 案例：仿京东放大境

![image-20200427174507560](PC端网页特效.assets/image-20200427174507560.png)



![image-20200427174547686](PC端网页特效.assets/image-20200427174547686.png)

![image-20200427174629264](PC端网页特效.assets/image-20200427174629264.png)



![image-20200427174659383](PC端网页特效.assets/image-20200427174659383.png)



![image-20200427174739801](PC端网页特效.assets/image-20200427174739801.png)



![image-20200427174800038](PC端网页特效.assets/image-20200427174800038.png)





## 2. 元素可视区 client系列



![image-20200427174821935](PC端网页特效.assets/image-20200427174821935.png)



![image-20200427174900519](PC端网页特效.assets/image-20200427174900519.png)



![image-20200430222700696](PC端网页特效.assets/image-20200430222700696.png)



![image-20200430222744098](PC端网页特效.assets/image-20200430222744098.png)



![image-20200430223215348](PC端网页特效.assets/image-20200430223215348.png)



### 2.1立即执行函数



![image-20200430223437735](PC端网页特效.assets/image-20200430223437735.png)



![image-20200430223706456](PC端网页特效.assets/image-20200430223706456.png)



![image-20200430223812339](PC端网页特效.assets/image-20200430223812339.png)



![image-20200430223909264](PC端网页特效.assets/image-20200430223909264.png)







### 案例：淘宝flexible.js源码分析

![image-20200427174945019](PC端网页特效.assets/image-20200427174945019.png)



![image-20200427175044484](PC端网页特效.assets/image-20200427175044484.png)



![image-20200430225112671](PC端网页特效.assets/image-20200430225112671.png)



![image-20200430225327220](PC端网页特效.assets/image-20200430225327220.png)



![image-20200430225439695](PC端网页特效.assets/image-20200430225439695.png)













## 3.元素滚动scroll系列



### 3.1 元素scroll系列属性



![image-20200427175910403](PC端网页特效.assets/image-20200427175910403.png)



![image-20200427180117572](PC端网页特效.assets/image-20200427180117572.png)



![image-20200430230145300](PC端网页特效.assets/image-20200430230145300.png)





![image-20200430230230799](PC端网页特效.assets/image-20200430230230799.png)

可以说说scrollHeight是内容的大小，也就是实际的大小。





### 3.2 页面被卷去的头部

![image-20200427180324388](PC端网页特效.assets/image-20200427180324388.png)







![image-20200430230542820](PC端网页特效.assets/image-20200430230542820.png)







### 案例：仿淘宝固定右侧侧边栏

![image-20200427180429948](PC端网页特效.assets/image-20200427180429948.png)



### 元素scrollTop与页面pageYOffSet

![image-20200427180633468](PC端网页特效.assets/image-20200427180633468.png)





![image-20200501090936589](PC端网页特效.assets/image-20200501090936589.png)



![image-20200501091108693](PC端网页特效.assets/image-20200501091108693.png)



![image-20200501091911740](PC端网页特效.assets/image-20200501091911740.png)







~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .wrap{
            width: 1000px;
            margin:10px auto;
        }
        .nav{
            height: 200px;
            background-color: aqua;
        }
        .header{
            height: 400px;
            background-color:palegoldenrod;
        }
        .main{
            height: 600px;
            background-color:palegreen;
        }
        .slide-bar{
            position: absolute;
            top:320px;
            right:200px;
            width: 60px;
            height: 300px;
            background-color: palevioletred;
        }
        .go-back{
            position: absolute;
            bottom: 0px;
            font-size: 14px;
            width: 60px;
            height: 20px;
            line-height: 20px;
            background-color:green;
            text-align: center;
            display: none;
        }
    </style>
</head>
<body>
    <div class="nav wrap">这是nav</div>
    <div class="header wrap">这是header</div>
    <div class="main wrap">这是一个main</div>
    <div class="slide-bar">
        <span class="go-back">返回顶部</span>
    </div>
</body>
<script>
    var nav = document.querySelector('.nav');
    var header = document.querySelector('.header');
    var main = document.querySelector('.main');
    var slideBar = document.querySelector('.slide-bar');
    var goBack = document.querySelector('.go-back');
    // 获取main相对于浏览器顶部的高度
    var mainTop = main.offsetTop;
    // 获取nav相对于浏览器顶部的高度
    var headerTop = header.offsetTop;
    // 获取bar相对于浏览器顶部的高度
    var slideBarTop = slideBar.offsetTop;
    // 获取slideBar固定的时候相对于浏览器的高度
    var slideBarFixHeight = slideBarTop - headerTop;
    // 给document添加滚动事件
    document.addEventListener('scroll',function(){
        // 判断是否出现固定定位
        if(window.pageYOffset >= headerTop){            
            // 替换成固定定位
            slideBar.style.position = 'fixed'
            // 设置固定定位的位置
            slideBar.style.top = slideBarFixHeight + 'px'
        } else {
             // 还原绝对定位
             slideBar.style.position = 'absolute';
            //  还原绝对定位的位置
            slideBar.style.top = 320 + 'px';
        }
        // 判断是否出现返回顶部字样
        if(window.pageYOffset >= mainTop){
            console.log('测试');
            // 出现返回顶部提示
            goBack.style.display = 'block';
        } else {
            // 否侧隐藏返回顶部提示
            goBack.style.display = 'none';
        }
    })
</script>
</html>
~~~





![image-20200501110645996](PC端网页特效.assets/image-20200501110645996.png)







### 3.3 页面被卷去的头部兼容性解决方案

![image-20200427180952097](PC端网页特效.assets/image-20200427180952097.png)



## 三大系列比较

![image-20200427181407037](PC端网页特效.assets/image-20200427181407037.png)



## 三大系列总结

![image-20200427181627679](PC端网页特效.assets/image-20200427181627679.png)



## mouseenter 和mouseover的区别(面试题)

![image-20200428120407519](PC端网页特效.assets/image-20200428120407519.png)









## 4.动画函数封装

### 4.1 动画实现原理

![image-20200428120538426](PC端网页特效.assets/image-20200428120538426.png)



![image-20200501111401958](PC端网页特效.assets/image-20200501111401958.png)







### 4.2 动画函数简单封装

![image-20200428120624187](PC端网页特效.assets/image-20200428120624187.png)



![image-20200501111652786](PC端网页特效.assets/image-20200501111652786.png)



封装animate.js

~~~java
function animate(obj, target, callback) {
    // console.log(callback);  callback = function() {}  调用的时候 callback()

    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {
            //     // 调用函数
            //     callback();
            // }
            callback && callback();
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 15);
}
~~~



引入：animate.js

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .sliderbar {
            position: fixed;
            right: 0;
            bottom: 100px;
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            cursor: pointer;
            color: #fff;
        }
        
        .con {
            position: absolute;
            left: 0;
            top: 0;
            width: 200px;
            height: 40px;
            background-color: purple;
            z-index: -1;
        }
    </style>
    <script src="animate.js"></script>
</head>

<body>
    <div class="sliderbar">
        <span>←</span>
        <div class="con">问题反馈</div>
    </div>

    <script>
        // 1. 获取元素
        var sliderbar = document.querySelector('.sliderbar');
        var con = document.querySelector('.con');
        // 当我们鼠标经过 sliderbar 就会让 con这个盒子滑动到左侧
        // 当我们鼠标离开 sliderbar 就会让 con这个盒子滑动到右侧
        sliderbar.addEventListener('mouseenter', function() {
            // animate(obj, target, callback);
            animate(con, -160, function() {
                // 当我们动画执行完毕，就把 ← 改为 →
                sliderbar.children[0].innerHTML = '→';
            });

        })
        sliderbar.addEventListener('mouseleave', function() {
            // animate(obj, target, callback);
            animate(con, 0, function() {
                sliderbar.children[0].innerHTML = '←';
            });

        })
    </script>
</body>

</html>
~~~



![image-20200501155529859](PC端网页特效.assets/image-20200501155529859.png)





### 4.3 动画函数给不同元素记录不同定时器

![image-20200428120637715](PC端网页特效.assets/image-20200428120637715.png)



![image-20200501111919148](PC端网页特效.assets/image-20200501111919148.png)





![image-20200501112119232](PC端网页特效.assets/image-20200501112119232.png)



![image-20200501112141500](PC端网页特效.assets/image-20200501112141500.png)





![image-20200501112222007](PC端网页特效.assets/image-20200501112222007.png)





### 4.4 缓动效果原理

![image-20200428120825260](PC端网页特效.assets/image-20200428120825260.png)





![image-20200501112551333](PC端网页特效.assets/image-20200501112551333.png)





![image-20200501112810234](PC端网页特效.assets/image-20200501112810234.png)



![image-20200501113113035](PC端网页特效.assets/image-20200501113113035.png)









### 4.5 动画函数多个目标之间移动

![image-20200428120909316](PC端网页特效.assets/image-20200428120909316.png)



![image-20200501113343328](PC端网页特效.assets/image-20200501113343328.png)







### 4.6 动画函数添加回调函数

![image-20200428120949673](PC端网页特效.assets/image-20200428120949673.png)



我们先来看看回调的英文定义：A callback is a function that is passed as an argument to another function and is executed after its parent function has completed。

　　字面上的理解，回调函数就是传递一个参数化的函数，就是将这个函数作为一个参数传到另一个主函数里面，当那一个主函数执行完之后，再执行传进去的作为参数的函数。走这个过程的参数化的函数 就叫做回调函数。换个说法也就是被作为参数传递到另一个函数（主函数）的那个函数就叫做 回调函数。

    　举一个别人举过的例子：约会结束后你送你女朋友回家，离别时，你肯定会说：“到家了给我发条信息，我很担心你。” 对不，然后你女朋友回家以后还真给你发了条信息。小伙子，你有戏了。其实这就是一个回调的过程。你留了个参数函数（要求女朋友给你发条信息）给你女朋友，然后你女朋友回家，回家的动作是主函数。她必须先回到家以后，主函数执行完了，再执行传进去的函数，然后你就收到一条信息了。
    
     回调函数应用场景多用在使用 js 写组件时和耗时操作上面，尤其是组件的事件很多都需要回调函数的支持。
————————————————
版权声明：本文为CSDN博主「huwao」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/hu_belif/java/article/details/80284140









![image-20200501113532466](PC端网页特效.assets/image-20200501113532466.png)





![image-20200501113706411](PC端网页特效.assets/image-20200501113706411.png)





![image-20200501113838519](PC端网页特效.assets/image-20200501113838519.png)





### 4.7 动画函数封装到单独JS文件里面

![image-20200428121145551](PC端网页特效.assets/image-20200428121145551.png)







![image-20200501114142236](PC端网页特效.assets/image-20200501114142236.png)



![image-20200501114337876](PC端网页特效.assets/image-20200501114337876.png)



![image-20200501114418632](PC端网页特效.assets/image-20200501114418632.png)





![image-20200501114438414](PC端网页特效.assets/image-20200501114438414.png)





## 5.常见网页特效案例



### 案例：网页轮播图

![image-20200428121303014](PC端网页特效.assets/image-20200428121303014.png)



![image-20200428121328596](PC端网页特效.assets/image-20200428121328596.png)



![image-20200428121346563](PC端网页特效.assets/image-20200428121346563.png)



![image-20200428121433715](PC端网页特效.assets/image-20200428121433715.png)



![image-20200428121454324](PC端网页特效.assets/image-20200428121454324.png)



![image-20200428121526747](PC端网页特效.assets/image-20200428121526747.png)



![image-20200428121540175](PC端网页特效.assets/image-20200428121540175.png)



![image-20200428121558934](PC端网页特效.assets/image-20200428121558934.png)





![image-20200428121625007](PC端网页特效.assets/image-20200428121625007.png)



### 5.1 节流阀

![image-20200428121655651](PC端网页特效.assets/image-20200428121655651.png)



![image-20200501155954184](PC端网页特效.assets/image-20200501155954184.png)



![image-20200501160054026](PC端网页特效.assets/image-20200501160054026.png)





### 案例：返回顶部

![image-20200428121753597](PC端网页特效.assets/image-20200428121753597.png)



![image-20200428122006482](PC端网页特效.assets/image-20200428122006482.png)



![image-20200501144942403](PC端网页特效.assets/image-20200501144942403.png)



![image-20200501145054930](PC端网页特效.assets/image-20200501145054930.png)



![image-20200501145118637](PC端网页特效.assets/image-20200501145118637.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .wrap{
            width: 1000px;
            margin:10px auto;
        }
        .nav{
            height: 200px;
            background-color: aqua;
        }
        .header{
            height: 100px;
            background-color:palegoldenrod;
        }
        .main{
            height: 800px;
            background-color:palegreen;
        }
        .slide-bar{
            position: absolute;
            top:320px;
            right:200px;
            width: 60px;
            height: 300px;
            background-color: palevioletred;
        }
        .go-back{
            position: absolute;
            bottom: 0px;
            font-size: 14px;
            width: 60px;
            height: 20px;
            line-height: 20px;
            background-color:green;
            text-align: center;
            display: none;
        }
    </style>
</head>
<body>
    <div class="nav wrap">这是nav</div>
    <div class="header wrap">这是header</div>
    <div class="main wrap">这是一个main</div>
    <div class="slide-bar">
        <span class="go-back">返回顶部</span>
    </div>
</body>
<script>
    var nav = document.querySelector('.nav');
    var header = document.querySelector('.header');
    var main = document.querySelector('.main');
    var slideBar = document.querySelector('.slide-bar');
    var goBack = document.querySelector('.go-back');
    // 获取main相对于浏览器顶部的高度
    var mainTop = main.offsetTop;
    // 获取nav相对于浏览器顶部的高度
    var headerTop = header.offsetTop;
    // 获取bar相对于浏览器顶部的高度
    var slideBarTop = slideBar.offsetTop;
    // 获取slideBar固定的时候相对于浏览器的高度
    var slideBarFixHeight = slideBarTop - headerTop;
    // 给document添加滚动事件
    document.addEventListener('scroll',function(){
        // 判断是否出现固定定位
        if(window.pageYOffset >= headerTop){            
            // 替换成固定定位
            slideBar.style.position = 'fixed'
            // 设置固定定位的位置
            slideBar.style.top = slideBarFixHeight + 'px'
        } else {
             // 还原绝对定位
             slideBar.style.position = 'absolute';
            //  还原绝对定位的位置
            slideBar.style.top = 320 + 'px';
        }
        // 判断是否出现返回顶部字样
        if(window.pageYOffset >= mainTop){
            // 出现返回顶部提示
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    })
    // 给document的滚动事件添加动画效果
    goBack.addEventListener('click',function(){
        // 无动画效果
        //  window.scroll(0,0)
        // 具有动画效果
        animate(window,0)
    })
    // 添加动画函数(返回顶部，其他类似)
    function animate(obj,target,callback){
        // 为了方式对此点击造成动画越来越块的bug,此处需要先清除定时器
        // 也就是每点击一次，就会重新生成新的定时器，所以需要清除以前
        // 的定时器，只保留当前的一个定时器执行
         clearInterval(obj.timer);
         // 创建定时器
         obj.timer = window.setInterval(function(){            
            // 每一次执行都计算步长
            var step = (target - window.pageYOffset) / 10;//也就是时刻计算当前的距离与目标距离的大小，作动态计算
            /*
             因为步长可能会有小数，分正小数和负小数，所以这里需要做以下格式化
             对于正数，应该向上取整
             对于负数，应该向下取整
            */
           step = step < 0 ? Math.floor(step) : Math.ceil(step);
            // 到达指定位置后去除setInterval定时器,此处的指定位置，因该为target的位置用作判断。
            if(window.pageYOffset == target){
                // 停止动画，本质是停止计时器
                clearInterval(obj.timer);
                // 清楚定时器之后，此时可以执行callback函数了
                callback && callback();
            }
            //  定时器每一次平移指定的位置
            /*
              因为为doucment的移动，此时不适合用position:absolute中的left，以及top来进行了;
                 如: obj.style.left = obj.offsetLeft + step + 'px';
              可以采用window.scroll(x,y)来进行移动。注意不需要加px;
              还需要注意累加操作，此处的x,y均指的是坐标;
            */
           window.scroll(0,window.pageYOffset + step);           
        },30)
    }
</script>
</html>
~~~











### 案例：筋斗云案例

![image-20200428122101136](PC端网页特效.assets/image-20200428122101136.png)



![image-20200428122149394](PC端网页特效.assets/image-20200428122149394.png)



![image-20200428122204685](PC端网页特效.assets/image-20200428122204685.png)



![image-20200501160342279](PC端网页特效.assets/image-20200501160342279.png)





![image-20200501160607009](PC端网页特效.assets/image-20200501160607009.png)





![image-20200501161004598](PC端网页特效.assets/image-20200501161004598.png)





![image-20200501161054231](PC端网页特效.assets/image-20200501161054231.png)







~~~ html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 重置样式 */
        body{
            margin: 0;
            padding: 0;
        }
         ul,li{
             list-style: none;
             margin: 0px;
             padding: 0;
         }
         a{
             text-decoration:none;
             /* 强制继承 */
            color:inherit;
         }
         /* 自定义样式 */
         .box{
             position: relative;
             height: 42px;
             width: 900px;
             margin:100px auto;
             border-radius: 5px;
             background-image: url("../image/rss.png");
             background-position: right center;
             background-repeat: no-repeat;
         }
         .cloud{
             position: absolute;
             left:0;
             top:0;
             height: 42px;
             width: 83px;
             background-image: url("../image/cloud.gif");
             background-repeat: no-repeat;
         }
         ul{
             position: absolute;
             left: 0px;
             top:0px;
             height: 42px;
             z-index: 999;
         }
         ul li{
             float: left;
             width: 83px;
             line-height: 42px;
             text-align: center;
         }
         ul li a{
             display: block;
             height: 42px;
         }
         ul li a:hover{
            color:green;
         }
    </style>
</head>
<body>
    <div class="box">
        <span class="cloud"></span>
        <ul class="nav-list">
            <li style="color:green;font-weight: 700;"><a href="#">首页新闻</a></li>
            <li><a href="#">师资力量</a></li>
            <li><a href="#">活动策划</a></li>
            <li><a href="#">企业文化</a></li>
            <li><a href="#">招聘信息</a></li>
            <li><a href="#">公司简介</a></li>
            <li><a href="#">我是佩奇</a></li>
            <li><a href="#">啥是佩奇</a></li>
        </ul>
    </div>
</body>
<script>
    window.addEventListener("load",function(){
        // 获取图片的dom
        var imgCloud = document.querySelector(".cloud");
        // 获取所有的li
        var lis = document.querySelector(".nav-list").querySelectorAll("li");
        var currentPosition = 0;
        // 给所有的li添加鼠标进入事件        
        for(var i = 0;i<lis.length;i++){


            // 1.为每一个li添加鼠标进入事件
            lis[i].addEventListener('mouseenter',function(){
                // 调用动画函数移动位置
                // imgCloud.style.left = this.offsetLeft + 'px';
                animate(imgCloud,this.offsetLeft);
            })


            // 2.为每一个li添加一个鼠标离开事件
            lis[i].addEventListener('mouseleave',function(){
                console.log('鼠标离开');
                // imgCloud.style.left = currentPosition + 'px';
                animate(imgCloud,currentPosition);

            })


            // 3.为每一个li添加一个鼠标点击事件
            lis[i].addEventListener('click',function(){
            // 将当前鼠标的位置赋值给当前li的位置,用于更新位置的描点
            currentPosition = this.offsetLeft; 
            // 移动图片的位置(此处应该不需要移动),因为悬浮效果已经移动图片到此位置了
            // imgCloud.style.left = currentPosition + 'px';
            // 用排除法替换点击之后字体变色j++
              for(var j = 0;j<lis.length;j++){
                  lis[j].style.color = '#000';
                  lis[j].style.fontWeight = 'normal';
              }
            // 点击的tab添加字体颜色
            this.style.color = 'green'
            this.style.fontWeight = '700';

            })
        }
      
        // 动画函数
        function animate(obj,target,callback){
        // 清除之前的计时器，为了方式多次快速点击的bug
         window.clearInterval(obj.timer);
         // 设置计时器
         obj.timer = window.setInterval(function(){
             // 计算步长
             var step = (target - obj.offsetLeft) / 10;
             // 格式化步长(分正负小数)
             step = step >0 ? Math.ceil(step) : Math.floor(step);
             // 到达位置，清除计时器
             if(obj.offsetLeft == target){
                 window.clearInterval(obj.timer);
                 // 判断是否执行回调函数
                 callback && callback();
             }
            // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
             obj.style.left = obj.offsetLeft + step + 'px';
         },15)

        }
    })
</script>
</html>
~~~





![image-20200501212628656](PC端网页特效.assets/image-20200501212628656.png)





