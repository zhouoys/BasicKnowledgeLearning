JavaScript高级



# JavaScript面向对象

![image-20200503100922522](JavaScript高级.assets/image-20200503100922522.png)







![image-20200503100957814](JavaScript高级.assets/image-20200503100957814.png)





## 1. 面向对象编程介绍

### 1.1 两大编程思想

![image-20200503101216849](JavaScript高级.assets/image-20200503101216849.png)



### 1.2 面向过程编程 POP

![image-20200503101421165](JavaScript高级.assets/image-20200503101421165.png)





### 1.3 面向对象编程 OOP

![image-20200503101519314](JavaScript高级.assets/image-20200503101519314.png)





![image-20200503101703536](JavaScript高级.assets/image-20200503101703536.png)



![image-20200503101744930](JavaScript高级.assets/image-20200503101744930.png)





### 1.4 面向过程和面向对象的对比

![image-20200503101842575](JavaScript高级.assets/image-20200503101842575.png)







## 2. ES6中的类和对象



![image-20200503102023356](JavaScript高级.assets/image-20200503102023356.png)



### 2.1 对象

![image-20200503102116446](JavaScript高级.assets/image-20200503102116446.png)



### 2.2 类class

![image-20200503102324771](JavaScript高级.assets/image-20200503102324771.png)





![image-20200503102416688](JavaScript高级.assets/image-20200503102416688.png)





### 2.3 创建类、实例

![image-20200503102454056](JavaScript高级.assets/image-20200503102454056.png)





### 2.4 类 constructor 构造函数

![image-20200503102607562](JavaScript高级.assets/image-20200503102607562.png)





![image-20200503230455664](JavaScript高级.assets/image-20200503230455664.png)



![image-20200503230718637](JavaScript高级.assets/image-20200503230718637.png)





![image-20200503230641837](JavaScript高级.assets/image-20200503230641837.png)











### 2.5 类添加方法

![image-20200503102723458](JavaScript高级.assets/image-20200503102723458.png)





![image-20200503231002839](JavaScript高级.assets/image-20200503231002839.png)







![image-20200503231202836](JavaScript高级.assets/image-20200503231202836.png)







## 3. 类的继承



### 3.1 继承

![image-20200503102858900](JavaScript高级.assets/image-20200503102858900.png)





![image-20200503102944150](JavaScript高级.assets/image-20200503102944150.png)



![image-20200503231439790](JavaScript高级.assets/image-20200503231439790.png)







### 3.2 super关键字



![image-20200503103019656](JavaScript高级.assets/image-20200503103019656.png)





![image-20200503103647188](JavaScript高级.assets/image-20200503103647188.png)



![image-20200503103956066](JavaScript高级.assets/image-20200503103956066.png)



![image-20200503232610368](JavaScript高级.assets/image-20200503232610368.png)





![image-20200503232924929](JavaScript高级.assets/image-20200503232924929.png)





![](JavaScript高级.assets/image-20200503232946399.png)



#### 1. 继承的执行顺序

![image-20200504141042766](JavaScript高级.assets/image-20200504141042766.png)





![image-20200504141132414](JavaScript高级.assets/image-20200504141132414.png)





![image-20200504141443972](JavaScript高级.assets/image-20200504141443972.png)





![image-20200504141611516](JavaScript高级.assets/image-20200504141611516.png)



#### 2. 类里面共有属性和方法的调用

![image-20200504141848016](JavaScript高级.assets/image-20200504141848016.png)





### 3.3 三个注意点

![image-20200503103743754](JavaScript高级.assets/image-20200503103743754.png)



**constructor里面的this指向实例对象，方法里面的this指向这个方法的调用者**



这里有一个问题，如果只有一个类，那么方法自然是由实例化的对象调用。可以如果存在继承中的情况下，因为子类继承了父类的方法，那么在子类的实例化对象中调用父类的方法的话，那么很明显此处意思是原本父类方法里面的this指向的是父类，由于是子类的实例调用，所以该变成了指向子类了，是否可以这样理解？



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
    class Father {
        constructor(uname){
            this.uname = uname;
        }
        say(){
            console.dir(this);// 在子类中调用指向子类
            console.log(JSON.stringify(this)+'这是父类里面的this');
            return this.uname
        }
    }
    class Son extends Father{
        constructor(uname,age){
            super(uname);
            this.age = age;
        }
        show(){
            console.dir(this); // 在子类中调用指向子类
            console.log(JSON.stringify(this) + '这是子类里面的this')
            super.say();// 在子类的方法中通过super调用，仍然指向子类
            return this.uname + this.age;
        }
    }
    var person = new Son('Smith',88);
    // 调用父类的方法
    person.say();  
    // 调用子类的方法
    person.show();
</script>
</html>
~~~





![image-20200505120459662](JavaScript高级.assets/image-20200505120459662.png)



![image-20200504142910943](JavaScript高级.assets/image-20200504142910943.png)





![image-20200504143106648](JavaScript高级.assets/image-20200504143106648.png)





![image-20200504144634957](JavaScript高级.assets/image-20200504144634957.png)







## 4. 面向对象案例



### 案例：面向对象版tab栏切换

![image-20200503104127443](JavaScript高级.assets/image-20200503104127443.png)



![image-20200503104217252](JavaScript高级.assets/image-20200503104217252.png)





![image-20200503104239590](JavaScript高级.assets/image-20200503104239590.png)





![image-20200503104336278](JavaScript高级.assets/image-20200503104336278.png)





![image-20200503104353261](JavaScript高级.assets/image-20200503104353261.png)



#### 1. tab栏目切换-准备工作

![image-20200504144800056](JavaScript高级.assets/image-20200504144800056.png)





![image-20200504144946603](JavaScript高级.assets/image-20200504144946603.png)



![image-20200504153715574](JavaScript高级.assets/image-20200504153715574.png)





#### 2. tab栏目切换-模块划分



![image-20200504153231288](JavaScript高级.assets/image-20200504153231288.png)



![image-20200504153358241](JavaScript高级.assets/image-20200504153358241.png)



![image-20200504153636195](JavaScript高级.assets/image-20200504153636195.png)



![image-20200504153952196](JavaScript高级.assets/image-20200504153952196.png)



![image-20200504154415252](JavaScript高级.assets/image-20200504154415252.png)



#### 3. tab栏目切换-切换功能



![image-20200504154737326](JavaScript高级.assets/image-20200504154737326.png)



![image-20200504154931312](JavaScript高级.assets/image-20200504154931312.png)





![image-20200504155338650](JavaScript高级.assets/image-20200504155338650.png)





![image-20200504155357183](JavaScript高级.assets/image-20200504155357183.png)





![image-20200504155415311](JavaScript高级.assets/image-20200504155415311.png)





![image-20200504155625360](JavaScript高级.assets/image-20200504155625360.png)



