# JavaScript基础



## 计算机基础

![image-20200422174110267](JavaScript基础.assets/image-20200422174110267.png)

​	

### 1.编程语言

#### 1.1编程

![image-20200422174310742](JavaScript基础.assets/image-20200422174310742.png)



#### 1.2 计算机语言

![image-20200422174336959](JavaScript基础.assets/image-20200422174336959.png)



#### 1.3 编程语言

![image-20200422174408887](JavaScript基础.assets/image-20200422174408887.png)



#### 1.4 翻译器

![image-20200422174456551](JavaScript基础.assets/image-20200422174456551.png)



#### 1.5 编程语言和标记语言的区别

![image-20200422174516446](JavaScript基础.assets/image-20200422174516446.png)



#### 总结

![image-20200422174530745](JavaScript基础.assets/image-20200422174530745.png)





### 2.计算机基础

#### 2.1计算机组成

![image-20200422174547824](JavaScript基础.assets/image-20200422174547824.png)



![image-20200422174608952](JavaScript基础.assets/image-20200422174608952.png)



#### 2.2 数据存储

![image-20200422174620782](JavaScript基础.assets/image-20200422174620782.png)



#### 2.3 数据存储单位

![image-20200422174635362](JavaScript基础.assets/image-20200422174635362.png)





#### 2.4 程序运行

![image-20200422174651871](JavaScript基础.assets/image-20200422174651871.png)





## 初识Javascript

![image-20200422174806784](JavaScript基础.assets/image-20200422174806784.png)



### 1.初识JavaScript

![image-20200422174828064](JavaScript基础.assets/image-20200422174828064.png)

​	 **布兰登艾奇**

	#### 1.1 JavaScript是什么

![image-20200422174844411](JavaScript基础.assets/image-20200422174844411.png)



#### 1.2 JavaScript的作用

![image-20200422174906829](JavaScript基础.assets/image-20200422174906829.png)





#### 1.3 HTML/CSS/JS的关系

![image-20200422174936380](JavaScript基础.assets/image-20200422174936380.png)



#### 1.4 浏览器执行JS简介

![image-20200422174949169](JavaScript基础.assets/image-20200422174949169.png)

​      渲染引擎：解析HTML和CSS，如浏览器的blink,老版本的webkit

​      JS引擎：也称为JS解释器，读取，解析后运行js代码,比如chrome浏览器的V8,逐行解释每一句源码（转换为机器语言），然后由计算机去执行。



#### 1.5 JS的组成

![image-20200422175025770](JavaScript基础.assets/image-20200422175025770.png)

​    javaScript由三部分组成，分别是ECMAScript（JavaScript语法），DOM(页面文档对象模型)，BOM(浏览器对象模型)这三部分组成

##### 1.ECMAScript

![image-20200422175038341](JavaScript基础.assets/image-20200422175038341.png)



##### 2.DOM-文档对象模型

![image-20200422175114260](JavaScript基础.assets/image-20200422175114260.png)



##### 3.BOM-浏览器对象模型

![image-20200422175134403](JavaScript基础.assets/image-20200422175134403.png)



#### 1.6JS初体验

##### 1.行内式JS

