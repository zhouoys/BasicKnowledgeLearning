# Less学习笔记

## Less_初见Less

### Less简介

less是一种动态样式语言，属于css预处理器的范畴，它扩展了 CSS 语言，
增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展
**LESS 既可以在 客户端 上运行 ，也可以借助Node.js在服务端运行**。**Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。**

**Less 可以运行在 Node 或浏览器端。**



less的中文官网：http://lesscss.cn/
bootstrap中less教程：http://www.bootcss.com/p/lesscss/

![image-20200419232058301](Less学习笔记.assets/image-20200419232058301.png)

### 浏览器端使用Less

![image-20200419232549520](Less学习笔记.assets/image-20200419232549520.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/less">
        .container{
            width: 100px;
            height: 100px;
            background-color: red;
            padding:100px 100px;
            margin:100px auto;
            /* 此处的less语法在html页面中直接报错，浏览器也执行不了，但是添加了less.min.js之后就可以执行了，但页面仍然提示报错 */
            .box{
            height: 100px;
            width: 100px;
            background-color: purple;
            margin:0 auto;
            }
        }
       

    </style>
</head>
<body>
    <div class="container">
        <div class="box"></div>
    </div>
    
</body>
<script src="../js/less.min.js"></script>
</html>
~~~



![image-20200420090907502](Less学习笔记.assets/image-20200420090907502.png)





利用这种方式，浏览器可以执行style元素里面的Less语法的css代码，但是可以知道Less为预编译，也就是在浏览器执行时，执行的是正常的css语法。意味着Less是在运行之前已经被解析成正常的css文件了。将Less语法的css转成正常的css文件，然后交给浏览器执行。

说人话就是开发人员在写代码的时候采用Less语法写css文件，然后在将Less文件编译成浏览器可以识别并且执行的css文件，最后开发人员将编译后的css文件连同其他资源提供给服务器。

呃呃呃，类似于ts转js这种过程。

## Less_Less基础

### Less的编译工具

koala 官网:www.koala-app.com 

vscode预编译插件:Easy Less

![image-20200420091617757](Less学习笔记.assets/image-20200420091617757.png)



预编译的Less文件

~~~less
.container{
    width: 100px;
    height: 100px;
    background-color: red;
    padding:100px 100px;
    margin:100px auto;
    .box{
    height: 100px;
    width: 100px;
    background-color: purple;
    margin:0 auto;
    }
}
~~~

vscode保存之后自动编译成的css文件

~~~css
.container {
  width: 100px;
  height: 100px;
  background-color: red;
  padding: 100px 100px;
  margin: 100px auto;
}
.container .box {
  height: 100px;
  width: 100px;
  background-color: purple;
  margin: 0 auto;
}

~~~

预编译的html文件

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./less/02_01预编译.css">
</head>
<body>
    <div class="container">
        <div class="box"></div>
    </div>
</body>
</html>
~~~

结果：
![image-20200420091911890](Less学习笔记.assets/image-20200420091911890.png)



### Less的注释

 以//开头的注释，不会被编译到css文件中  	

以/**/包裹的注释会被编译到css文件中  

![image-20200419233843903](Less学习笔记.assets/image-20200419233843903.png)



~~~less
// 这个是Less开发时的注释，将不会保存到编译之后的文件中
/* 这个是专门用于保存到编译之后的css的文件中的注释*/
.container{
    width: 100px;
    height: 100px;
    background-color: red;
    padding:100px 100px;
    margin:100px auto;
    .box{
    height: 100px;
    width: 100px;
    background-color: purple;
    margin:0 auto;
    }
}
~~~



~~~ css
/* 这个是专门用于保存到编译之后的css的文件中的注释*/
.container {
  width: 100px;
  height: 100px;
  background-color: red;
  padding: 100px 100px;
  margin: 100px auto;
}
.container .box {
  height: 100px;
  width: 100px;
  background-color: purple;
  margin: 0 auto;
}
~~~





![image-20200419234312101](Less学习笔记.assets/image-20200419234312101.png)





### Less中的变量

	使用@来申明一个变量：@pink：pink;
	1.作为普通属性值只来使用：直接使用@pink
	2.作为选择器和属性名：#@{selector的值}的形式
	3.作为URL：@{url}
	4.变量的延迟加载




#### 1.作为普通属性的属性值来使用

![image-20200419234549442](Less学习笔记.assets/image-20200419234549442.png)



![image-20200419234646851](Less学习笔记.assets/image-20200419234646851.png)



~~~less
// 这个是Less开发时的注释，将不会保存到编译之后的文件中
/* 这个是专门用于保存到编译之后的css的文件中的注释*/
@outbgc:purple;
@inbgc:#f00;
.container{
    width: 100px;
    height: 100px;
    background-color:@outbgc;
    padding:100px 100px;
    margin:100px auto;
    .box{
    height: 100px;
    width: 100px;
    background-color: @inbgc;
    margin:0 auto;
    }
}
~~~



~~~css
/* 这个是专门用于保存到编译之后的css的文件中的注释*/
.container {
  width: 100px;
  height: 100px;
  background-color: purple;
  padding: 100px 100px;
  margin: 100px auto;
}
.container .box {
  height: 100px;
  width: 100px;
  background-color: #f00;
  margin: 0 auto;
}

~~~





#### 2.作为选择器和属性名

![image-20200419234945766](Less学习笔记.assets/image-20200419234945766.png)



![image-20200419235013468](Less学习笔记.assets/image-20200419235013468.png)

一般在实际的开发过程中，属性名和选择器都是常量，被当成变量的情况非常少。

#### 3.作为URL：@{url}

使用时用""将变量的值括起来，同样将变量以@{变量名}的方式使用

~~~less文件
// 这个是Less开发时的注释，将不会保存到编译之后的文件中
/* 这个是专门用于保存到编译之后的css的文件中的注释*/
@outbgc:purple;
@inbgc:#f00;
@imgUrl:"../../image";
.container{
    width: 100px;
    height: 100px;
    background-color:@outbgc;
    padding:100px 100px;
    margin:100px auto;
    .box{
    height: 100px;
    width: 100px;
    background-color: @inbgc;
    margin:0 auto;
    }
}
.imgUrl{
    background: url("@{imgUrl}/01.png") no-repeat;
    width: 200px;
    height: 200px;
}
// <img src="../image/01.png">
~~~

预编译之后的css文件

~~~css
/* 这个是专门用于保存到编译之后的css的文件中的注释*/
.container {
  width: 100px;
  height: 100px;
  background-color: purple;
  padding: 100px 100px;
  margin: 100px auto;
}
.container .box {
  height: 100px;
  width: 100px;
  background-color: #f00;
  margin: 0 auto;
}
.imgUrl {
  background: url("../../image/01.png") no-repeat;
  width: 200px;
  height: 200px;
}

~~~

html文件

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./less/02_01预编译.css">
</head>
<body>
    <div class="container">
        <div class="box"></div>
    </div>
    <div class="imgUrl">
    </div>
</body>
</html>
~~~

结果

![image-20200420100523877](Less学习笔记.assets/image-20200420100523877.png)



![image-20200420100719740](Less学习笔记.assets/image-20200420100719740.png)





#### 4.变量的延迟加载

![image-20200419235726642](Less学习笔记.assets/image-20200419235726642.png)

![image-20200419235826305](Less学习笔记.assets/image-20200419235826305.png)

变量的延迟加载，顾名思义，就是在一个{}里面，只有等{}里面的东西都解析完了之后，再去编译，所以可以知道"2"被"3"给覆盖掉了。

### Less的嵌套规则

![image-20200420000404360](Less学习笔记.assets/image-20200420000404360.png)



![image-20200420000440225](Less学习笔记.assets/image-20200420000440225.png)



![image-20200420000601471](Less学习笔记.assets/image-20200420000601471.png)





![image-20200420000702267](Less学习笔记.assets/image-20200420000702267.png)





![image-20200420000729138](Less学习笔记.assets/image-20200420000729138.png)

嵌套规则：1.就是如果两个{}为嵌套关系,则两个{}对应的选择器为父子关系

​				   2.就是如果两个{}为嵌套关系,且里面的选择器添加了"&"符号，则两个{}为父子关系

Less文件

~~~less
// 这个是Less开发时的注释，将不会保存到编译之后的文件中
/* 这个是专门用于保存到编译之后的css的文件中的注释*/
@outbgc:purple;
@inbgc:#f00;
@imgUrl:"../../image";
.container{
    width: 100px;
    height: 100px;
    background-color:@outbgc;
    padding:100px 100px;
    margin:100px auto;
    &.box{
    height: 100px;
    width: 100px;
    background-color: @inbgc;
    margin:0 auto;
    }
}
.imgUrl{
    background: url("@{imgUrl}/01.png") no-repeat;
    width: 200px;
    height: 200px;
}
~~~



css文件

~~~css
/* 这个是专门用于保存到编译之后的css的文件中的注释*/
.container {
  width: 100px;
  height: 100px;
  background-color: purple;
  padding: 100px 100px;
  margin: 100px auto;
}
/* 可以看到.container与.box成了兄弟关系 */
.container.box {
  height: 100px;
  width: 100px;
  background-color: #f00;
  margin: 0 auto;
}
.imgUrl {
  background: url("../../image/01.png") no-repeat;
  width: 200px;
  height: 200px;
}
~~~







![image-20200420101752141](Less学习笔记.assets/image-20200420101752141.png)









## Less_Less的混合(一)

混合就是将一系列属性从一个规则集引入到另一个规则集的方式
	1.普通混合
	2.不带输出的混合
	3.带参数的混合
	4.带参数并且有默认值的混合
	5.带多个参数的混合
	6.命名参数
	7.匹配模式
	8.arguments变量



### 1.普通混合



![image-20200420001242255](Less学习笔记.assets/image-20200420001242255.png)





![image-20200420001353702](Less学习笔记.assets/image-20200420001353702.png)





![image-20200420001751355](Less学习笔记.assets/image-20200420001751355.png)





![image-20200420001828480](Less学习笔记.assets/image-20200420001828480.png)





![image-20200420002009472](Less学习笔记.assets/image-20200420002009472.png)



html文件

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    </style>
</head>
<body>
    <div class="container">
        <div class="outer">
            <div class="inner"></div>
        </div>
    </div>
    
</body>
</html>
~~~



less文件

~~~less
.container{
    width: 400px;
    height: 400px;
    position: relative;
    margin:200px auto;
    background-color: seagreen;
    // 重复了居中代码
    .outer{
        position: absolute;
        left:0;
        right: 0;
        top:0;
        bottom:0;
        margin:auto;
        width: 250px;
        height: 250px;
        background-color: sienna;
    }
    // 重复了居中代码
    .inner{
        position: absolute;
        left:0;
        right: 0;
        top:0;
        bottom:0;
        margin:auto;
        width: 100px;
        height: 100px;
        background-color:purple; 
    }
  
}
~~~



编译之后的css文件

~~~css
.container {
  width: 400px;
  height: 400px;
  position: relative;
  margin: 200px auto;
  background-color: seagreen;
}
.container .outer {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 250px;
  height: 250px;
  background-color: sienna;
}
.container .inner {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  background-color: purple;
}
~~~



使用混入模式

~~~less文件
// 使用混入
.center{
    position: absolute;
    left:0;
    right: 0;
    top:0;
    bottom:0;
    margin:auto;

}
.container{
    width: 400px;
    height: 400px;
    position: relative;
    margin:200px auto;
    background-color: seagreen;
    .outer{
        width: 250px;
        height: 250px;
        background-color: sienna;
        .center;
    }
    .inner{
        width: 100px;
        height: 100px;
        background-color:purple; 
        .center;
    }
  
}
~~~



编译之后的css文件

~~~css文件
// 这一块代码也被编译进来了，显得有些重复，有没有方法可以控制是否去掉
.center {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.container {
  width: 400px;
  height: 400px;
  position: relative;
  margin: 200px auto;
  background-color: seagreen;
}
.container .outer {
  width: 250px;
  height: 250px;
  background-color: sienna;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.container .inner {
  width: 100px;
  height: 100px;
  background-color: purple;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
~~~



### 	2.不带输出的混合

![image-20200420111105082](Less学习笔记.assets/image-20200420111105082.png)

![image-20200420111430993](Less学习笔记.assets/image-20200420111430993.png)

Less文件

~~~html
// 使用混入 同时给混入的类选择器添加一个()用于在编译时候，去掉这个混入的类
.center(){
    position: absolute;
    left:0;
    right: 0;
    top:0;
    bottom:0;
    margin:auto;

}
.container{
    width: 400px;
    height: 400px;
    position: relative;
    margin:200px auto;
    background-color: seagreen;
    .outer{
        width: 250px;
        height: 250px;
        background-color: sienna;
        .center;
    }
    .inner{
        width: 100px;
        height: 100px;
        background-color:purple; 
        .center;
    }
  
}
~~~

编译之后的css文件

~~~css
.container {
  width: 400px;
  height: 400px;
  position: relative;
  margin: 200px auto;
  background-color: seagreen;
}
.container .outer {
  width: 250px;
  height: 250px;
  background-color: sienna;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.container .inner {
  width: 100px;
  height: 100px;
  background-color: purple;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

~~~





### 3.带参数的混合

min in

![image-20200420111601654](Less学习笔记.assets/image-20200420111601654.png)

![image-20200420111656730](Less学习笔记.assets/image-20200420111656730.png)



![image-20200420111758257](Less学习笔记.assets/image-20200420111758257.png)

html代码

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./less/01_普通混入.css">
    <title>Document</title>
    <style>
    </style>
</head>
<body>
    <div class="container">
        <div class="outer">
            <div class="inner"></div>
        </div>
    </div>
    
</body>
</html>
~~~

less文件

~~~less
// 使用混合，同时混合携带参数
.center(@w,@h,@c){
    position: absolute;
    left:0;
    right: 0;
    top:0;
    bottom:0;
    margin:auto;
    // 携带参数的混合
    /*携带参数的混合*/
    width: @w;
    height: @h;
    background-color: @c;

}
.container{
    width: 400px;
    height: 400px;
    position: relative;
    margin:200px auto;
    background-color: seagreen;
    .outer{
        // width: 250px;
        // height: 250px;
        // background-color: sienna;
        .center(250px,250px,sienna);
    }
    .inner{
        // width: 100px;
        // height: 100px;
        // background-color:purple; 
        .center(100px,100px,purple);
    }
  
}
~~~



编译之后的css文件

~~~css
.container {
  width: 400px;
  height: 400px;
  position: relative;
  margin: 200px auto;
  background-color: seagreen;
}
.container .outer {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  /*携带参数的混合*/
  width: 250px;
  height: 250px;
  background-color: sienna;
}
.container .inner {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  /*携带参数的混合*/
  width: 100px;
  height: 100px;
  background-color: purple;
}

~~~



![image-20200420161013363](Less学习笔记.assets/image-20200420161013363.png)







### 4.带参数并且有默认值的混合



![image-20200420111924335](Less学习笔记.assets/image-20200420111924335.png)







### 5.带多个参数的混合

![image-20200420112057224](Less学习笔记.assets/image-20200420112057224.png)

Less文件

~~~less
// 使用混合，同时混合携带参数,注意参数的顺序，less无法判断为第几个参数
.center(@w:100px,@h:200px,@c:purple){
    position: absolute;
    left:0;
    right: 0;
    top:0;
    bottom:0;
    margin:auto;
    // 携带参数的混合
    /*携带参数的混合*/
    width: @w;
    height: @h;
    background-color: @c;

}
.container{
    width: 400px;
    height: 400px;
    position: relative;
    margin:200px auto;
    background-color: seagreen;
    .outer{
        .center(250px,250px,sienna);
    }
    .inner{
        .center();
    }
  
}
~~~

编译之后的css文件

~~~css
.container {
  width: 400px;
  height: 400px;
  position: relative;
  margin: 200px auto;
  background-color: seagreen;
}
.container .outer {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  /*携带参数的混合*/
  width: 250px;
  height: 250px;
  background-color: sienna;
}
.container .inner {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  /*携带参数的混合*/
  width: 100px;
  height: 200px;
  background-color: purple;
}

~~~



![image-20200420161507096](Less学习笔记.assets/image-20200420161507096.png)



### 6.命名参数

给参数命名：也就是将实参添加形参的名字，形成指定的参数的输入

![image-20200420112435768](Less学习笔记.assets/image-20200420112435768.png)

Less文件

~~~less
// 使用混合，同时混合携带参数,注意参数的顺序，less无法判断为第几个参数
.center(@w:100px,@h:200px,@c:purple){
    position: absolute;
    left:0;
    right: 0;
    top:0;
    bottom:0;
    margin:auto;
    // 携带参数的混合
    /*携带参数的混合*/
    width: @w;
    height: @h;
    background-color: @c;

}
.container{
    width: 400px;
    height: 400px;
    position: relative;
    margin:200px auto;
    background-color: seagreen;
    .outer{
        .center(250px,250px,sienna);
    }
    .inner{
        /*指定形参名输入实参 */
        .center(@h:100px,@c:red);
    }
}
~~~

编译之后的css文件

~~~css
.container {
  width: 400px;
  height: 400px;
  position: relative;
  margin: 200px auto;
  background-color: seagreen;
}
.container .outer {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  /*携带参数的混合*/
  width: 250px;
  height: 250px;
  background-color: sienna;
}
.container .inner {
  /*指定形参名输入实参 */
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  /*携带参数的混合*/
  width: 100px;
  height: 100px;
  background-color: red;
}
~~~







### 7.匹配模式

类似于混

它相当于但又不完全是JS中的if，只有满足条件后才能匹配

**一句话总结匹配模式：**
相当于我传入一个值，这个值会去匹配与它对应的样式；

![image-20200420113822766](Less学习笔记.assets/image-20200420113822766.png)



![image-20200420113856615](Less学习笔记.assets/image-20200420113856615.png)





![image-20200420114016885](Less学习笔记.assets/image-20200420114016885.png)



![image-20200420145225644](Less学习笔记.assets/image-20200420145225644.png)



![image-20200420145439547](Less学习笔记.assets/image-20200420145439547.png)



![image-20200420145634448](Less学习笔记.assets/image-20200420145634448.png)



![image-20200420145746753](Less学习笔记.assets/image-20200420145746753.png)







### 8.arguments变量

适用于属性的属性值有多个值的时候，不必一个一个添加进去，直接@arguments就可以了

例如下面的:border:@arguments;

Less文件

![image-20200420150239739](Less学习笔记.assets/image-20200420150239739.png)

css文件

![image-20200420150303917](Less学习笔记.assets/image-20200420150303917.png)





## Less的计算

![image-20200420150553251](Less学习笔记.assets/image-20200420150553251.png)

Less文件

~~~html
// 使用混合，同时混合携带参数,注意参数的顺序，less无法判断为第几个参数
.center(@w:100px,@h:200px,@c:purple){
    position: absolute;
    left:0;
    right: 0;
    top:0;
    bottom:0;
    margin:auto;
    // 携带参数的混合
    /*携带参数的混合*/
    width: @w;
    height: @h;
    background-color: @c;

}
.container{
    /*直接计算*/ 
    width: 40*10px;
    height: 400px;
    position: relative;
    margin:200px auto;
    background-color: seagreen;
    .outer{
         /*输入实参,并且计算 */
        .center(250px +20,250-20px,sienna);
    }
    .inner{
        /*指定形参名输入实参,并且计算 */
        .center(@h:100*1.5px,@c:red);
    }
}
~~~



编译之后的css文件

~~~css
.container {
  /*直接计算*/
  width: 400px;
  height: 400px;
  position: relative;
  margin: 200px auto;
  background-color: seagreen;
}
.container .outer {
  /*输入实参,并且计算 */
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  /*携带参数的混合*/
  width: 270px;
  height: 230px;
  background-color: sienna;
}
.container .inner {
  /*指定形参名输入实参,并且计算 */
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  /*携带参数的混合*/
  width: 100px;
  height: 150px;
  background-color: red;
}
~~~









## Less的继承（Extend）

性能比混合高

灵活性比混合低

继承被附在选择器后面或放置在规则集（即具体定于样式处），它看起来就像是一个在关键字extend后具有可选参数的伪类

继承实际上是将当前的选择器名以分组形式添加到被继承的选择器处，所以当既有继承又有自身样式时，应注意被继承的选择器的位置。

![image-20200420153152785](Less学习笔记.assets/image-20200420153152785.png)





![image-20200420153232566](Less学习笔记.assets/image-20200420153232566.png)



![image-20200420153329951](Less学习笔记.assets/image-20200420153329951.png)



![image-20200420153646858](Less学习笔记.assets/image-20200420153646858.png)



![image-20200420153822415](Less学习笔记.assets/image-20200420153822415.png)



![image-20200420153919502](Less学习笔记.assets/image-20200420153919502.png)





![image-20200420154046338](Less学习笔记.assets/image-20200420154046338.png)



![image-20200420154334113](Less学习笔记.assets/image-20200420154334113.png)



![image-20200420154306740](Less学习笔记.assets/image-20200420154306740.png)



![image-20200420154414206](Less学习笔记.assets/image-20200420154414206.png)



#### 一、Extend Syntax（语法）

说明：The extend is either attached to a selector or placed into a ruleset. It looks like a pseudoclass with selector parameter optionally followed by the keyword。

继承被附在选择器后面或放置在规则集（即具体定于样式处），它看起来就像是一个在关键字extend后具有可选参数的伪类（pseudoclass）。

Less文件

~~~less
.parentClass{
	color:red;
}
.subClassOne{
	&:extend(.parentClass);
}
.subClassTwo:extend(.parentClass){
	
}
~~~

编译为：

~~~css
.parentClass,
.subClassOne,
.subClassTwo {
  color: red;
}
~~~



#### 二、深入了解

除了上面的基本语法外，less继承也支持CSS 的选择器分组等更多用法。

##### 1、继承嵌套（nested）选择器

~~~less
.parentClass{
	span{
		color:red
	}
}
.subClassOne{
	&:extend(.parentClass span);
}
~~~

编译为：

~~~css
.parentClass span,
.subClassOne {
  color: red;
}
~~~



##### 2、精确匹配（exactly matching）

Less中，关键字extend里面的选择器必须与已定义的样式选择器严格一致，如div .a{}样式只能通过extend（div .a）继承，而不能是extend（.a），尽管这两者在CSS中并没太多区别。例：

~~~less
.a.class,
.class.a,
.class > .a {
 	color: blue;
}
.test:extend(.class) {} // this will NOT match the any selectors above
~~~

编译将提示：extend '.class' has no matches错误。此外，通配符也不能用于此情况。



##### 3、extend的选择器替代问题

此处即针对《less笔记-变量》文中选择器名字被变量替代的情况。只需extend继承的选择器名不包含变量，或在被参考的地方不是变量即可。

~~~less
@myClass:.redColor;

@{myClass}{
	color:red;
}
.class{
	color:red;
}
.subClass:extend(.redColor){}	//extend参考的选择器名在参考处为变量，错误
.subClass:extend(@{myClass}){}	//extend内选择器名为变量，错误。
@myClass:extend(.class){}		//不是上面两种情况，无错。

~~~



##### 4、媒体查询@media内的继承范围（scope）问题

同一个媒体查询（@media）内可被继承，



~~~less
@media print {
 	.screenClass:extend(.selector) {} // extend inside media
  	.selector { // this will be matched - it is in the same media
    	color: black;
  	}
}
.selector { // ruleset on top of style sheet - extend ignores it
  	color: red;
}
@media screen {
  	.selector {  // ruleset inside another media - extend ignores it
    	color: blue;
  	}
}
~~~

编译为：

~~~css
@media print {
  .selector,
  .screenClass {
    color: black;
  }
}
.selector {
  color: red;
}
@media screen {
  .selector {
    color: blue;
  }
}
~~~

说明：并非内外部优先级问题，实际编译可知，若将媒体查询print内部的.selector去掉，仍然无法继承外部的.selector。



##### 5、Duplication（重复）问题

~~~css
.class1,.class2{
	color:red;
}
.class3:extend(.class1,.class2){}
~~~

注意：class1与class2是用逗号隔开，属于分组查询，所有不会有上面的第2条。编译为：
.class1,
.class2,
.class3,
.class3 {
  color: red;
}
可见继承于分组选择器将是每个都单独继承。对于此处class1与class2完全一样的情况，extend内只写一个即可，不存在匹配问题。

#### 三、继承的经典使用情况



extend的经典使用情况在于，用于减少基类的使用。

如：现在有个默认字体样式类baseStyle，此外有个与baseStyle稍有差别的类specialStyle。则使css较少的css与html分别可为：

css：

~~~css
.baseStyle{
	color:gray;
	font-weight:500;
}
.specialStyle{
	color:blue;
}
~~~




html：

~~~html
<p class="baseStyle">我是默认的段落样式</p>
<p class="baseStyle specialStyle">我是默认样式上加了特殊样式的段落</p>
~~~

而思路相同，却更好的做法是使用Less的继承：
less：

~~~less
.baseStyle{
	color:gray;
	font-weight:500;
}
.specialStyle:extend(.baseStyle){
	color:blue;
}
~~~

效果虽一样，但使用less将使html结构信息更加直观，也更便于日后修改。



#### 四、个人理解

继承实际上是将当前的选择器名以分组形式添加到被继承的选择器处，所以当既有继承又有自身样式时，应注意被继承的选择器的位置。

情况一：被继承的选择器在前面

~~~less
.parentClass{
	color:red;
}
.subClass{
	color:blue;
	&:extend(.parentClass);
	border:1px solid blue;
}
~~~

编译结果，与预期一致，使用了自身的特殊color：

~~~css
.parentClass,
.subClass {
  color: red;
}
.subClass {
  color: blue;
  border: 1px solid blue;
}
~~~

情况二：被继承的选择器在后面

~~~less
.subClass{
	color:blue;
	&:extend(.parentClass);
	border:1px solid blue;
}
.parentClass{
	color:red;
}
~~~

编译结果，因为位置原因，与预期不一致，此时此例中继承没达到目的：

~~~css
.subClass {
  color: blue;
  border: 1px solid blue;
}
.parentClass,
.subClass {
  color: red;
}
~~~

原文链接：https://blog.csdn.net/qq_19865749/java/article/details/52523178



## Less避免编译

![image-20200420155258745](Less学习笔记.assets/image-20200420155258745.png)