![image-20200504155704343](JavaScript高级.assets/image-20200504155704343.png)



#### 4. tab栏目切换-添加功能



![image-20200504160010359](JavaScript高级.assets/image-20200504160010359.png)





![image-20200504160042733](JavaScript高级.assets/image-20200504160042733.png)





![image-20200504160153645](JavaScript高级.assets/image-20200504160153645.png)



![image-20200504160713063](JavaScript高级.assets/image-20200504160713063.png)





![image-20200504160747585](JavaScript高级.assets/image-20200504160747585.png)





![image-20200504160855985](JavaScript高级.assets/image-20200504160855985.png)





![image-20200504161111771](JavaScript高级.assets/image-20200504161111771.png)







![image-20200504161211339](JavaScript高级.assets/image-20200504161211339.png)





![image-20200504161336042](JavaScript高级.assets/image-20200504161336042.png)





![image-20200504163839907](JavaScript高级.assets/image-20200504163839907.png)



![image-20200504163942434](JavaScript高级.assets/image-20200504163942434.png)





![image-20200504164039755](JavaScript高级.assets/image-20200504164039755.png)



#### 5. tab栏目切换-删除功能



![image-20200504164429981](JavaScript高级.assets/image-20200504164429981.png)





![image-20200504164840980](JavaScript高级.assets/image-20200504164840980.png)





![image-20200504164730514](JavaScript高级.assets/image-20200504164730514.png)





![image-20200504165109197](JavaScript高级.assets/image-20200504165109197.png)





![image-20200504165844913](JavaScript高级.assets/image-20200504165844913.png)



![image-20200504170226321](JavaScript高级.assets/image-20200504170226321.png)



![image-20200504170609066](JavaScript高级.assets/image-20200504170609066.png)





#### 6. tab栏目切换-编辑功能

![image-20200504171631827](JavaScript高级.assets/image-20200504171631827.png)





![image-20200504171720196](JavaScript高级.assets/image-20200504171720196.png)



![image-20200504172113688](JavaScript高级.assets/image-20200504172113688.png)





![image-20200504172256586](JavaScript高级.assets/image-20200504172256586.png)





![image-20200504172402827](JavaScript高级.assets/image-20200504172402827.png)



















# 构造函数和原型



![image-20200503104705858](JavaScript高级.assets/image-20200503104705858.png)





![image-20200503104717932](JavaScript高级.assets/image-20200503104717932.png)





## 1. 构造函数和原型

### 1.1 概述

![image-20200503104854888](JavaScript高级.assets/image-20200503104854888.png)



#### 1. 创建对象的三种方式

![image-20200504172840502](JavaScript高级.assets/image-20200504172840502.png)





### 1.2 构造函数

![image-20200503105126421](JavaScript高级.assets/image-20200503105126421.png)





![image-20200504173034618](JavaScript高级.assets/image-20200504173034618.png)



在构造函数中，无论是属性还是方法，都需要添加this前缀，之前感觉只有属性才需要添加this.对于对象没有什么印象，因为不常见，其实也可以理解，分析构造函数实例化的过程如下

1. 在内存空间中创建一个空对象。
2. 将this指向这个空对象。
3. 执行构造函数里面的代码，将属性和方法赋值给对象。
4. 返回新创建的对象(所以构造函数不需要return)。

所以可以知道this代表当前构造函数的实例对象，所有的this前缀的属性和方法，都是实例中的内容。为了实现这一点必须要都添加 this

因为构造函数在实例化过程中对于函数都会开辟单独的空间存储，所以如果构造函数多次实例，则造成了对于一个相同的函数，结果在内存中被保存了多次，造成了系统资源的浪费。所以在实际的开发过程中都是在构造函数的原型对象中保存公共的方法，同时也要注意，构造函数的原型对象里面的公共方法里面的this,也依旧指向构造函数所创建的实例对象。



#### 1. new 在执行时会做四件事

![image-20200503105204711](JavaScript高级.assets/image-20200503105204711.png)



#### 2. 静态成员和实例成员

![image-20200503105454213](JavaScript高级.assets/image-20200503105454213.png)

**此处有一个问题，构造函数本身也属于一个对象，如果采用静态成员，也就是直接 Func.name = 'silly'这种形式的话，按照理解应该为静态成员，那么实例对象能否获取静态成员的值呢**

**另外如果添加的成员是一个函数，那么实例对象能否正常访问呢？**

**可以知道实例对象是无法访问其构造函数上的成员的（包括属性和方法）**



![image-20200504173428746](JavaScript高级.assets/image-20200504173428746.png)

**构造函数不可以访问实例成员（也就是this指向的成员）**



![image-20200504173604973](JavaScript高级.assets/image-20200504173604973.png)

**实例对象不可以访问静态成员（也就是构造函数直接添加的属性或者方法）**



### 1.3 构造函数的问题

构造函数问题，主要是指构造函数的函数对象的重复保存问题

![image-20200503105835696](JavaScript高级.assets/image-20200503105835696.png)





![image-20200504173749711](JavaScript高级.assets/image-20200504173749711.png)





### 1.4 构造函数的原型 prototype

![image-20200503110033606](JavaScript高级.assets/image-20200503110033606.png)



构造函数通过原型分配的函数是所有对象所共有的，那么可以知道的是构造函数的原型对象中的函数里面的this指向的是构造函数所创建的实例对象的，操作代码：

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // 创建构造函数
        function Person(uname,age){
            this.uname = uname;
            this.age = age;
        }
        // 利用构造函数的prototype原型对象添加公共的方法
        Person.prototype.say = function(){
            // 打印里面的this
            console.log(this);
        }
        // 分别实例化对象并且调用say方法
        var ps1  = new Person('ldh',77);
        ps1.say();
        var ps2 = new Person('zxy',66);
        ps2.say();
    </script>
</body>
</html>
~~~



![image-20200506234528328](JavaScript高级.assets/image-20200506234528328.png)





![image-20200504174547069](JavaScript高级.assets/image-20200504174547069.png)

**这才是在实际的开发中遇到的情况，也就是在创建构造函数时，将公共的属性放在构造函数里面，通过属性赋值，将公共的方法放在构造函数的原型对象里面，实例对象可以直接调用，也可以采用this的方法，直接获取构造函数实例化之后的值**



### 1.5 对象原型  \_proto\_



![image-20200503110317989](JavaScript高级.assets/image-20200503110317989.png)





![image-20200504175031584](JavaScript高级.assets/image-20200504175031584.png)

**此处需要注意\__proto\__此处的间隔应该为两个下划线，而不是一个下划线，需要注意**、



### 1.6 constructor 构造函数

![image-20200503110823184](JavaScript高级.assets/image-20200503110823184.png)





![image-20200504175527480](JavaScript高级.assets/image-20200504175527480.png)