![image-20200422175156190](JavaScript基础.assets/image-20200422175156190.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 行内式JS -->
    <input type="text" onclick="alert('干嘛点我')">
</body>
</html>
~~~



##### 2.内嵌JS

![image-20200422175318046](JavaScript基础.assets/image-20200422175318046.png)



##### 3.外部JS文件

![image-20200422175431553](JavaScript基础.assets/image-20200422175431553.png)

**注意：引用外部JS文件的script标签中间不可以写代码，否则将只执行标签中间的js代码，而不是外部js代码**



### 2. JavaScript注释



#### 2.1 单行注释

![image-20200422175455627](JavaScript基础.assets/image-20200422175455627.png)

~~~javascript
  // 单行注释 ctrl + /
    console.log('单行注释');
~~~





#### 2.2 多行注释

![image-20200422175516967](JavaScript基础.assets/image-20200422175516967.png)

~~~javascript
 /* 多行注释 alt+shift+a */
    console.log('多行注释');
~~~



#### 2.3 文档注释（添加）

~~~javascript
 /**
    * 
    * 文档API注释 /**+enter
    *
    */
   console.log('文档注释');
~~~



### 3.JavaScript输入输出语句

![image-20200422175557794](JavaScript基础.assets/image-20200422175557794.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
<script>
    var input = prompt('请输入你的年龄')
    alert('你的年龄是'+input);
    console.log('你的年龄是'+input);
</script>
</html>
~~~



![image-20200426221430221](JavaScript基础.assets/image-20200426221430221.png)



![image-20200426221439831](JavaScript基础.assets/image-20200426221439831.png)



![image-20200426221451702](JavaScript基础.assets/image-20200426221451702.png)



## 变量

![image-20200422175645220](JavaScript基础.assets/image-20200422175645220.png)



### 1.变量的概述

#### 1.1 什么是变量

![image-20200422175721676](JavaScript基础.assets/image-20200422175721676.png)



#### 1.2 变量在内存中的存储

![image-20200422175753595](JavaScript基础.assets/image-20200422175753595.png)

**可以如此理解，变量声明：就是在内存中申请一块用来存放数据的空间，也就是"预定酒店"，变量赋值：就是将值存放如内存空间中，也就是相当于"入住酒店"**



### 2.变量的使用

#### 2.1 声明变量

![image-20200422175859419](JavaScript基础.assets/image-20200422175859419.png)

 **通过变量名来访问内存中给对应变量分配的空间**

#### 2.2 赋值

![image-20200422175947035](JavaScript基础.assets/image-20200422175947035.png)



#### 2.3 变量的初始化

变量的初始化：就是在声明一个变量的同时也给这个变量赋值，一步完成。这个过程就是变量的初始化。

![image-20200422180021819](JavaScript基础.assets/image-20200422180021819.png)



#### 2.4 案例一

![image-20200422180047307](JavaScript基础.assets/image-20200422180047307.png)



#### 2.5 案例二

![image-20200422180107875](JavaScript基础.assets/image-20200422180107875.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
<script>
    var uName = prompt('请输入你的用户名');
    alert('你的姓名是:'+uName);
</script>
</html>
~~~





###  3.变量语法的拓展

#### 3.1 更新变量

![image-20200422180220667](JavaScript基础.assets/image-20200422180220667.png)





#### 3.2 同时声明多个变量

![image-20200422180239148](JavaScript基础.assets/image-20200422180239148.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
<script>
    var a = 15, b="name", c=true;
    console.log(a);
    console.log(b);
    console.log(c);
</script>
</html>
~~~



![image-20200426223520321](JavaScript基础.assets/image-20200426223520321.png)



#### 3.3 声明变量特殊情况

![image-20200422180302039](JavaScript基础.assets/image-20200422180302039.png)



### 4.变量命名的规范

![image-20200422180354415](JavaScript基础.assets/image-20200422180354415.png)



![image-20200422180422847](JavaScript基础.assets/image-20200422180422847.png)

第一组中： 第五个以数字开头====》不合法

第二组中：第五个包含了非法字符&====》不合法

第三组中：第五个以for也就是关键字===》不合法



### 实例一

![image-20200422180444336](JavaScript基础.assets/image-20200422180444336.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
<script>
   var uName = 'smith',age=88;
   console.log(uName,age);
   var temp;
    temp = uName;
    uName = age;
    age = temp;
    console.log(uName,age);
</script>
</html>
~~~



![image-20200426224341000](JavaScript基础.assets/image-20200426224341000.png)



### 5.小结

![image-20200422180459212](JavaScript基础.assets/image-20200422180459212.png)



![image-20200425105702297](JavaScript基础.assets/image-20200425105702297.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
<script>
    var a = 10;
    console.log(a); // 10 
    var b;
    console.log(b); // undefined
    console.log(name); // 什么也没有
    console.log(d); // d is not defined
</script>
</html>
~~~



![image-20200426225124660](JavaScript基础.assets/image-20200426225124660.png)





## 数据类型

![image-20200422180559396](JavaScript基础.assets/image-20200422180559396.png)

![image-20200422180616158](JavaScript基础.assets/image-20200422180616158.png)



### 1. 数据类型简介

#### 1.1 为什么需要数据类型

![image-20200422180733681](JavaScript基础.assets/image-20200422180733681.png)



#### 1.2 变量的数据类型



![image-20200422180931609](JavaScript基础.assets/image-20200422180931609.png)



![image-20200425110919668](JavaScript基础.assets/image-20200425110919668.png)



#### 1.3 数据类型的分类

![image-20200422181033525](JavaScript基础.assets/image-20200422181033525.png)



JS中把数据类型分成了两类

1.简单数据类型，包括（Number,String,Boolean,Undefined,Null）

2.复杂数据类型，包括（object）

#### **typeof 操作符**

由于`js`中的变量是松散类型的，所以它提供了一种检测当前变量的数据类型的方法，也就是typeof关键字.

typeof  123　　 //Number

typeof  'abc'　　//String

typeof   true    //Boolean

typeof   undefined  //Undefined

typeof   null     //Object

typeof   { }      //Object

typeof   [ ]      //Object

typeof   console.log()    //Function

null类型进行typeof操作符后，结果是object，原因在于，null类型被当做一个空对象引用。

##### **1.Number类型**

Number类型包含整数和浮点数（浮点数数值必须包含一个小数点，且小数点后面至少有一位数字）两种值。

NaN:非数字类型。特点：① 涉及到的 任何关于NaN的操作，都会返回NaN  ② NaN不等于自身。

isNaN() 函数用于检查其参数是否是非数字值。

isNaN(123)  //false  isNaN("hello")  //true

##### **2.String类型**

字符串有length属性。

字符串转换：转型函数String(),适用于任何数据类型（null,undefined 转换后为null和undefined）；toString()方法（null,undefined没有toString()方法）。

##### **3.Boolean类型**

该类型只有两个值，true和false

##### **4.Undefined类型**

只有一个值，即undefined值。使用var声明了变量，但未给变量初始化值，那么这个变量的值就是undefined。

##### **5.Null类型**

null类型被看做空对象指针，前文说到null类型也是空的对象引用。

##### **6.Object类型**

**js中对象是一组属性与方法的集合**。这里就要说到引用类型了，**引用类型是一种数据结构**，用于将数据和功能组织在一起。引用类型有时候也被称为对象定义，因为它们描述的是一类对象所具有的属性和方法。

#### 三大引用类型

##### **1.Object类型**

我们看到的大多数类型值都是Object类型的实例，创建Object实例的方式有两种。

第一种是使用new操作符后跟Object构造函数，如下所示

var person = new Object();

person.name = "Micheal";

person.age = 24;

第二种方式是使用对象字面量表示法，如下所示

var person = {

　　name : "Micheal",

　　age : 24

};

或者var person = Object.create(原型);

##### **2.Array类型**

数组的每一项可以用来保存任何类型的数据，也就是说，可以用数组的第一个位置来保存字符串，第二个位置保存数值，第三个位置保存对象....另外，数组的大小是可以动态调整的。

创建数组的基本方式有两种

第一种是使用Array构造函数，如下所示

var colors = new Array("red","blue","yellow");

第二种是使用数组字面量表示法，如下所示

var colors = ["red","blue","yellow"];

##### **3 Function类型**

每个函数都是Function类型的实例，而且都与其他引用类型一样具有属性和方法。函数通常是使用函数声明语法定义的，如下所示

function sum(num1,num2){

　　return num1 + num2;

};

这和使用函数表达式定义函数的方式相差无几。

var sun = function (){

　　return sum1 + sum2;

};

**也就是说，js按照存储方式分为值类型和引用类型。那么他们的计算有什么区别呢？**

题目1： var a = 100;

　　　　var b = a;

　　　  a = 200;

　　　　console.log (b);

题目2： var a = {age : 20};

　　　　var b = a;

　　　　b.age = 21;

　　　　console.log (a.age);

题目1的答案是 100，题目2的答案是21，

题目1是简单的值类型，在从一个变量向另一个变量赋值基本类型时，会在该变量上创建一个新值，然后再把该值复制到为新变量分配的位置上。

此时，a中保存的值为 100 ，当使用 a 来初始化 b 时，b 中保存的值也为100，但b中的100与a中的是完全独立的，该值只是a中的值的一个副本，此后，
这两个变量可以参加任何操作而相互不受影响。也就是说基本类型在赋值操作后，两个变量是相互不受影响的。

题目2是引用类型，当从一个变量向另一个变量赋值引用类型的值时，同样也会将存储在变量中的对象的值复制一份放到为新变量分配的空间中。

这时保存在变量中的是对象在堆内存中的地址，所以，与简单赋值不同，这个值的副本实际上是一个指针，而这个指针指向存储在堆内存的一个对象。那么赋值操作后，
两个变量都保存了同一个对象地址，则这两个变量指向了同一个对象。因此，改变其中任何一个变量，都会相互影响。

因此，引用类型的赋值其实是对象保存在栈区地址指针的赋值，因此两个变量指向同一个对象，任何的操作都会相互影响



### 2.简单数据类型

#### 2.1 简单数据类型（基本数据类型）

![image-20200422181113307](JavaScript基础.assets/image-20200422181113307.png)



#### 2.2 数字型Number

![image-20200422181153934](JavaScript基础.assets/image-20200422181153934.png)



##### 1.数字型进制

![image-20200422181209043](JavaScript基础.assets/image-20200422181209043.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
<script>
    // 八进制与十进制
    var num1 = 017;
    console.log(num1);//15
    var num2  = 018;
    console.log(num2);//18
    var num3 = 019;
    console.log(num3);//19
    var num4 = 010;
    console.log(num4); //8
    var num5 = 012;
    console.log(num5); //10
    
    // 十六进制
    var num6 = 0x9;
    console.log(num6);//9

    var num7 = 0xa;
    console.log(num7);//10

    var num8 =0xa8;
    console.log(num8);//168
    
    // js中的最大值与最小值

    console.log(Number.MAX_VALUE);//1.7976931348623157e+308
    console.log(Number.MIN_VALUE);//5e-324

    console.log(Number.MAX_VALUE*2);//Infinity
    console.log(-Number.MAX_VALUE*2);//Infinity
    console.log(Number.MIN_VALUE*2);//1e-323
    console.log(-Number.MIN_VALUE*2);//-1e-323
</script>
</script>
</html>
~~~



![image-20200425111539840](JavaScript基础.assets/image-20200425111539840.png)



##### 2.数字型范围

![image-20200422181305447](JavaScript基础.assets/image-20200422181305447.png)



![image-20200425111626116](JavaScript基础.assets/image-20200425111626116.png)



##### 3.数字型三个特殊值

![image-20200422181341069](JavaScript基础.assets/image-20200422181341069.png)



![image-20200425111715563](JavaScript基础.assets/image-20200425111715563.png)



##### 4.isNaN()

![image-20200422181409311](JavaScript基础.assets/image-20200422181409311.png)



#### 2.3 字符串型String

![image-20200422181529375](JavaScript基础.assets/image-20200422181529375.png)



**因为HTML标签里面的属性使用的是双引号，JS这里我们更推荐使用单引号**

##### 1.字符串引号嵌套

![image-20200422181613094](JavaScript基础.assets/image-20200422181613094.png)



![image-20200425112044367](JavaScript基础.assets/image-20200425112044367.png)





##### 2.字符串转义符

![image-20200422181657136](JavaScript基础.assets/image-20200422181657136.png)



![image-20200425112210207](JavaScript基础.assets/image-20200425112210207.png)



![image-20200422181724986](JavaScript基础.assets/image-20200422181724986.png)



![image-20200425112406654](JavaScript基础.assets/image-20200425112406654.png)



##### 3.字符串长度

![image-20200422181753910](JavaScript基础.assets/image-20200422181753910.png)



##### 4.字符串拼接

![image-20200422181812945](JavaScript基础.assets/image-20200422181812945.png)



**数值相加，字符相连**



![image-20200425112759419](JavaScript基础.assets/image-20200425112759419.png)



##### 5.字符串拼接加强

![image-20200422194324211](JavaScript基础.assets/image-20200422194324211.png)

**引引加加**



![image-20200422194410705](JavaScript基础.assets/image-20200422194410705.png)



![image-20200422194436154](JavaScript基础.assets/image-20200422194436154.png)



![image-20200422194503429](JavaScript基础.assets/image-20200422194503429.png)



![image-20200422194549883](JavaScript基础.assets/image-20200422194549883.png)



#### 2.4 布尔型Boolean

![image-20200422195600436](JavaScript基础.assets/image-20200422195600436.png)



#### 2.5 Undefined和Null

![image-20200422195703523](JavaScript基础.assets/image-20200422195703523.png)



![image-20200425113537629](JavaScript基础.assets/image-20200425113537629.png)



![image-20200425113643234](JavaScript基础.assets/image-20200425113643234.png)





### 3.获取变量数据类型

#### 3.1 获取检测变量的数据类型

![image-20200422195830972](JavaScript基础.assets/image-20200422195830972.png)



![image-20200425113844407](JavaScript基础.assets/image-20200425113844407.png)



#### 3.2 字面量

![image-20200422195917805](JavaScript基础.assets/image-20200422195917805.png)





### 4.数据类型转换



#### 4.1 什么是数据类型转换

![image-20200422200029980](JavaScript基础.assets/image-20200422200029980.png)



#### 4.2 转换为字符串

![image-20200422200123387](JavaScript基础.assets/image-20200422200123387.png)



#### 4.3 转换为数字型(重点)

![image-20200422200232172](JavaScript基础.assets/image-20200422200232172.png)





![image-20200425114748645](JavaScript基础.assets/image-20200425114748645.png)



![image-20200425115050233](JavaScript基础.assets/image-20200425115050233.png)



![image-20200425115247225](JavaScript基础.assets/image-20200425115247225.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
<script>
    var num1  = "78.9999";
    var num2  = "78.1111";
    var num3 = '0.23';
    var num4 = '.23';
    var num5 = '023';
    var num6 = 'abc'
    var num7 = '123px';
    var num8 = 'px123';
    console.log("-----------parseInt------------------");
    // 向下取整
    console.log(parseInt(num1)); // 78
    console.log(parseInt(num2)); // 78
    console.log(parseInt(num3)); // 0
    console.log(parseInt(num4)); // NaN
    console.log(parseInt(num5)); // 23
    console.log(parseInt(num6)); // NaN
    console.log(parseInt(num7)); // 123
    console.log(parseInt(num8)); // NaN

    console.log("-----------parseFloat------------------");
    console.log(parseFloat(num1)); // 78.9999
    console.log(parseFloat(num2)); // 78.1111
    console.log(parseFloat(num3)); // 0.23
    console.log(parseFloat(num4)); // 0.23
    console.log(parseFloat(num5)); // 23
    console.log(parseFloat(num6)); // NaN
    console.log(parseFloat(num7)); // 123
    console.log(parseFloat(num8)); // NaN

    console.log("-----------Number-----------------------");
    console.log(Number(num1)); // 78.9999
    console.log(Number(num2)); // 78.1111
    console.log(Number(num3)); // 0.23
    console.log(Number(num4)); // 0.23
    console.log(Number(num5)); // 23
    console.log(Number(num6)); // NaN
    console.log(Number(num7)); // NaN
    console.log(Number(num8)); // NaN
    
    
</script>
</html>
~~~



![image-20200422200321239](JavaScript基础.assets/image-20200422200321239.png)





![image-20200422200337753](JavaScript基础.assets/image-20200422200337753.png)



![image-20200422200507627](JavaScript基础.assets/image-20200422200507627.png)



![image-20200422200529604](JavaScript基础.assets/image-20200422200529604.png)



![image-20200422200544891](JavaScript基础.assets/image-20200422200544891.png)



![image-20200422200635039](JavaScript基础.assets/image-20200422200635039.png)



![image-20200422200817901](JavaScript基础.assets/image-20200422200817901.png)



**代表空、否定的值会被转换成false,如 ""、0、NaN、null、undefined**

~~~javascript
  console.log("----------Boolean----------------------");
    var a = -7;
    console.log(Boolean(a));// true
    var b = -1;
    console.log(Boolean(b));// true
    var c = 0;
    console.log(Boolean(c));// false
    var d = "0";
    console.log(Boolean(d));// true
    
    var e= -1;
    if(e){
        console.log("-1的布尔值不为false"); //-1的布尔值不为false
    }
~~~



## 扩展阅读



![image-20200422201041067](JavaScript基础.assets/image-20200422201041067.png)



![image-20200422201015705](JavaScript基础.assets/image-20200422201015705.png)



### 1.解释型语言与编译型语言

#### 1.概述

![image-20200422201149053](JavaScript基础.assets/image-20200422201149053.png)



#### 2.执行过程

![image-20200422201240254](JavaScript基础.assets/image-20200422201240254.png)



### 2.标识符，关键字，保留字

#### 1.标识符

![image-20200422201351675](JavaScript基础.assets/image-20200422201351675.png)



#### 2.关键字

![image-20200422201411329](JavaScript基础.assets/image-20200422201411329.png)



#### 3.保留字

![image-20200422201442118](JavaScript基础.assets/image-20200422201442118.png)



![image-20200422201623222](JavaScript基础.assets/image-20200422201623222.png)



## JavaScript运算符

![image-20200422202531633](JavaScript基础.assets/image-20200422202531633.png)



![image-20200422203912097](JavaScript基础.assets/image-20200422203912097.png)



###  运算符

![image-20200422204532093](JavaScript基础.assets/image-20200422204532093.png)



### 算数运算符



![image-20200422204558403](JavaScript基础.assets/image-20200422204558403.png)



![image-20200422204648464](JavaScript基础.assets/image-20200422204648464.png)



![image-20200425145225488](JavaScript基础.assets/image-20200425145225488.png)



![image-20200425145317447](JavaScript基础.assets/image-20200425145317447.png)







![image-20200422204820655](JavaScript基础.assets/image-20200422204820655.png)



![image-20200422204857115](JavaScript基础.assets/image-20200422204857115.png)



![image-20200425145639890](JavaScript基础.assets/image-20200425145639890.png)



### 递增和递减运算符



![image-20200422204942502](JavaScript基础.assets/image-20200422204942502.png)





![image-20200422205015944](JavaScript基础.assets/image-20200422205015944.png)





![image-20200422205201803](JavaScript基础.assets/image-20200422205201803.png)



![image-20200422205347398](JavaScript基础.assets/image-20200422205347398.png)



![image-20200422205406110](JavaScript基础.assets/image-20200422205406110.png)



![image-20200425150149136](JavaScript基础.assets/image-20200425150149136.png)



![image-20200425150421408](JavaScript基础.assets/image-20200425150421408.png)





### 比较运算符



![image-20200422205618310](JavaScript基础.assets/image-20200422205618310.png)



![image-20200422205651813](JavaScript基础.assets/image-20200422205651813.png)



![image-20200422205738215](JavaScript基础.assets/image-20200422205738215.png)



![image-20200425152052165](JavaScript基础.assets/image-20200425152052165.png)



### 逻辑运算符



![image-20200422205818036](JavaScript基础.assets/image-20200422205818036.png)





![image-20200422205849139](JavaScript基础.assets/image-20200422205849139.png)



![image-20200422205924663](JavaScript基础.assets/image-20200422205924663.png)



![image-20200422205951061](JavaScript基础.assets/image-20200422205951061.png)



![image-20200422210024798](JavaScript基础.assets/image-20200422210024798.png)



![image-20200422210045375](JavaScript基础.assets/image-20200422210045375.png)



![image-20200425152829564](JavaScript基础.assets/image-20200425152829564.png)





![image-20200422210221328](JavaScript基础.assets/image-20200422210221328.png)



![image-20200422210309240](JavaScript基础.assets/image-20200422210309240.png)



![image-20200425153042838](JavaScript基础.assets/image-20200425153042838.png)



### 赋值运算符



![image-20200422210354470](JavaScript基础.assets/image-20200422210354470.png)





### 运算符优先级



![image-20200422210517912](JavaScript基础.assets/image-20200422210517912.png)



![image-20200422210630105](JavaScript基础.assets/image-20200422210630105.png)



![image-20200422210720265](JavaScript基础.assets/image-20200422210720265.png)



## JavaScript 流程控制-分支

![image-20200422210848481](JavaScript基础.assets/image-20200422210848481.png)



![image-20200422210927383](JavaScript基础.assets/image-20200422210927383.png)



### 流程控制

![image-20200422211206345](JavaScript基础.assets/image-20200422211206345.png)







### 顺序流程控制

![image-20200422211300804](JavaScript基础.assets/image-20200422211300804.png)







### 分支流程控制 if 语句

![image-20200422211331071](JavaScript基础.assets/image-20200422211331071.png)



![image-20200422211514721](JavaScript基础.assets/image-20200422211514721.png)



![image-20200422211714747](JavaScript基础.assets/image-20200422211714747.png)





![image-20200422211800571](JavaScript基础.assets/image-20200422211800571.png)



![image-20200422211816061](JavaScript基础.assets/image-20200422211816061.png)



![image-20200422211856460](JavaScript基础.assets/image-20200422211856460.png)



![image-20200422211908843](JavaScript基础.assets/image-20200422211908843.png)



![image-20200422211920537](JavaScript基础.assets/image-20200422211920537.png)



![image-20200422211940277](JavaScript基础.assets/image-20200422211940277.png)



![image-20200422211953267](JavaScript基础.assets/image-20200422211953267.png)



![image-20200422212012181](JavaScript基础.assets/image-20200422212012181.png)





![image-20200422212038554](JavaScript基础.assets/image-20200422212038554.png)





![image-20200422212223071](JavaScript基础.assets/image-20200422212223071.png)



![image-20200422212245256](JavaScript基础.assets/image-20200422212245256.png)



![image-20200422212259125](JavaScript基础.assets/image-20200422212259125.png)



![image-20200422212315139](JavaScript基础.assets/image-20200422212315139.png)



![image-20200422212334170](JavaScript基础.assets/image-20200422212334170.png)



![image-20200422212349961](JavaScript基础.assets/image-20200422212349961.png)



![image-20200422212404467](JavaScript基础.assets/image-20200422212404467.png)





### 三元表达式

![image-20200422212423338](JavaScript基础.assets/image-20200422212423338.png)



![image-20200422212744334](JavaScript基础.assets/image-20200422212744334.png)



![image-20200422212802087](JavaScript基础.assets/image-20200422212802087.png)



![image-20200422212817939](JavaScript基础.assets/image-20200422212817939.png)







### 分支流程控制switch 语句



![image-20200422213036438](JavaScript基础.assets/image-20200422213036438.png)





![image-20200422213110408](JavaScript基础.assets/image-20200422213110408.png)



![image-20200425160310963](JavaScript基础.assets/image-20200425160310963.png)





![image-20200422213242530](JavaScript基础.assets/image-20200422213242530.png)



![image-20200425160500091](JavaScript基础.assets/image-20200425160500091.png)





![image-20200422213258792](JavaScript基础.assets/image-20200422213258792.png)



![image-20200422213312747](JavaScript基础.assets/image-20200422213312747.png)



![image-20200422213328131](JavaScript基础.assets/image-20200422213328131.png)



![image-20200422213457892](JavaScript基础.assets/image-20200422213457892.png)





## JavaScript流程控制-循环

![image-20200422213714256](JavaScript基础.assets/image-20200422213714256.png)



![image-20200422213808967](JavaScript基础.assets/image-20200422213808967.png)



### 循环

![image-20200422214011424](JavaScript基础.assets/image-20200422214011424.png)



![image-20200422214028698](JavaScript基础.assets/image-20200422214028698.png)



### for循环

![image-20200422214114616](JavaScript基础.assets/image-20200422214114616.png)



![image-20200422214201612](JavaScript基础.assets/image-20200422214201612.png)



![image-20200425161546806](JavaScript基础.assets/image-20200425161546806.png)





![image-20200422214350851](JavaScript基础.assets/image-20200422214350851.png)



![image-20200425161902897](JavaScript基础.assets/image-20200425161902897.png)





![image-20200422214447399](JavaScript基础.assets/image-20200422214447399.png)



![image-20200422214520806](JavaScript基础.assets/image-20200422214520806.png)



![image-20200422214631644](JavaScript基础.assets/image-20200422214631644.png)



![image-20200422214723940](JavaScript基础.assets/image-20200422214723940.png)



![image-20200422214740757](JavaScript基础.assets/image-20200422214740757.png)



![image-20200422214839505](JavaScript基础.assets/image-20200422214839505.png)



![image-20200422214857205](JavaScript基础.assets/image-20200422214857205.png)



![image-20200422214923462](JavaScript基础.assets/image-20200422214923462.png)



![image-20200422214940645](JavaScript基础.assets/image-20200422214940645.png)



![image-20200422215009204](JavaScript基础.assets/image-20200422215009204.png)



![image-20200422215118500](JavaScript基础.assets/image-20200422215118500.png)



![image-20200425163321273](JavaScript基础.assets/image-20200425163321273.png)



![image-20200425163335799](JavaScript基础.assets/image-20200425163335799.png)





![image-20200422215523353](JavaScript基础.assets/image-20200422215523353.png)





### 双重for循环



![image-20200422215554664](JavaScript基础.assets/image-20200422215554664.png)



![image-20200422215701131](JavaScript基础.assets/image-20200422215701131.png)



![image-20200422215917454](JavaScript基础.assets/image-20200422215917454.png)



![image-20200422215933043](JavaScript基础.assets/image-20200422215933043.png)



![image-20200422215956987](JavaScript基础.assets/image-20200422215956987.png)



![image-20200422220016324](JavaScript基础.assets/image-20200422220016324.png)



![image-20200422220156470](JavaScript基础.assets/image-20200422220156470.png)



![image-20200425164521254](JavaScript基础.assets/image-20200425164521254.png)





![image-20200422220209181](JavaScript基础.assets/image-20200422220209181.png)



![image-20200422220222650](JavaScript基础.assets/image-20200422220222650.png)



![image-20200422220744224](JavaScript基础.assets/image-20200422220744224.png)



![image-20200425164915149](JavaScript基础.assets/image-20200425164915149.png)





![image-20200422220755468](JavaScript基础.assets/image-20200422220755468.png)



![image-20200422220811298](JavaScript基础.assets/image-20200422220811298.png)



![image-20200422220827424](JavaScript基础.assets/image-20200422220827424.png)



![image-20200422221037253](JavaScript基础.assets/image-20200422221037253.png)



### while 循环

![image-20200422221122135](JavaScript基础.assets/image-20200422221122135.png)



![image-20200422221213554](JavaScript基础.assets/image-20200422221213554.png)



![image-20200425165532303](JavaScript基础.assets/image-20200425165532303.png)



![image-20200422221320221](JavaScript基础.assets/image-20200422221320221.png)



![image-20200425165653488](JavaScript基础.assets/image-20200425165653488.png)





![image-20200422221335784](JavaScript基础.assets/image-20200422221335784.png)



![image-20200425165815987](JavaScript基础.assets/image-20200425165815987.png)





### do while 循环

![image-20200422221403050](JavaScript基础.assets/image-20200422221403050.png)



![image-20200422221439078](JavaScript基础.assets/image-20200422221439078.png)



![image-20200422221513156](JavaScript基础.assets/image-20200422221513156.png)



![image-20200422221533331](JavaScript基础.assets/image-20200422221533331.png)



![image-20200425170200420](JavaScript基础.assets/image-20200425170200420.png)





![image-20200422221548332](JavaScript基础.assets/image-20200422221548332.png)



![image-20200422221614675](JavaScript基础.assets/image-20200422221614675.png)



![image-20200422221724971](JavaScript基础.assets/image-20200422221724971.png)



### continue break

![image-20200422221818382](JavaScript基础.assets/image-20200422221818382.png)



![image-20200422221856384](JavaScript基础.assets/image-20200422221856384.png)



## JavaScript命名规范以及语法格式

![image-20200422222251962](JavaScript基础.assets/image-20200422222251962.png)



![image-20200422222553942](JavaScript基础.assets/image-20200422222553942.png)



### 标识符命名规范

![image-20200422222917964](JavaScript基础.assets/image-20200422222917964.png)



### 操作符规范

![image-20200422222938080](JavaScript基础.assets/image-20200422222938080.png)







### 单行注释规范

![image-20200422223119848](JavaScript基础.assets/image-20200422223119848.png)



### 其他规范



![image-20200422224315242](JavaScript基础.assets/image-20200422224315242.png)





## JavaScript数组

![image-20200422224547357](JavaScript基础.assets/image-20200422224547357.png)



![image-20200422224747544](JavaScript基础.assets/image-20200422224747544.png)



### 数组的概念

![image-20200422225410520](JavaScript基础.assets/image-20200422225410520.png)





### 创建数组

![image-20200422225524952](JavaScript基础.assets/image-20200422225524952.png)



![image-20200422225555590](JavaScript基础.assets/image-20200422225555590.png)



![image-20200422225625654](JavaScript基础.assets/image-20200422225625654.png)



![image-20200422225756756](JavaScript基础.assets/image-20200422225756756.png)



![image-20200422225823728](JavaScript基础.assets/image-20200422225823728.png)



### 获取数组中的元素

![image-20200422230018150](JavaScript基础.assets/image-20200422230018150.png)



![image-20200422230103418](JavaScript基础.assets/image-20200422230103418.png)



### 遍历数组

![image-20200422230335157](JavaScript基础.assets/image-20200422230335157.png)



![image-20200422230354842](JavaScript基础.assets/image-20200422230354842.png)



![image-20200422230420232](JavaScript基础.assets/image-20200422230420232.png)



![image-20200422230606321](JavaScript基础.assets/image-20200422230606321.png)



![image-20200422230636012](JavaScript基础.assets/image-20200422230636012.png)



![image-20200422230707557](JavaScript基础.assets/image-20200422230707557.png)



![image-20200422230729604](JavaScript基础.assets/image-20200422230729604.png)



![image-20200422230746614](JavaScript基础.assets/image-20200422230746614.png)



![image-20200422230800771](JavaScript基础.assets/image-20200422230800771.png)



![image-20200422230957651](JavaScript基础.assets/image-20200422230957651.png)



![image-20200422231014816](JavaScript基础.assets/image-20200422231014816.png)



![image-20200422231037344](JavaScript基础.assets/image-20200422231037344.png)



![image-20200422231055906](JavaScript基础.assets/image-20200422231055906.png)



![image-20200422231125997](JavaScript基础.assets/image-20200422231125997.png)



![image-20200422231145228](JavaScript基础.assets/image-20200422231145228.png)



### 数组中新增元素

![image-20200422231321925](JavaScript基础.assets/image-20200422231321925.png)





![image-20200422231424341](JavaScript基础.assets/image-20200422231424341.png)



![image-20200422231511487](JavaScript基础.assets/image-20200422231511487.png)



![image-20200422231525533](JavaScript基础.assets/image-20200422231525533.png)



![image-20200422231549503](JavaScript基础.assets/image-20200422231549503.png)



![image-20200422231613404](JavaScript基础.assets/image-20200422231613404.png)



![image-20200422231628629](JavaScript基础.assets/image-20200422231628629.png)



![image-20200422231644642](JavaScript基础.assets/image-20200422231644642.png)



![image-20200422231716294](JavaScript基础.assets/image-20200422231716294.png)





### 数组案例



![image-20200422231824675](JavaScript基础.assets/image-20200422231824675.png)



![image-20200422231839085](JavaScript基础.assets/image-20200422231839085.png)



![image-20200422231905837](JavaScript基础.assets/image-20200422231905837.png)



![image-20200422231932405](JavaScript基础.assets/image-20200422231932405.png)



![image-20200422231951081](JavaScript基础.assets/image-20200422231951081.png)



![image-20200422232013650](JavaScript基础.assets/image-20200422232013650.png)



![image-20200422232104474](JavaScript基础.assets/image-20200422232104474.png)



![image-20200422232117513](JavaScript基础.assets/image-20200422232117513.png)



![image-20200422232133715](JavaScript基础.assets/image-20200422232133715.png)



![image-20200422232310748](JavaScript基础.assets/image-20200422232310748.png)







## JavaScript函数

![image-20200422232834980](JavaScript基础.assets/image-20200422232834980.png)



![image-20200422232908721](JavaScript基础.assets/image-20200422232908721.png)





### 函数的概念

![image-20200423100851838](JavaScript基础.assets/image-20200423100851838.png)





### 函数的使用

![image-20200423100932521](JavaScript基础.assets/image-20200423100932521.png)



![image-20200423100954877](JavaScript基础.assets/image-20200423100954877.png)



![image-20200423101032418](JavaScript基础.assets/image-20200423101032418.png)



![image-20200423101059068](JavaScript基础.assets/image-20200423101059068.png)



![image-20200423101150102](JavaScript基础.assets/image-20200423101150102.png)



### 函数的参数

![image-20200423101210698](JavaScript基础.assets/image-20200423101210698.png)



![image-20200423101328742](JavaScript基础.assets/image-20200423101328742.png)





![image-20200423101347325](JavaScript基础.assets/image-20200423101347325.png)



![image-20200423101406449](JavaScript基础.assets/image-20200423101406449.png)



![image-20200423101658696](JavaScript基础.assets/image-20200423101658696.png)



![image-20200423101809667](JavaScript基础.assets/image-20200423101809667.png)



### 函数的返回值

![image-20200423101838477](JavaScript基础.assets/image-20200423101838477.png)



![image-20200423101922274](JavaScript基础.assets/image-20200423101922274.png)



![image-20200423102002590](JavaScript基础.assets/image-20200423102002590.png)



![image-20200423102016383](JavaScript基础.assets/image-20200423102016383.png)



![image-20200423102030023](JavaScript基础.assets/image-20200423102030023.png)



![image-20200423102114133](JavaScript基础.assets/image-20200423102114133.png)



![image-20200425211942066](JavaScript基础.assets/image-20200425211942066.png)





![image-20200423102244737](JavaScript基础.assets/image-20200423102244737.png)



![image-20200423102314343](JavaScript基础.assets/image-20200423102314343.png)



![image-20200423102441309](JavaScript基础.assets/image-20200423102441309.png)



![image-20200423102500519](JavaScript基础.assets/image-20200423102500519.png)



![image-20200423102549563](JavaScript基础.assets/image-20200423102549563.png)



![image-20200423102641803](JavaScript基础.assets/image-20200423102641803.png)





### arguments的使用

![image-20200423102718823](image-20200423102718823.png)

![image-20200423102808544](JavaScript基础.assets/image-20200423102808544.png)



### 函数案例

![image-20200423102850123](JavaScript基础.assets/image-20200423102850123.png)



![image-20200423103130537](JavaScript基础.assets/image-20200423103130537.png)



![image-20200423103345462](JavaScript基础.assets/image-20200423103345462.png)



![image-20200423103525885](JavaScript基础.assets/image-20200423103525885.png)



![image-20200423103544916](JavaScript基础.assets/image-20200423103544916.png)



![image-20200423103618198](JavaScript基础.assets/image-20200423103618198.png)



### 函数的两种声明方式

![image-20200423103645037](JavaScript基础.assets/image-20200423103645037.png)



![image-20200423103748745](JavaScript基础.assets/image-20200423103748745.png)



![image-20200425214225592](JavaScript基础.assets/image-20200425214225592.png)



![image-20200423103829654](JavaScript基础.assets/image-20200423103829654.png)



![image-20200423103915395](JavaScript基础.assets/image-20200423103915395.png)



## JavaScript作用域



![image-20200424211445730](JavaScript基础.assets/image-20200424211445730.png)



![image-20200424211502434](JavaScript基础.assets/image-20200424211502434.png)



### 作用域

![image-20200424211624479](JavaScript基础.assets/image-20200424211624479.png)





![image-20200424211643579](JavaScript基础.assets/image-20200424211643579.png)



![image-20200425214608610](JavaScript基础.assets/image-20200425214608610.png)





![image-20200424211709219](JavaScript基础.assets/image-20200424211709219.png)



![image-20200425214745292](JavaScript基础.assets/image-20200425214745292.png)





![image-20200424211720006](JavaScript基础.assets/image-20200424211720006.png)



![image-20200424211746137](JavaScript基础.assets/image-20200424211746137.png)



### 变量的作用域



![image-20200424211932571](JavaScript基础.assets/image-20200424211932571.png)



![image-20200424212002670](JavaScript基础.assets/image-20200424212002670.png)



![image-20200425214957987](JavaScript基础.assets/image-20200425214957987.png)





![image-20200425215403112](JavaScript基础.assets/image-20200425215403112.png)





![image-20200424212035141](JavaScript基础.assets/image-20200424212035141.png)



![image-20200425215142973](JavaScript基础.assets/image-20200425215142973.png)



![image-20200425215740545](JavaScript基础.assets/image-20200425215740545.png)





![image-20200424212104963](JavaScript基础.assets/image-20200424212104963.png)



![image-20200425215856461](JavaScript基础.assets/image-20200425215856461.png)



![image-20200425220152102](JavaScript基础.assets/image-20200425220152102.png)





### 作用域链



![image-20200424213404659](JavaScript基础.assets/image-20200424213404659.png)



![image-20200424213608211](JavaScript基础.assets/image-20200424213608211.png)



![image-20200424213635760](JavaScript基础.assets/image-20200424213635760.png)



![image-20200424213656579](JavaScript基础.assets/image-20200424213656579.png)



![image-20200424213712957](JavaScript基础.assets/image-20200424213712957.png)



![image-20200425220553646](JavaScript基础.assets/image-20200425220553646.png)









## JavaScript预解析



![image-20200424213827888](JavaScript基础.assets/image-20200424213827888.png)



![image-20200424213858007](JavaScript基础.assets/image-20200424213858007.png)



### 预解析

![image-20200424214058161](JavaScript基础.assets/image-20200424214058161.png)



![image-20200424214123375](JavaScript基础.assets/image-20200424214123375.png)





![image-20200424214140207](JavaScript基础.assets/image-20200424214140207.png)



### 变量预解析和函数预解析



![image-20200424214343913](JavaScript基础.assets/image-20200424214343913.png)





![image-20200425221814752](JavaScript基础.assets/image-20200425221814752.png)





![image-20200425221734337](JavaScript基础.assets/image-20200425221734337.png)



![image-20200425222205444](JavaScript基础.assets/image-20200425222205444.png)





![image-20200424214417013](JavaScript基础.assets/image-20200424214417013.png)

但是对于匿名函数，JavaScript的预解析是它当作一个变量的预解析的形式来解析的么？

![image-20200425222517092](JavaScript基础.assets/image-20200425222517092.png)



![image-20200425222635526](JavaScript基础.assets/image-20200425222635526.png)





![image-20200424214837957](JavaScript基础.assets/image-20200424214837957.png)



![image-20200424214900625](JavaScript基础.assets/image-20200424214900625.png)



### 预解析案列



![image-20200424214938592](JavaScript基础.assets/image-20200424214938592.png)



![image-20200425222929557](JavaScript基础.assets/image-20200425222929557.png)

结果为undefined



![image-20200424214949308](JavaScript基础.assets/image-20200424214949308.png)





![image-20200424215123607](JavaScript基础.assets/image-20200424215123607.png)





![image-20200424215138486](JavaScript基础.assets/image-20200424215138486.png)



![image-20200425233143412](JavaScript基础.assets/image-20200425233143412.png)



![image-20200425233225926](JavaScript基础.assets/image-20200425233225926.png)



![image-20200425233250818](JavaScript基础.assets/image-20200425233250818.png)



![image-20200425233324005](JavaScript基础.assets/image-20200425233324005.png)



![image-20200425233414580](JavaScript基础.assets/image-20200425233414580.png)







## JavaScript对象

![image-20200424215330360](JavaScript基础.assets/image-20200424215330360.png)



![image-20200424215343389](JavaScript基础.assets/image-20200424215343389.png)



### 对象

![image-20200424215534769](JavaScript基础.assets/image-20200424215534769.png)





![image-20200424215554137](JavaScript基础.assets/image-20200424215554137.png)



![image-20200424215632198](JavaScript基础.assets/image-20200424215632198.png)





### 创建对象的三种方式



![image-20200424215721699](JavaScript基础.assets/image-20200424215721699.png)



![image-20200424215746118](JavaScript基础.assets/image-20200424215746118.png)



![image-20200424220018409](JavaScript基础.assets/image-20200424220018409.png)



![image-20200425234157833](JavaScript基础.assets/image-20200425234157833.png)





![image-20200424220117346](JavaScript基础.assets/image-20200424220117346.png)





![image-20200425234414457](JavaScript基础.assets/image-20200425234414457.png)





![image-20200424220134240](JavaScript基础.assets/image-20200424220134240.png)







![image-20200424220147249](JavaScript基础.assets/image-20200424220147249.png)







![image-20200424220232948](JavaScript基础.assets/image-20200424220232948.png)





![image-20200424220419028](JavaScript基础.assets/image-20200424220419028.png)







![image-20200425235054773](JavaScript基础.assets/image-20200425235054773.png)





![image-20200425235210499](JavaScript基础.assets/image-20200425235210499.png)





![image-20200424220458727](JavaScript基础.assets/image-20200424220458727.png)



![image-20200424220512981](JavaScript基础.assets/image-20200424220512981.png)



![image-20200425235540475](JavaScript基础.assets/image-20200425235540475.png)



![image-20200424220610148](JavaScript基础.assets/image-20200424220610148.png)





![image-20200426094236210](JavaScript基础.assets/image-20200426094236210.png)



![image-20200426094439798](JavaScript基础.assets/image-20200426094439798.png)



![image-20200426094850582](JavaScript基础.assets/image-20200426094850582.png)



![image-20200426095039281](JavaScript基础.assets/image-20200426095039281.png)



![image-20200424220640069](JavaScript基础.assets/image-20200424220640069.png)



![image-20200424220757053](JavaScript基础.assets/image-20200424220757053.png)



![image-20200424220832431](JavaScript基础.assets/image-20200424220832431.png)





![image-20200426095346527](JavaScript基础.assets/image-20200426095346527.png)





### new关键字



![image-20200424220911808](JavaScript基础.assets/image-20200424220911808.png)





![image-20200426095800415](JavaScript基础.assets/image-20200426095800415.png)







### 遍历对象属性



![image-20200424221022525](JavaScript基础.assets/image-20200424221022525.png)



![image-20200426100123668](JavaScript基础.assets/image-20200426100123668.png)





![image-20200424221441794](JavaScript基础.assets/image-20200424221441794.png)



![image-20200424221601226](JavaScript基础.assets/image-20200424221601226.png)



## JavaScript内置对象

![image-20200424221941340](JavaScript基础.assets/image-20200424221941340.png)





![image-20200424221955747](JavaScript基础.assets/image-20200424221955747.png)









### 内置对象

![image-20200424222623768](JavaScript基础.assets/image-20200424222623768.png)



### 查文档



![image-20200424222801896](JavaScript基础.assets/image-20200424222801896.png)



![image-20200424222841475](JavaScript基础.assets/image-20200424222841475.png)







### Math对象

![image-20200424222916461](JavaScript基础.assets/image-20200424222916461.png)



![image-20200426101032180](JavaScript基础.assets/image-20200426101032180.png)



![image-20200426101620871](JavaScript基础.assets/image-20200426101620871.png)





![image-20200426101804503](JavaScript基础.assets/image-20200426101804503.png)



![image-20200426101929520](JavaScript基础.assets/image-20200426101929520.png)





![image-20200424223045398](JavaScript基础.assets/image-20200424223045398.png)



![image-20200426101238555](JavaScript基础.assets/image-20200426101238555.png)



![image-20200426101313650](JavaScript基础.assets/image-20200426101313650.png)



![image-20200426101433533](JavaScript基础.assets/image-20200426101433533.png)



![image-20200424223101009](JavaScript基础.assets/image-20200424223101009.png)



![image-20200426102735223](JavaScript基础.assets/image-20200426102735223.png)



![image-20200426102420585](JavaScript基础.assets/image-20200426102420585.png)



![image-20200424223407896](JavaScript基础.assets/image-20200424223407896.png)



![image-20200424223430330](JavaScript基础.assets/image-20200424223430330.png)



![image-20200426150016858](JavaScript基础.assets/image-20200426150016858.png)



### 日期对象

![image-20200424223538066](JavaScript基础.assets/image-20200424223538066.png)



![image-20200424223556320](JavaScript基础.assets/image-20200424223556320.png)



![image-20200426150524467](JavaScript基础.assets/image-20200426150524467.png)





![image-20200424223814479](JavaScript基础.assets/image-20200424223814479.png)



![image-20200424230330577](JavaScript基础.assets/image-20200424230330577.png)



![image-20200426151036888](JavaScript基础.assets/image-20200426151036888.png)



![image-20200424230351337](JavaScript基础.assets/image-20200424230351337.png)



![image-20200426151450181](JavaScript基础.assets/image-20200426151450181.png)



![image-20200424230407121](JavaScript基础.assets/image-20200424230407121.png)





![image-20200426151738468](JavaScript基础.assets/image-20200426151738468.png)





![image-20200424230514958](JavaScript基础.assets/image-20200424230514958.png)



![image-20200426152523384](JavaScript基础.assets/image-20200426152523384.png)





![image-20200424230539562](JavaScript基础.assets/image-20200424230539562.png)





### 数组对象



![image-20200424230716236](JavaScript基础.assets/image-20200424230716236.png)





![image-20200426152804568](JavaScript基础.assets/image-20200426152804568.png)





![image-20200424230827303](JavaScript基础.assets/image-20200424230827303.png)





![image-20200426153148007](JavaScript基础.assets/image-20200426153148007.png)





![image-20200424230929230](JavaScript基础.assets/image-20200424230929230.png)



![image-20200426153457112](JavaScript基础.assets/image-20200426153457112.png)



![image-20200426153548547](JavaScript基础.assets/image-20200426153548547.png)



![image-20200426153814359](JavaScript基础.assets/image-20200426153814359.png)





![image-20200424231045592](JavaScript基础.assets/image-20200424231045592.png)





![image-20200424231256038](JavaScript基础.assets/image-20200424231256038.png)





![image-20200426154244523](JavaScript基础.assets/image-20200426154244523.png)





![image-20200424231323815](JavaScript基础.assets/image-20200424231323815.png)



![image-20200426154738537](JavaScript基础.assets/image-20200426154738537.png)



![image-20200424231444325](JavaScript基础.assets/image-20200424231444325.png)





![image-20200424231517162](JavaScript基础.assets/image-20200424231517162.png)



![image-20200426155130339](JavaScript基础.assets/image-20200426155130339.png)





![image-20200424231557494](JavaScript基础.assets/image-20200424231557494.png)



![image-20200426155358424](JavaScript基础.assets/image-20200426155358424.png)





![image-20200424231640109](JavaScript基础.assets/image-20200424231640109.png)









### 字符串对象

![image-20200424231852516](JavaScript基础.assets/image-20200424231852516.png)





![image-20200426155642364](JavaScript基础.assets/image-20200426155642364.png)





![image-20200424232013716](JavaScript基础.assets/image-20200424232013716.png)





![image-20200424232119788](JavaScript基础.assets/image-20200424232119788.png)



![image-20200426163947140](JavaScript基础.assets/image-20200426163947140.png)





![image-20200424232239075](JavaScript基础.assets/image-20200424232239075.png)



![image-20200424232257027](JavaScript基础.assets/image-20200424232257027.png)





![image-20200426165013585](JavaScript基础.assets/image-20200426165013585.png)





![image-20200426165055240](JavaScript基础.assets/image-20200426165055240.png)





![image-20200426170053879](JavaScript基础.assets/image-20200426170053879.png)



![image-20200426170141638](JavaScript基础.assets/image-20200426170141638.png)



![image-20200424232536829](JavaScript基础.assets/image-20200424232536829.png)





![image-20200424232607456](JavaScript基础.assets/image-20200424232607456.png)



![image-20200426170335688](JavaScript基础.assets/image-20200426170335688.png)





![image-20200426170714349](JavaScript基础.assets/image-20200426170714349.png)



![image-20200426170943699](JavaScript基础.assets/image-20200426170943699.png)







![image-20200424232627150](JavaScript基础.assets/image-20200424232627150.png)





![image-20200424232830021](JavaScript基础.assets/image-20200424232830021.png)





![image-20200426171153531](JavaScript基础.assets/image-20200426171153531.png)







![image-20200424232934685](JavaScript基础.assets/image-20200424232934685.png)





![image-20200426171408316](JavaScript基础.assets/image-20200426171408316.png)









![image-20200424233047347](JavaScript基础.assets/image-20200424233047347.png)



![image-20200426171546218](JavaScript基础.assets/image-20200426171546218.png)





![image-20200426171613502](JavaScript基础.assets/image-20200426171613502.png)









![image-20200424233118026](JavaScript基础.assets/image-20200424233118026.png)



![image-20200424233135100](JavaScript基础.assets/image-20200424233135100.png)







## JavaScript的简单类型与复杂类型



![image-20200424233314850](JavaScript基础.assets/image-20200424233314850.png)



![image-20200424233325010](JavaScript基础.assets/image-20200424233325010.png)



### 简单类型与复杂类型

![image-20200424233529419](JavaScript基础.assets/image-20200424233529419.png)



![image-20200426171933539](JavaScript基础.assets/image-20200426171933539.png)





### 堆和栈

![image-20200424233605774](JavaScript基础.assets/image-20200424233605774.png)





### 简单类型的内存分配

![image-20200424233653894](JavaScript基础.assets/image-20200424233653894.png)





### 复杂类型的内存分配

![image-20200424233714922](JavaScript基础.assets/image-20200424233714922.png)



### 简单类型传参



![image-20200424233750075](JavaScript基础.assets/image-20200424233750075.png)





### 复杂类型传参



![image-20200424233828546](JavaScript基础.assets/image-20200424233828546.png)