**因为：Star.prototype = {.....},这种形式，如果直接Star.prototype.sing = function(){ ...... }这种形式的化，相当于{......}.sing = function())}{ ...... }，所以不会覆盖原来的对象。只是给原来的对象添加了新的属性**



![image-20200504180050396](JavaScript高级.assets/image-20200504180050396.png)

**而如果采取这种形式的化，可以直接知道 Star.prototype = {原来的对象}被重新赋值了一个对象Star.prototype = {新的对象}，所以其他的一些东西例如 constructor都被覆盖掉了。所以需要注意**



![image-20200504180007473](JavaScript高级.assets/image-20200504180007473.png)

可以知道的是：

1. 原来的构造函数被覆盖掉了。
2. 新的构造函数是Object是因为新的原型对象是一个对象，根据其默认l隐藏的对象原型\__proto\__,其实也可以知道其是指向Object.prototype的，所以可以知道确实如此。

在新的原型对象上重新设置其对应的constructor函数。

![image-20200504180238920](JavaScript高级.assets/image-20200504180238920.png)



可以看到设置了的指向原来的构造函数

![image-20200504180318835](JavaScript高级.assets/image-20200504180318835.png)





**手动操作指向原来的constructor函数**



![image-20200504180354701](JavaScript高级.assets/image-20200504180354701.png)





### 1.7 构造函数、实例、原型对象三者之间的关系

![image-20200503111313649](JavaScript高级.assets/image-20200503111313649.png)





### 1.8 原型链

![image-20200503111451067](JavaScript高级.assets/image-20200503111451067.png)

**是否可以总结几条关键记录**

1. JavaScript中的一切对象和方法都可以看作是对象。
2. 一切对象和方法都具有\__proto\__属性也就是对象原型指向对象的构造函数的原型对象。
3. 所以可以知道一切对象都具有构造函数，也就是可以通过 new 关键字()实例化出来。
4. 通过以上步骤，可以推导出一个原型链出来。



![image-20200504181512538](JavaScript高级.assets/image-20200504181512538.png)





### 1.9 JavaScript 的成员查找机制(规则)

![image-20200503111717328](JavaScript高级.assets/image-20200503111717328.png)



**原型链查找规则是基于\__proto\__的查找机制来查找的，可以知道的是,__proto__,是所有对象均具有的，原型链的基础是原型对象和对象原型**



### 1.10 原型对象this指向

![image-20200503112051280](JavaScript高级.assets/image-20200503112051280.png)



**坐实了原型对象里面的this指向实例对象，这一论断**



### 1.11 内置拓展对象



![image-20200503112243342](JavaScript高级.assets/image-20200503112243342.png)

因为如果直接={}，会将数组和字符串的原型对象的一些方法都会直接覆盖掉的，所以我们要综合考量，只能采取这种方式来扩展内置对象，而不是采取直接覆盖的这种方式。





![image-20200504212517249](JavaScript高级.assets/image-20200504212517249.png)

​	Array是所有数组的构造函数 ，因为有 var arr = new Array(1,2,3,4)这种创建数组的形式，所以直接在数组的原型对象上添加方法，则后面的所有的数组实例对象均可以调用该方法。



![image-20200504212449044](JavaScript高级.assets/image-20200504212449044.png)







![image-20200504212709227](JavaScript高级.assets/image-20200504212709227.png)

​	如果采取直接对象值覆盖这样的赋值方法的话，在浏览器控制台直接打印报错。

因为将数组的其他方法都覆盖掉了。

## 2. 继承

### 2.1 call()

![image-20200503112346407](JavaScript高级.assets/image-20200503112346407.png)



**此处的call方法，调用方式是：fun.call(thisArg,arg1,arg2),改变的是fun里面的this的指向问题，一般而言，构造函数fun里面的this的指向为构造函数的实例对象，而采用call的话，则构造函数的this指向的是thisArg这个对象。**



**当然对于普通函数而言，可以知道的是普通函数里面的this指向的是window对象，普通函数调用了call方法，同样也可以改变其中的this的指向问题，与构造函数的情况是一致的。**



#### 1.call可以调用函数

![image-20200504212954245](JavaScript高级.assets/image-20200504212954245.png)



#### 2.call可以改变函数里面的this的指向

![image-20200504213043099](JavaScript高级.assets/image-20200504213043099.png)





![image-20200504213105953](JavaScript高级.assets/image-20200504213105953.png)



#### 3.call方法传递参数

![image-20200504213237363](JavaScript高级.assets/image-20200504213237363.png)



**在以上的条件下，可以知道的是call方法的第一个参数，也就是要调用call函数的fun函数里面的this的指向，而其它的剩余的参数参与的是fun函数的其他赋值情况，也就是彼此无影响**



![image-20200504213301735](JavaScript高级.assets/image-20200504213301735.png)





### 2.2 借用构造函数继承--父类型属性

![image-20200503112931495](JavaScript高级.assets/image-20200503112931495.png)





![image-20200504213918682](JavaScript高级.assets/image-20200504213918682.png)



![image-20200504213951688](JavaScript高级.assets/image-20200504213951688.png)





![image-20200504214112916](JavaScript高级.assets/image-20200504214112916.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // 父类
        function Father(uname,age,sex){
            this.uname = uname;
            this.age = age;
            this.sex = sex;
            console.log(this); 
        }
        // 子类
        function Son(uname,age,sex){
            Father.call(this,uname,age,sex)
        }
        var son = new Son('ldh',55,'男');
        console.log(son);
    </script>
</body>
</html>
~~~



![image-20200507175843926](JavaScript高级.assets/image-20200507175843926.png)





#### 1.子类继承父类之后新增属性

![image-20200504214217483](JavaScript高级.assets/image-20200504214217483.png)







### 2.3 借用原型对象继承--父类型方法



![image-20200503113208365](JavaScript高级.assets/image-20200503113208365.png)



继承的前提条件：

1. 一般情况下，对象的方法都在构造函数的原型对象中设置，通过构造函数无法继承父类的方法(之前的属性是通过call方法来继承的，但是这种方法无法继承属性，因为构造函数的方法一般是设置在构造函数的原型对象中的，无法通过改变this的指向来获取)。

方法：让子类所共享的方法提取出来，让子类的prototype原型对象 = new 父类();

理解：可以知道的是，new 父类()，会场产生一个父类的实例对象，设为 father,可以知道father的\__proto\__指向Father的原型对象从而可以获取定义在构造函数原型对象上的定义的方法。

如果让 Son.prototype = father，可以知道就是让father对象作为Son的原型对象，可以知道那么son.\__proto__就可以获取设置在Father原型对象上面定义的方法了。

可是此时可以知道的是Son的关于原型对象的一些属性例如constructor都会被Father覆盖掉，所以可以知道存在一些问题



![image-20200504214528489](JavaScript高级.assets/image-20200504214528489.png)

son并没有继承自Father的原型对象的money方法。



![image-20200504214857534](JavaScript高级.assets/image-20200504214857534.png)



此处存在一些理解的问题，可以知道的是如果 Son.prototype = Father.prototype,那么就是Son.prototype与Father.prototype均指向相同的地址，所以可以知道的是任何一方地址的改变都影响相同的变化，所以说修改了子类的原型对象之后，父类的原型对象也接着改变。因为它们均指向同一个



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
            function Father (uname){
                this.unameb = uname;
            }
            Father.prototype.earnMoney = function(){
                console.log('父类挣钱');  
            }
            function Son(age){
                this.age = age;
            }
            Son.prototype.costMoney = function(){
                console.log('子类花钱');
            }
            Son.prototype = Father.prototype;
            var son = new Son();
            var father = new Father();
            // 第一种继承方式 尝试给子类添加新的方法查看父类的变化
            Son.prototype.say = function(){
                console.log('我要说话');
            }
            console.log(son);
            console.log(father);
    </script>
</body>
</html>
~~~



![image-20200507225041982](JavaScript高级.assets/image-20200507225041982.png)





![image-20200504215400860](JavaScript高级.assets/image-20200504215400860.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
            function Father (uname){
                this.unameb = uname;
            }
            Father.prototype.earnMoney = function(){
                console.log('父类挣钱');  
            }
            function Son(age){
                this.age = age;
            }
            Son.prototype.costMoney = function(){
                console.log('子类花钱');
            }
            Son.prototype = new Father();
            var son = new Son();
            var father = new Father();
            // 第二种继承方式 尝试给子类添加新的方法查看父类的变化
            Son.prototype.say = function(){
                console.log('我要说话');
            }
            console.log(son);
            console.log(father);
    </script>
</body>
</html>
~~~



![image-20200507225336350](JavaScript高级.assets/image-20200507225336350.png)

可以知道，子类继承了父类的earnMoney方法，同时自己的新添加的say方法并没有影响到父元素。

可是还是有一个问题子类的构造函数问题。



![image-20200507225559223](JavaScript高级.assets/image-20200507225559223.png)





![image-20200504215443422](JavaScript高级.assets/image-20200504215443422.png)





![image-20200504221257261](JavaScript高级.assets/image-20200504221257261.png)





![image-20200504215615616](JavaScript高级.assets/image-20200504215615616.png)



![image-20200504222025822](JavaScript高级.assets/image-20200504222025822.png)















### 2.4 类的本质

![image-20200503113616894](JavaScript高级.assets/image-20200503113616894.png)





![image-20200504223351051](JavaScript高级.assets/image-20200504223351051.png)





![image-20200505145939237](JavaScript高级.assets/image-20200505145939237.png)





![image-20200505150052679](JavaScript高级.assets/image-20200505150052679.png)





![image-20200505150200505](JavaScript高级.assets/image-20200505150200505.png)







## 3. ES5中的新增方法



### 3.1 ES5 新增方法概述

![image-20200503113835318](JavaScript高级.assets/image-20200503113835318.png)



### 3.2 数组方法



#### forEach()

![image-20200503113923259](JavaScript高级.assets/image-20200503113923259.png)





![image-20200505150714439](JavaScript高级.assets/image-20200505150714439.png)









#### filter()

![image-20200503114019445](JavaScript高级.assets/image-20200503114019445.png)





![image-20200505151017206](JavaScript高级.assets/image-20200505151017206.png)







#### some()

![image-20200503114102954](JavaScript高级.assets/image-20200503114102954.png)





![image-20200505151543333](JavaScript高级.assets/image-20200505151543333.png)



#### map()

map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

map() 方法按照原始数组元素顺序依次处理元素。 

**注意：** map() 不会对空数组进行检测。

**注意：** map() 不会改变原始数组。

~~~javascript
// 给数组中的每一个元素加上其索引，如果为字符串，则加一个字符
var arr = [1,90,'smilly','hello worold',88,67];
 var newArr = arr.map(function(value,index,arr){
        return value + index;
})
console.log(newArr); // [1, 91, "smilly2", "hello worold3", 92, 72]
~~~





#### every()

every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。

every() 方法使用指定函数检测数组中的所有元素：

- 如果数组中检测到有一个元素不满足，则整个表达式返回 *false* ，且剩余的元素不会再进行检测。
- 如果所有元素都满足条件，则返回 true。

**注意：** every() 不会对空数组进行检测。

**注意：** every() 不会改变原始数组。

~~~java

    // 检测数组中的所有元素是否都是数值
var arr = [1,90,'smilly','hello worold',88,67];
var isFlag = arr.every(function(value,index,arr){
  return typeof value === 'number'
    })
    console.log(isFlag);//false
    var arr1 = [1,2,3,4]
    var isFlag1 = arr1.every(function(value,index,arr){
        return typeof value === 'number'
    })
    console.log(isFlag1);//truetrue
~~~



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
    // 打印数组所有的元素以及对应的下标
     var arr = [1,90,'smilly','hello worold',88,67];
     arr.forEach(function(value,index,arr){
         console.log(value+ '--'+index+'--'+arr);
     })
    //1--0--1,90,smilly,hello worold,88,67
    //90--1--1,90,smilly,hello worold,88,67
    //smilly--2--1,90,smilly,hello worold,88,67
    //hello worold--3--1,90,smilly,hello worold,88,67
    //88--4--1,90,smilly,hello worold,88,67
    //67--5--1,90,smilly,hello worold,88,67
    //过滤数组，获取数组中的所有的数字元素，并且返回一个新数组。
    var numArr = arr.filter(function(value,index,arr){
        if(typeof value === 'number'){
           return true;
        } else {
            return false;
        }
     })
     console.log(numArr);//[1, 90, 88, 67]
    // 查找数组中的第一个偶数
    var evenNumber = arr.some(function(value,index,arr){
        return value% 2 === 0 ? true:false;
    })
    console.log(evenNumber);//true
    // 给数组中的每一个元素加上其索引，如果为字符串，则加一个字符
    var newArr = arr.map(function(value,index,arr){
        return value + index;
    })
    console.log(newArr); // [1, 91, "smilly2", "hello worold3", 92, 72]
    // 检测数组中的所有元素是否都是数值
    var isFlag = arr.every(function(value,index,arr){
        return typeof value === 'number'
    })
    console.log(isFlag);//false
    var arr1 = [1,2,3,4]
    var isFlag1 = arr1.every(function(value,index,arr){
        return typeof value === 'number'
    })
    console.log(isFlag1);//truetrue
</script>
</html>
~~~







#### 案例：查询商品案例

![image-20200503114831430](JavaScript高级.assets/image-20200503114831430.png)





![image-20200505152523564](JavaScript高级.assets/image-20200505152523564.png)



##### 1.渲染页面数据

![image-20200505152905463](JavaScript高级.assets/image-20200505152905463.png)



##### 2.根据价格筛选数据

![image-20200505153324343](JavaScript高级.assets/image-20200505153324343.png)





![image-20200505153457354](JavaScript高级.assets/image-20200505153457354.png)





![image-20200505153625688](JavaScript高级.assets/image-20200505153625688.png)





![image-20200505153541393](JavaScript高级.assets/image-20200505153541393.png)





![image-20200505153730660](JavaScript高级.assets/image-20200505153730660.png)





##### 3.根据商品名筛选



![image-20200505153936503](JavaScript高级.assets/image-20200505153936503.png)



![image-20200505154230784](JavaScript高级.assets/image-20200505154230784.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            width: 40%;
            height: 300px;
            margin: 0 auto;
        }
        table{
            border-collapse:collapse;
            margin: 0 auto;
            width: 400px;
            text-align: center;
        }
        th,td{
            border:1px solid #333;
        }
        .container input{
            width: 50px;
        }
        .container .search,.search-by-price,.search-by-name{
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        .search{
            margin-bottom: 20px;
        }
        .search input:last-child{
            margin-left: 5px;
        }
    </style>
</head>
<body>
  <div class="container">
      <div class="search">
          <div class="search-by-price">
              <span>按照价格查询：</span>
              <input type="number" class="start-price"/>
              <span>-</span>
              <input type="number" class="end-price"/>
              <input type="button" value ="查询" class="btn-search-price"/>
          </div>
          <div class="search-by-name">
              <span>按照商品名称查询：</span>
              <input type="text" class="search-name">
              <input type="button" class="btn-search-name" value = '查询'>
          </div>
      </div>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>商品名称</th>
                <th>价格</th>
            </tr>
        </thead>
        <tbody>
            <!-- <tr>
                <td>001</td>
                <td>小米</td>
                <td>1000</td>
            </tr>
            <tr>
                <td>002</td>
                <td>苹果</td>
                <td>9000</td>
            </tr> 
            <tr>
                <td>003</td>
                <td>华为</td>
                <td>5000</td>
            </tr>
            <tr>
                <td>004</td>
                <td>Oppo</td>
                <td>4000</td>
            </tr>
            <tr>
                <td>005</td>
                <td>vivo</td>
                <td>3000</td>
            </tr> -->
        </tbody>
    </table>
  </div>
</body>
<script>
    window.onload = function(){
        // 页面加载完成之后，再重新设置
        var datas = [
        {
            id:'001',
            name:'小米',
            price:1000
        },{
            id:'002',
            name:'苹果',
            price:9000
        },{
            id:'003',
            name:'华为',
            price:5000
        },{
            id:'004',
            name:'vivo',
            price:2000
        },{
            id:'005',
            name:'努比亚N5',
            price:3000
        },{
            id:'荣耀',
            name:'vivo',
            price:4000
        }];
        // 将数据渲染到页面中
        var tbody = document.querySelector('tbody');
        // 封装渲染方法
        function renderDatas(datas){
            datas.forEach(function(value,index,arr){
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>'+value.id + '</td>'+'<td>'+value.name + '</td>'+'<td>'+value.price + '</td>';
            tbody.appendChild(tr);
            })
        }
        // 初始化调用渲染方法
        renderDatas(datas);
        // 按照价格查询
        var  btnSearchByPrice =document.querySelector(".btn-search-price");
        btnSearchByPrice.addEventListener('click',function(){
            var startPrice = document.querySelector('.start-price');
            var endPrice = document.querySelector('.end-price');
            // 对输入的价格做检验(略)
            // 通过filter
            var priceResults = datas.filter(function(value,index,arr){
                return value.price >= startPrice.value && value.price <= endPrice.value
            })
            // 在渲染之前，先清空之前的渲染结果
            tbody.innerHTML = '';
            // 重新渲染之后过滤的数据
            console.log(priceResults);
            renderDatas(priceResults);
        })
        // 按照商品名称查询
        var btnSearchByName = document.querySelector('.btn-search-name')
        btnSearchByName.addEventListener('click',function(){
            var name = document.querySelector('.search-name')
            var item = [];
            datas.some(function(value,index,arr){
                if(value.name === name.value){
                    item.push(value);
                    return true;
                }else {
                    return false
                }
            })
            // 重新渲染数据
            tbody.innerHTML = '';
            renderDatas(item)
        })
    }
</script>
</html>
~~~





![image-20200508110251771](JavaScript高级.assets/image-20200508110251771.png)







#### some和forEach,filter的区别

在遍历过程中哦贵some中执行return true会停止遍历。

而forEach和filter中执行return true不会停止遍历。

![image-20200505154605908](JavaScript高级.assets/image-20200505154605908.png)





![image-20200505154702429](JavaScript高级.assets/image-20200505154702429.png)



![image-20200505154824674](JavaScript高级.assets/image-20200505154824674.png)







### 3.3  字符串方法

#### str.trim()

![image-20200503114926183](JavaScript高级.assets/image-20200503114926183.png)





![image-20200505155252835](JavaScript高级.assets/image-20200505155252835.png)





### 3.4 对象方法



#### Object.keys(obj)

![image-20200503115037115](JavaScript高级.assets/image-20200503115037115.png)



注意：获取的是对象自身所有的属性，那是否包含了继承父类的属性呢？



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        obj = {
            id:'001',
            name:'smith',
            hobby:'baseball'
        }
       console.log(Object.keys(obj));
       for(var item in obj){
           console.log(item);
       }
    </script>
</body>
</html>
~~~





![image-20200508111948929](JavaScript高级.assets/image-20200508111948929.png)





#### Object.defineProperty(obj, prop, descripator)

![image-20200503115137540](JavaScript高级.assets/image-20200503115137540.png)





![image-20200503115350753](JavaScript高级.assets/image-20200503115350753.png)



![image-20200505155509851](JavaScript高级.assets/image-20200505155509851.png)





![image-20200505155749607](JavaScript高级.assets/image-20200505155749607.png)





![image-20200505155934997](JavaScript高级.assets/image-20200505155934997.png)





![image-20200505160303617](JavaScript高级.assets/image-20200505160303617.png)





![image-20200505160410827](JavaScript高级.assets/image-20200505160410827.png)



![image-20200505160544943](JavaScript高级.assets/image-20200505160544943.png)





![image-20200505160814669](JavaScript高级.assets/image-20200505160814669.png)







# 函数进阶



![image-20200503115609632](JavaScript高级.assets/image-20200503115609632.png)



## 1. 函数的定义以及调用



### 1.1 函数的定义方式

![image-20200503152344251](JavaScript高级.assets/image-20200503152344251.png)



Function 是所有函数的构造函数，也属于对象。



![image-20200505161246955](JavaScript高级.assets/image-20200505161246955.png)





![image-20200505161446122](JavaScript高级.assets/image-20200505161446122.png)



![image-20200505161508823](JavaScript高级.assets/image-20200505161508823.png)





![image-20200503152535043](JavaScript高级.assets/image-20200503152535043.png)



### 1.2 函数的调用方式

![image-20200503152556634](JavaScript高级.assets/image-20200503152556634.png)



![image-20200505165038747](JavaScript高级.assets/image-20200505165038747.png)



![image-20200505165124608](JavaScript高级.assets/image-20200505165124608.png)





![image-20200505165202586](JavaScript高级.assets/image-20200505165202586.png)





![image-20200505165308149](JavaScript高级.assets/image-20200505165308149.png)











## 2. this

### 2.1 函数内this的指向

![image-20200503152745545](JavaScript高级.assets/image-20200503152745545.png)





![image-20200505165540199](JavaScript高级.assets/image-20200505165540199.png)





### 2.2 改变函数内部this指向

#### 1. call方法

![image-20200503152850051](JavaScript高级.assets/image-20200503152850051.png)

当我们想要改变this的指向，同时想要调用这个函数的时候，可以使用call,比如继承

注意两点:

1. 调用这个函数
2. 改变函数内部的this的指向

![image-20200505170113924](JavaScript高级.assets/image-20200505170113924.png)

在之前的练习中确实有一个实例：就是函数的调用，

可以通过 func.call()；方法来调用函数，类似于func();

所以在这里可以知道的是，函数在改变其内部的this的指向的时候，同时函数自身也在被调用状态。



![image-20200505170155858](JavaScript高级.assets/image-20200505170155858.png)





#### 2. apply方法

![image-20200503153053162](JavaScript高级.assets/image-20200503153053162.png)





![image-20200505170406959](JavaScript高级.assets/image-20200505170406959.png)





![image-20200505170721838](JavaScript高级.assets/image-20200505170721838.png)







![image-20200505170834284](JavaScript高级.assets/image-20200505170834284.png)





![image-20200505170926637](JavaScript高级.assets/image-20200505170926637.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var arr = [1,67.34,90,67,8,90,116]
        // 求数组的最大值
        var max1 = Math.max.apply(null,arr);
        console.log(max1);
        var max2 = Math.max.apply(Math,arr);
        console.log(max2);
    </script>
</body>
</html>
~~~



![image-20200508213042680](JavaScript高级.assets/image-20200508213042680.png)



#### 3. bind方法

![image-20200503153135290](JavaScript高级.assets/image-20200503153135290.png)

**注意bind方法不会执行调用函数，这是它与call()和apply()最大的区别**

**也就是他会返回一个原函数的拷贝，而不是原函数的执行结果的返回值**



![image-20200505171421822](JavaScript高级.assets/image-20200505171421822.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var obj = {
            id:'1001',
            name:'smilly',
            age:78
        }
        function func(a,b){
            console.log(this);
            console.log(a + b); 
        }
        // 查看调用bind时是否调用函数
        var newFunc = func.bind(obj,7,8);
        console.log(newFunc);
        console.log(newFunc());
    </script>
</body>
</html>
~~~





![image-20200508214424627](JavaScript高级.assets/image-20200508214424627.png)





##### 3.1 bind应用延时点击样式

![image-20200505181941016](JavaScript高级.assets/image-20200505181941016.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>点击一下</button>
    <script>
        var btn = document.querySelector('button');
        btn.addEventListener('click',function(){
            btn.disabled = true;
            setTimeout(function(){
                this.disabled = false;
            }.bind(this),3000)
        })
    </script>
</body>
</html>
~~~



![image-20200508215824230](JavaScript高级.assets/image-20200508215824230.png)







![image-20200505182214400](JavaScript高级.assets/image-20200505182214400.png)





##### 3.2 bind应用面向对象tab栏目

![image-20200505182717226](JavaScript高级.assets/image-20200505182717226.png)





![image-20200505182835735](JavaScript高级.assets/image-20200505182835735.png)







#### 4. 总结

![image-20200503153254182](JavaScript高级.assets/image-20200503153254182.png)







## 3.严格模式



### 3.1 什么是严格模式

![image-20200503153352281](JavaScript高级.assets/image-20200503153352281.png)



### 3.2 开启严格模式



#### 1. 为脚本开启严格模式

![image-20200503153520398](JavaScript高级.assets/image-20200503153520398.png)



![image-20200503153608113](JavaScript高级.assets/image-20200503153608113.png)

**外部引入的js脚本文件以及内部的js脚本文件，用立即执行函数来处理比较好**



#### 2. 为函数开启严格模式

![image-20200503154217523](JavaScript高级.assets/image-20200503154217523.png)





### 3.3 严格模式中的变化

##### 1. 变量规定

![image-20200503154329707](JavaScript高级.assets/image-20200503154329707.png)





##### 2. 严格模式下this的指向问题

![image-20200503154543082](JavaScript高级.assets/image-20200503154543082.png)



##### 3. 函数的变化

![image-20200503154704976](JavaScript高级.assets/image-20200503154704976.png)





## 4. 高阶函数



![image-20200503154855049](JavaScript高级.assets/image-20200503154855049.png)



## 5. 闭包

### 5.1 变量作用域

![image-20200503154959511](JavaScript高级.assets/image-20200503154959511.png)





### 5.2 什么是闭包

![image-20200503160029812](JavaScript高级.assets/image-20200503160029812.png)



闭包：闭包是一个函数，这个函数能够访问另外一个函数作用域里面的变量，这个函数叫做闭包。

### 5.3 在chrome中调试闭包



![image-20200503160339335](JavaScript高级.assets/image-20200503160339335.png)





![image-20200505185052565](JavaScript高级.assets/image-20200505185052565.png)





![image-20200505185343551](JavaScript高级.assets/image-20200505185343551.png)





### 5.4 闭包的作用

![image-20200503160353993](JavaScript高级.assets/image-20200503160353993.png)





![image-20200505185602762](JavaScript高级.assets/image-20200505185602762.png)





![image-20200505185937888](JavaScript高级.assets/image-20200505185937888.png)





### 5.5 闭包的案例



#### 闭包应用-点击li打印当前的索引号

![image-20200505190749050](JavaScript高级.assets/image-20200505190749050.png)





采用小闭包的做法，也就是立即执行函数的方法创造出一个闭包出来。

![image-20200505191333119](JavaScript高级.assets/image-20200505191333119.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <li>点击1</li>
        <li>点击2</li>
        <li>点击3</li>
        <li>点击4</li>
        <li>点击5</li>
    </ul>
</body>
<script>
    var btns = document.querySelectorAll('li');
    // for(var i = 0;i<btns.length;i++){
    //      // 不采用闭包
    //     btns[i].index = i; // 需要添加一个index属性
    //     btns[i].addEventListener('click',function(){
    //         console.log(this.index);
    //     })
    // }
    for(var i = 0;i<btns.length;i++){
         // 采用小闭包
         (function(i){
            btns[i].addEventListener('click',function(){
            console.log(i);
        })
         })(i)
    }
</script>
</html>
~~~







#### 闭包应用-3S后打印li里面的内容

![image-20200505215720436](JavaScript高级.assets/image-20200505215720436.png)





~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <li>内容1</li>
        <li>内容2</li>
        <li>内容3</li>
        <li>内容4</li>
        <li>内容5</li>
        <li>内容6</li>
    </ul>
</body>
<script>
    var lis = document.querySelectorAll('li');
    for(var i = 0;i<lis.length;i++){
        (function(i){
            setTimeout(function(){
            console.log(lis[i].innerHTML);
        },1000)
        })(i)
    }
</script>
</html>
~~~





#### 闭包应用-计算打车价格



![image-20200505220116594](JavaScript高级.assets/image-20200505220116594.png)





![image-20200505220358565](JavaScript高级.assets/image-20200505220358565.png)





![image-20200505220503167](JavaScript高级.assets/image-20200505220503167.png)



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
    var calculateTaxiFare = (function(){
        var startPrice = 13;// 起步价
        var totalPrice = 0;// 总价0
        return {
            regularPrice:function(n){ // n为公里数
               if(n<3){ // 如果距离小于13公里
                totalPrice = startPrice;
               } else {
                totalPrice = (n-3)*5 + startPrice;
               }
               return totalPrice;
            },
            congestionPrice:function(flag){
                return flag ? totalPrice + 10 : totalPrice;
            }
        }
    })()
    console.log(calculateTaxiFare.regularPrice(5));// 23;
    console.log(calculateTaxiFare.congestionPrice(true));// 33
    console.log(calculateTaxiFare.regularPrice(1));//13
    console.log(calculateTaxiFare.congestionPrice(false));//13
</script>
</html>
~~~







![image-20200503160517259](JavaScript高级.assets/image-20200503160517259.png)



### 5.6 闭包总结

![image-20200503160606017](JavaScript高级.assets/image-20200503160606017.png)



### 5.7 思考题

![image-20200505221025896](JavaScript高级.assets/image-20200505221025896.png)



![image-20200505221142173](JavaScript高级.assets/image-20200505221142173.png)





![image-20200505221216892](JavaScript高级.assets/image-20200505221216892.png)



![image-20200505221442432](JavaScript高级.assets/image-20200505221442432.png)





## 6. 递归



### 6.1 什么是递归

![image-20200503160643713](JavaScript高级.assets/image-20200503160643713.png)

**如果一个函数在其内部调用自身，那么这个函数就是递归函数**

**注意栈溢出，所以必须要加结束条件**



![image-20200509134845751](JavaScript高级.assets/image-20200509134845751.png)



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
    // 递归函数
    var num = 1;
    function func(){
        // 执行操作
        console.log('打印六次');
        if(num === 6){
            return 
        }
        num ++; // 注意要把判断递归结束的条件放在递归执行的前面否则不起效果
        func();
    }
    func();
</script>
</html>
~~~





![image-20200510104037304](JavaScript高级.assets/image-20200510104037304.png)







### 6.2 利用递归求数学题

![image-20200503160728132](JavaScript高级.assets/image-20200503160728132.png)



#### 1.求1*2\*3...\*n的阶层

![image-20200509135519488](JavaScript高级.assets/image-20200509135519488.png)



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
    // 利用递归求n的阶层
    function factorial(n){
        if(n==1){
            return 1;
        }
        return  n*factorial(n-1);
    }
    console.log(factorial(5));
    console.log(factorial(10));
</script>
</html>
~~~



![image-20200510105127762](JavaScript高级.assets/image-20200510105127762.png)





#### 2.利用递归求斐波那契数列

![image-20200509135819268](JavaScript高级.assets/image-20200509135819268.png)



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
    function fibonacciSequence(n){
        if(n==1 || n==2){
            return 1;
        }
        return fibonacciSequence(n-1) + fibonacciSequence(n-2);
    }
    console.log(fibonacciSequence(1));
    console.log(fibonacciSequence(2));
    console.log(fibonacciSequence(3));
    console.log(fibonacciSequence(4));
    console.log(fibonacciSequence(5));
    console.log(fibonacciSequence(6));
    console.log(fibonacciSequence(7));
    console.log(fibonacciSequence(8));
    console.log(fibonacciSequence(9));
    console.log(fibonacciSequence(10));
</script>
</html>
~~~





![image-20200510105902489](JavaScript高级.assets/image-20200510105902489.png)





### 6.3 利用递归求：根据id返回对应的数据对象

![image-20200503160822348](JavaScript高级.assets/image-20200503160822348.png)





![image-20200509140038413](JavaScript高级.assets/image-20200509140038413.png)





![image-20200509140721855](JavaScript高级.assets/image-20200509140721855.png)





![image-20200509141350296](JavaScript高级.assets/image-20200509141350296.png)







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
    // 定义一个复杂对象
    var arr = [{
        id:"1001",
        name:'smilly',
        hobbies:[{
            id:'1',
            name:'baseball'
        },{
            id:'2',
            name:'playfootball'
        },{
            id:'3',
            name:'basketball'
        }]
    },{
        id:'1002',
        name:'alice1002',
        dosomething:[{
            id:'90',
            name:'piano'
        },{
            id:'100',
            name:'flySket'
        }]
    },{
        id:'1003',
        name:'alice1003',
        dohouseWord:[{
            id:'901',
            name:'piano1003'
        },{
            id:'1000',
            name:'flySket1003'
        }]
    },{
        id:'1004',
        name:'alice1004',
        friends:[{
            id:'910',
            name:'piano1004'
        },{
            id:'1100',
            name:'flySket1004'
        }]
    }]
    // 根据id查找指定的项目
    function getByID(target,id){
        // 遍历数组对象
        target.forEach(function(item){
            // 遍历对象所有的属性
            for(var k in item){
                // 判断对象是否具有id属性
                if(k === 'id' && item.id === id){
                    console.log(item);
                    // 判断对象的属性值有没有数组，如果有就继续遍历，没有则跳过。
                    } else if( Array.isArray(item[k])  && item[k].length > 0){
                        getByID(item[k],id)
                    }
            }
        })
    }
    getByID(arr,'901');
</script>
</html>
~~~









### 6.4 浅拷贝和深拷贝

![image-20200503160920728](JavaScript高级.assets/image-20200503160920728.png)



#### Object.assign()方法



#### 浅拷贝

![image-20200509142518246](JavaScript高级.assets/image-20200509142518246.png)





![image-20200509142625334](JavaScript高级.assets/image-20200509142625334.png)





![image-20200509143455362](JavaScript高级.assets/image-20200509143455362.png)



~~~javascript
var arr = [{
    id:"1001",
    name:'smilly',
    hobbies:[{
        id:'1',
        name:'baseball'
    },{
        id:'2',
        name:'playfootball'
    },{
        id:'3',
        name:'basketball'
    }]
},{
    id:'1002',
    name:'alice1002',
    dosomething:[{
        id:'90',
        name:'piano'
    },{
        id:'100',
        name:'flySket'
    }]
},{
    id:'1003',
    name:'alice1003',
    dohouseWord:[{
        id:'901',
        name:'piano1003'
    },{
        id:'1000',
        name:'flySket1003'
    }]
},{
    id:'1004',
    name:'alice1004',
    friends:[{
        id:'910',
        name:'piano1004'
    },{
        id:'1100',
        name:'flySket1004'
    }]
}]

//深拷贝 arr
function deepCopy(resource,target){
        // 遍历对象
        for(var index in resource){
        // 判断对象的属性值类型
        if(Array.isArray(resource[index]) && resource[index].length > 0){
            // 属性值为数组
            target[index] = [];
            deepCopy(resource[index],target[index])
        } else if(target[index] instanceof Object){
            // 属性值为对象
            target[index] = {}
            deepCopy(resource[index] , target[index])
        } else {
            // 属性值为普通类型
            target[index] = resource[index]
        }
        }
}
var obj1 = arr;
var obj2 = [];
deepCopy(obj1,obj2);
console.log(obj1);
console.log("------------------------------------------------------------------");
console.log(obj2);

~~~













## 补充：typeof与instanceof区别



### typeof

用于判断数据类型，返回值为6个字符串，分别为`string`、`Boolean`、`number`、`function`、`object`、undefined。

```jsx
  var a = [34,4,3,54],
        b = 34,
        c = 'adsfas',
        d = function(){console.log('我是函数')},
        e = true,
        f = null,
        g;

        console.log(typeof(a));//object
        console.log(typeof(b));//number
        console.log(typeof(c));//string
        console.log(typeof(d));//function
        console.log(typeof(e));//boolean
        console.log(typeof(f));//object
        console.log(typeof(g));//undefined
```



**但是你可能会发现，`typeof`在判断`null`、`array`、`object`以及函数实例`（new + 函数）`时，得到的都是`object`。这使得在判断这些数据类型的时候，得不到真是的数据类型。由此引出`instanceof`。**

**注意关键字：typeof无法对**

**array,**

**null,**

**object ,**

**new 构造函数,**

**做判断，因为他们统一都返回object，所以才引入instanceof方式**

### instanceof

instance中文翻译为实例，因此instanceof的含义就不言而喻，判断该对象是谁的实例，同时我们也就知道instanceof是对象运算符。
 这里的实例就牵扯到了对象的继承，它的判断就是根据原型链进行搜寻，在对象obj1的原型链上如果存在另一个对象obj2的原型属性，那么表达式（obj1 instanceof obj2）返回值为true；否则返回false。

### 总结：

想必到这里大家也都明白两者的含义和用法，总之，typeof和instanceof都是用来判断变量类型的，两者的区别在于：

- typeof判断所有变量的类型，返回值有number，boolean，string，function，object，undefined。
- typeof对于丰富的对象实例，只能返回"Object"字符串。
- instanceof用来判断对象，代码形式为obj1 instanceof obj2（obj1是否是obj2的实例），obj2必须为对象，否则会报错！其返回值为布尔值。
- instanceof可以对不同的对象实例进行判断，判断方法是根据对象的原型链依次向下查询，如果obj2的原型属性存在obj1的原型链上，（obj1 instanceof obj2）值为true。

在javascript中，判断一个变量的类型可以用typeof

　　(1) 数字类型、typeof返回的值是number。比如说：typeof(1)，返回值是number

　　(2) 字符串类型，typeof返回的值是string。比如typeof(“123”返回值时string)

　　(3) 布尔类型，typeof返回的值是boolean。比如typeof(true)返回值时boolean

　　(4) 对象、数组、null返回的值是object。比如typeof(window)，typeof(document)，typeof(null)返回的值都是object

　　(5) 函数类型，返回的值是function。比如：typeof(eval)，typeof(Date)返回的值都是function。

　　(6) 不存在的变量、函数或者undefined，将返回undefined。比如：typeof(abc)、typeof(undefined)都返回undefined

 

在javascript中，instanceof用于判断某个对象是否被另一个函数构造。

使用typeof运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，它都返回”object”。ECMAScript引入了另一个Java运算符instanceof来解决这个问题。Instanceof运算符与typeof运算符相似，用于识别正在处理的对象的类型。与typeof方法不同的是，instanceof方法要求开发者明确地确认对象为某特定类型





**JS中会使用typeof 和 instanceof来判断一个变量是否为空或者是什么类型的。**

ES6规范中有7种数据类型，分别是基本类型和引用类型两大类

基本类型（简单类型、原始类型）：String、Number、Boolean、Null、Undefined、Symbol

引用类型（复杂类型）：Object（对象、Function、Array）

1、**typeof**返回结果是该类型的字符串形式表示【6】（number、string、undefined、boolean、function、object）

**注意**

- typeof对于原始类型来说，除了null都可以显示正确类型
- typeof对于对象来说，除了函数都会显示object

2、**instanceof**是用来判断 A 是否为 B 的实例，表达式为：A instanceof B，如果 A 是 B 的实例，则返回 true,否则返回 false。 在这里需要特别注意的是：instanceof 检测的是原型。 



~~~java
[] instanceof Array; //true
{} instanceof Object;//true
new Date() instanceof Date;//true
 
function Person(){};
new Person() instanceof Person;
 
[] instanceof Object; //true
new Date() instanceof Object;//true
new Person instanceof Object;//true
~~~

　

​    但是instanceof可以判断出[]是Array的实例，同时也认为是Object的实例，Why？？？？

​    **instanceof 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。**

​    之后增加了**Array.isArray()**方法判断这个值是不是数组的。

总结一下：

1、typeof能够检测出了null之外的原型类型（String、Number、Boolean、Undefined），对于对象类型能判断出function、其他的都为Object

2、判断一个值是否为数组，使用Array.isArray()

3、如果需要判断一个值是否为null，最直接就是与null比较

```javascript
value === null;    //true or false
```

注意这里需要三等号操作符“===”，因为三等号操作符在进行比较的时候不会将变量强制转换为另一种类型。

由此可见，无论是typeof还是instanceof都不能准确判断出正确的类型。



