内容概要

## HTML元素-html元素的lang属性

## HTML元素-head元素的嵌套元素

- meta元素（也就是元数据，也就是用来说明数据的数据，一般而言，用来设置charset属性）

  ~~~html
  <meta charset = 'zh-Ch'></meta>
  ~~~

- title元素（用来设置网页标题的元素）

  ~~~html
  <title>浏览器顶部网页的内容</title>
  ~~~

- 

- ![image-20200420205149566](HTML元素的补充笔记.assets/image-20200420205149566.png)



![image-20200420205449765](HTML元素的补充笔记.assets/image-20200420205449765.png)





- link元素（一般用来设置引入css文件/或者用来设置浏览器顶部网页的内容的图标）

  - link引入外部css文件

    ~~~html
    <link rel="stylesheet" href="css文件路径">
    ~~~

  - link引入网页标题左边的小图标

    ~~~html
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    href引入图片的地址 type属性可有可无，主要的作用是为了适配不同的浏览器环境快捷键
    ~~~

![1584262372631](D:\documents\Typora\HTML元素的补充笔记.assets\1584262372631.png)

## 快捷键

+ ctrl +enter：自动切入下一行

+ alt+shift+向下箭头：自动向下复制一行
+ 一次选中多个内容
  + alt +鼠标点击
  + alt+shift +鼠标拖动

## URL/SEO优化

+ SEO，全称为search engineer optimization，搜索引擎优化，其中h元素有利于搜索引擎优化，也就是在百度搜索中关键字排名靠前，但是通常只会有一个h1标签，如果一个页面存在多个h1标签，会被k掉

## 字符实体

~~~html
<h1 title="我是一段&quot;特殊的文本&quot;,非常的&apos;精彩&apos;">hello world</h1>
~~~

## a元素的补充知识

+ 锚点的使用 id属性   href=#id

  ~~~html
  <a href="#title"></a>
  <div id="title">
      跳到位置
  </div>
  ~~~

+ a元素的href属性的补充

  ~~~html
  <a href="">回到顶部</a>
  <a href="#">回到顶部</a>
  a元素不能不设置href属性，否则会变成text文本
  如果设置了URL则跳转到响应的页面，如果设置了锚点，则跳转到当前页面相应的位置
  ~~~

  

+ a元素的伪链接

  ~~~html
  <a href="javascript:alert('hello world')">伪链接</a>
  当点击a标签的时候，不会发生跳转，而是弹出提示框 'hello world'
  <a href="" onclick="alert('hello world')">伪链接</a>
  换用这种方式也可以实现弹窗效果，而且此时href=""没有展示出它原本的效果，也就是回到顶部的效果
  ~~~

+ a元素与img元素的结合

  ~~~html
  <a href="https:www.baidu.com">
      <img src="图片地址" alt="">
  </a>
  点击图片跳转相应地址
  ~~~

  

+ a元素可以用来下载资源以及发送邮件

  ~~~html
  <a href="资源下载链接">点击下载</a> 该资源下载链接为迅雷地址或者其他的资源链接地址
  <a href="mailto:123456789@qq.com">点击跳转邮箱发送</a>
  ~~~

  
  
  ![image-20200420210815828](HTML元素的补充笔记.assets/image-20200420210815828.png)



​      ![image-20200420211106334](HTML元素的补充笔记.assets/image-20200420211106334.png)







## URL==》input

<img src="C:\Users\zhou_\Desktop\typeraImg\1584200223510.png" alt="1584200223510" style="zoom:200%;" />

+ 认识URL

  URL全称为uniform resource locator(统一资源定位符)

  URL就是资源的位置，地址，互联网上的每一个资源都有唯一的地址

  ![1584200746649](C:\Users\zhou_\AppData\Roaming\Typora\typora-user-images\1584200746649.png)

  ![1584200840919](C:\Users\zhou_\AppData\Roaming\Typora\typora-user-images\1584200840919.png)

  ![1584201080317](C:\Users\zhou_\AppData\Roaming\Typora\typora-user-images\1584201080317.png)

## 认识css

![1584202203597](C:\Users\zhou_\AppData\Roaming\Typora\typora-user-images\1584202203597.png)

+ 全称：层叠样式表 Cascading Style Sheets

+ 发展：

  ![1584202410078](C:\Users\zhou_\AppData\Roaming\Typora\typora-user-images\1584202410078.png)



## css的写法

![1584203620651](D:\documents\Typora\HTML元素的补充笔记.assets\1584203620651.png)

![1584203875030](D:\documents\Typora\HTML元素的补充笔记.assets\1584203875030.png)

## CSS文件编码以及import引入

一般而言，当采用css外部样式表引入的时候 css的属性值可能为中文，例如

stylesheet.css文件

~~~html
div{
font-family:'华文宋体'
}
~~~

在有些浏览中可能造成乱码，此时该css设置的属性样式没有效果

一般而言采用在stylesheet.css文件的顶部标记字符编码格式作为处理

~~~
@charset 'utf-8';
~~~

![1584257603249](D:\documents\Typora\HTML元素的补充笔记.assets\1584257603249.png)

此外，对于采用了外部样式表引入css的方式的话除了liink标签引入之外，还有import方法引入

~~~html
<style>
    @import url('外部样式表相对路径') // 此处既可以采用本地的外部样式表，同时也可以采用http方式从网络中引入外部样式表
</style>
~~~

![1584259200280](D:\documents\Typora\HTML元素的补充笔记.assets\1584259200280.png)

此外还可以在外部样式表中引入其他的外部样式表

在stylesheet.css中直接引入base.css

~~~html
@import url('./base.css')
~~~



![1584259316652](D:\documents\Typora\HTML元素的补充笔记.assets\1584259316652.png)

![1584259559263](D:\documents\Typora\HTML元素的补充笔记.assets\1584259559263.png)

## css选择器

![1584259773724](D:\documents\Typora\HTML元素的补充笔记.assets\1584259773724.png)

### 通用选择器

![1584260220544](D:\documents\Typora\HTML元素的补充笔记.assets\1584260220544.png)

### 元素选择器

![1584260484372](D:\documents\Typora\HTML元素的补充笔记.assets\1584260484372.png)

### 类选择器

![1584261108799](D:\documents\Typora\HTML元素的补充笔记.assets\1584261108799.png)

![1584261762955](D:\documents\Typora\HTML元素的补充笔记.assets\1584261762955.png)

### id选择器

开发经验优化设置

![1584261426290](D:\documents\Typora\HTML元素的补充笔记.assets\1584261426290.png)

![1584261573866](D:\documents\Typora\HTML元素的补充笔记.assets\1584261573866.png)

![1584261890157](D:\documents\Typora\HTML元素的补充笔记.assets\1584261890157.png)

## CSS常见的属性

![1584263086203](D:\documents\Typora\HTML元素的补充笔记.assets\1584263086203.png)

color:前景色（一般用来设置字体颜色）

background-color:背景色

![1584263443220](D:\documents\Typora\HTML元素的补充笔记.assets\1584263443220.png)

![1584263484028](D:\documents\Typora\HTML元素的补充笔记.assets\1584263484028.png)

![1584264033919](D:\documents\Typora\HTML元素的补充笔记.assets\1584264033919.png)

采用tab键入进行输入

![1584264130130](D:\documents\Typora\HTML元素的补充笔记.assets\1584264130130.png)

outline:属性，非常有辅助型的属性用来划分布局



## 颜色空间RGB

![1584264283320](D:\documents\Typora\HTML元素的补充笔记.assets\1584264283320.png)

此处的快捷语法为element语法，在接下来的时候，会作相应的介绍

![1584368684074](D:\documents\Typora\HTML元素的补充笔记.assets\1584368684074.png)

![1584368762904](D:\documents\Typora\HTML元素的补充笔记.assets\1584368762904.png)

![1584368845573](D:\documents\Typora\HTML元素的补充笔记.assets\1584368845573.png)

此处的简略写法与认知的不同，三位代码与六位代码的区别，要做好区分

![1584369023185](D:\documents\Typora\HTML元素的补充笔记.assets\1584369023185.png)

RGBA最后一位的透明属性

## CSS文本属性

### text-decoration

![1584369692771](D:\documents\Typora\HTML元素的补充笔记.assets\1584369692771.png)

u，ins元素没有使用过，估计是不常用的标签元素

### letter-spacing,word-spacing

![1584370077933](D:\documents\Typora\HTML元素的补充笔记.assets\1584370077933.png)

letter-spacing:设置字母的间距（对中英文均起作用）

word-spacing:设置单词的间距（对英文起作用，对中文不起作用）

此处作一个补充

![1584369974650](D:\documents\Typora\HTML元素的补充笔记.assets\1584369974650.png)

![1584369945832](D:\documents\Typora\HTML元素的补充笔记.assets\1584369945832.png)

### text-transform

![1584370211714](D:\documents\Typora\HTML元素的补充笔记.assets\1584370211714.png)

text-transform属性：用来设置英文的大小写形式，不常用

### text-indent

![1584370749522](D:\documents\Typora\HTML元素的补充笔记.assets\1584370749522.png)

text-indent属性：用来设置文档的首行缩进，比较常用在文本格式中

### text-align

![1584371472246](D:\documents\Typora\HTML元素的补充笔记.assets\1584371472246.png)

此处的元素内容既包括元素标签比如img,以及所有的display:inline-block的元素，也单纯的只包含文本，对于被span也就是display:inline的元素也能起到作用，但是对于display:blcok元素，不能起到作用，例如div元素就无效果

![1584371197885](D:\documents\Typora\HTML元素的补充笔记.assets\1584371197885.png)

![1584371399528](D:\documents\Typora\HTML元素的补充笔记.assets\1584371399528.png)

![1584371573262](D:\documents\Typora\HTML元素的补充笔记.assets\1584371573262.png)

复习补充：

text-align:justify该属性可以让文字两边对齐，在开发中经常遇到文字没有铺满就换行了，可以使用此方法

当然，text-align属性也可以适用于display:inline-block属性的标签，让标签左对齐，右对齐，居中对齐，两边对齐。例如上面的图片 就是默认的display:inline-block，所以text-align才会对该标签起效果，当然对于display:block就没有效果了。

另外还要注意display的值inline，inline-block，与block的区别

inline没有width与height属性，其宽度和高度全靠内容撑开，例如span元素就是默认display:inline的，且不单独占据一行

blcok可以设置width与height属性，且独占一行

inline-block兼具以上二者的特点，既可以设置width与height属性，且不独占一行

##  CSS字体属性

### font-size

![1584453973438](D:\documents\Typora\HTML元素的补充笔记.assets\1584453973438.png)

![1584453831280](D:\documents\Typora\HTML元素的补充笔记.assets\1584453831280.png)

### font-family

![1584454579071](D:\documents\Typora\HTML元素的补充笔记.assets\1584454579071.png)

![1584454711351](D:\documents\Typora\HTML元素的补充笔记.assets\1584454711351.png)

![1584454869331](D:\documents\Typora\HTML元素的补充笔记.assets\1584454869331.png)

**注意此处在开发中经常遇到的问题，一般而言，还是添加双引号或者单引号比较好**

***

### font-weight

![1584455012004](D:\documents\Typora\HTML元素的补充笔记.assets\1584455012004.png)

### font-style

![1584455277131](D:\documents\Typora\HTML元素的补充笔记.assets\1584455277131.png)

![1584455571835](D:\documents\Typora\HTML元素的补充笔记.assets\1584455571835.png)

![1584455755150](D:\documents\Typora\HTML元素的补充笔记.assets\1584455755150.png)

### font-variant

![1584456490426](D:\documents\Typora\HTML元素的补充笔记.assets\1584456490426.png)

![1584456674218](D:\documents\Typora\HTML元素的补充笔记.assets\1584456674218.png)

![1584456615472](D:\documents\Typora\HTML元素的补充笔记.assets\1584456615472.png)

### line-height

![1584456972093](D:\documents\Typora\HTML元素的补充笔记.assets\1584456972093.png)

一行文字所占据的高度等于行高的定义，也就是两行文字基线的高度，所以可以说名行高简单理解为一行文字所占据的高度



![1584457556093](D:\documents\Typora\HTML元素的补充笔记.assets\1584457556093.png)

![1584457814042](D:\documents\Typora\HTML元素的补充笔记.assets\1584457814042.png)

**注意此处的line-height:元素中的每一行文字所占据的高度与我们日常理解的文字所占据的高度有些出入，此处的一行文字所占据的高度，明显要比肉眼的文字高度要大一些，所以此处有一个问题**

1. 每一行文字所占据的高度：字面意思：文字的高度

2. 实际意思，文字所占据的高度：两行文字的基线的距离，也就是line-height，也就是行高。

3. 也就是行高在数值上===一行文字所占据的高度=== 两行文字基线之间的距离（严格定义）

   此处有一个问题，就是为什么line-height只是针对的单行文本垂直居中的问题有一些疑惑的问题,一行文字如何确定两行文字基线的距离？

### font

![1584458283532](D:\documents\Typora\HTML元素的补充笔记.assets\1584458283532.png)



![1584458444548](D:\documents\Typora\HTML元素的补充笔记.assets\1584458444548.png)

这个属性应用的应该比较少，值的排序比较的复杂

## css复杂选择器

### 属性选择器：

#### [title]



![1584458874788](D:\documents\Typora\HTML元素的补充笔记.assets\1584458874788.png)

#### [title='one']

![1584458934413](D:\documents\Typora\HTML元素的补充笔记.assets\1584458934413.png)

备注一下关于此处的one值是否需要添加引号的问题，可以看到关于title属性的属性值是否添加双引号或者单引号亦或者什么都不添加，此处均可以自由表示

#### [attr*=val]

![1584459128168](D:\documents\Typora\HTML元素的补充笔记.assets\1584459128168.png)

#### [attr^=val]

![1584459171143](D:\documents\Typora\HTML元素的补充笔记.assets\1584459171143.png)

#### [attr|=val]

![1584459300896](D:\documents\Typora\HTML元素的补充笔记.assets\1584459300896.png)

#### [attr~=val]

![1584459438369](D:\documents\Typora\HTML元素的补充笔记.assets\1584459438369.png)

此处可以使用类选择器，但是可以知道类也是元素的一个属性，所以此处也可以用属性选择器表示，此处的效果一致

#### [attr$=val]

![1584459576614](D:\documents\Typora\HTML元素的补充笔记.assets\1584459576614.png)

### 后代选择器(空格)

![1584459678456](D:\documents\Typora\HTML元素的补充笔记.assets\1584459678456.png)

***后代选择器，顾名思义就是选择后代的元素，与其他作区分，父亲包括儿子，孙子，曾孙。。。。所有的子节点，孙子节点，子节点。此选择器较为常用，为最重要的选择器***



![1584459862767](D:\documents\Typora\HTML元素的补充笔记.assets\1584459862767.png)

### 子选择器(>)

![1584459970006](D:\documents\Typora\HTML元素的补充笔记.assets\1584459970006.png)

![1584460643082](D:\documents\Typora\HTML元素的补充笔记.assets\1584460643082.png)

### P标签与div标签的bug

![1584460394293](D:\documents\Typora\HTML元素的补充笔记.assets\1584460394293.png)

**p标签里面不能嵌套div标签，否则会造成元素位置混乱，具体结果如上图所示**



### 相邻兄弟选择器(+)

![1584460744923](D:\documents\Typora\HTML元素的补充笔记.assets\1584460744923.png)

**注意：相邻兄弟选择器只能选择在其之后的兄弟而且必须紧挨着**

**所有的兄弟选择器都有一个前提，那就是只能选择在其下面的兄弟，在其上面的兄弟无法选择**



### 全体兄弟选择器(~)

![1584460884130](D:\documents\Typora\HTML元素的补充笔记.assets\1584460884130.png)

**所有符合条件的并列的兄弟元素，也仅限于在其后面所有的符合条件的**

**同样也符合选中的必须在其下面的兄弟，这一前提**



### 组合选择器

![1584461008303](D:\documents\Typora\HTML元素的补充笔记.assets\1584461008303.png)

#### 交集选择器

![1584461235022](D:\documents\Typora\HTML元素的补充笔记.assets\1584461235022.png)

交集选择器比较特殊，其选择器位置可以自由排序，比较符合交集的特点，没有空格什么的。当然要注意排列不要混淆了。例如写成 .onediv[title='test']这种形式就直接混淆了。

#### 并集选择器

![1584461466504](D:\documents\Typora\HTML元素的补充笔记.assets\1584461466504.png)

![1584461581868](D:\documents\Typora\HTML元素的补充笔记.assets\1584461581868.png)

## 伪类和伪元素 

### 伪类

![1584691892260](D:\documents\Typora\HTML元素的补充笔记.assets\1584691892260.png)

#### 目标伪类 :target

![41584692133863](D:\documents\Typora\HTML元素的补充笔记.assets\1584692133863.png)

![1584692219672](D:\documents\Typora\HTML元素的补充笔记.assets\1584692219672.png)

![1584692245989](D:\documents\Typora\HTML元素的补充笔记.assets\1584692245989.png)

:target伪类，对应的点击跳转到对应的元素之后，目标元素的样式发生变化，例如点击标题3之后，对应div的字体变红色。

#### 元素状态伪类

![1584692490988](D:\documents\Typora\HTML元素的补充笔记.assets\1584692490988.png)

#### 动态伪类

##### :link

##### :visited

##### :hover

##### :active

![1584692969290](D:\documents\Typora\HTML元素的补充笔记.assets\1584692969290.png)

![1584692849718](D:\documents\Typora\HTML元素的补充笔记.assets\1584692849718.png)

![1584692819241](D:\documents\Typora\HTML元素的补充笔记.assets\1584692819241.png)

![1584693052455](D:\documents\Typora\HTML元素的补充笔记.assets\1584693052455.png)

strong元素鼠标悬浮变成紫色。

![1584693083604](D:\documents\Typora\HTML元素的补充笔记.assets\1584693083604.png)

![1584693179631](D:\documents\Typora\HTML元素的补充笔记.assets\1584693179631.png)

此处因该为单击不松开鼠标。

![1584693207303](D:\documents\Typora\HTML元素的补充笔记.assets\1584693207303.png)

##### :focus

![1584693345587](D:\documents\Typora\HTML元素的补充笔记.assets\1584693345587.png)

![1584693540767](D:\documents\Typora\HTML元素的补充笔记.assets\1584693540767.png)

![1584693673910](D:\documents\Typora\HTML元素的补充笔记.assets\1584693673910.png)

![1584694509745](D:\documents\Typora\HTML元素的补充笔记.assets\1584694509745.png)

![1584694894603](D:\documents\Typora\HTML元素的补充笔记.assets\1584694894603.png)

此处是一个需要注意的点，以防止出错。可以知道经常给a标签设置text-decoration:none用于去除下划线，是否意味着a标签的所有的动态伪类也会去除下划线，在实际中貌似也是这样的。

#### 结构伪类

##### :nth-child()

![1584696985440](D:\documents\Typora\HTML元素的补充笔记.assets\1584696985440.png)

![1584697018191](D:\documents\Typora\HTML元素的补充笔记.assets\1584697018191.png)

![1584697084829](D:\documents\Typora\HTML元素的补充笔记.assets\1584697084829.png)

![1584695152788](D:\documents\Typora\HTML元素的补充笔记.assets\1584695152788.png)

![1584695129048](D:\documents\Typora\HTML元素的补充笔记.assets\1584695129048.png)

![1584695278031](D:\documents\Typora\HTML元素的补充笔记.assets\1584695278031.png)

![1584695343849](D:\documents\Typora\HTML元素的补充笔记.assets\1584695343849.png)

![1584695432900](D:\documents\Typora\HTML元素的补充笔记.assets\1584695432900.png)

![1584695504710](D:\documents\Typora\HTML元素的补充笔记.assets\1584695504710.png)

![1584695563004](D:\documents\Typora\HTML元素的补充笔记.assets\1584695563004.png)

![1584695774418](D:\documents\Typora\HTML元素的补充笔记.assets\1584695774418.png)

![1584695914190](D:\documents\Typora\HTML元素的补充笔记.assets\1584695914190.png)

![1584696067379](D:\documents\Typora\HTML元素的补充笔记.assets\1584696067379.png)

**此处可以针对排行榜的前几名单独设置一个样式，n=0,n=1,-n=-1，可以预见当nth-child(val)中的val为一个0或者为负数的时候，此时nth-child(val)无效。**



![1584696103781](D:\documents\Typora\HTML元素的补充笔记.assets\1584696103781.png)

![1584696297740](D:\documents\Typora\HTML元素的补充笔记.assets\1584696297740.png)

![1584696720783](D:\documents\Typora\HTML元素的补充笔记.assets\1584696720783.png)

##### :nth-last-child()

![1584697262625](D:\documents\Typora\HTML元素的补充笔记.assets\1584697262625.png)

![1584696914621](D:\documents\Typora\HTML元素的补充笔记.assets\1584696914621.png)

##### :nth-of-type()

![1584716528154](D:\documents\Typora\HTML元素的补充笔记.assets\1584716528154.png)

![1584716642349](D:\documents\Typora\HTML元素的补充笔记.assets\1584716642349.png)

![1584716819533](D:\documents\Typora\HTML元素的补充笔记.assets\1584716819533.png)

![1584717043303](D:\documents\Typora\HTML元素的补充笔记.assets\1584717043303.png)

##### :nth-last-of-type()

![1584717185636](D:\documents\Typora\HTML元素的补充笔记.assets\1584717185636.png)

![1584717431697](D:\documents\Typora\HTML元素的补充笔记.assets\1584717431697.png)

##### :only-child

![1584717639687](D:\documents\Typora\HTML元素的补充笔记.assets\1584717639687.png)



![1584717734588](D:\documents\Typora\HTML元素的补充笔记.assets\1584717734588.png)

![1584717888912](D:\documents\Typora\HTML元素的补充笔记.assets\1584717888912.png)

![1584717949339](D:\documents\Typora\HTML元素的补充笔记.assets\1584717949339.png)

![1584717981495](D:\documents\Typora\HTML元素的补充笔记.assets\1584717981495.png)

##### :only-of-type

![1584718102459](D:\documents\Typora\HTML元素的补充笔记.assets\1584718102459.png)

![1584718154547](D:\documents\Typora\HTML元素的补充笔记.assets\1584718154547.png)

##### 结构伪类小结

![1584718281802](D:\documents\Typora\HTML元素的补充笔记.assets\1584718281802.png)

##### :empty

![1584718445437](D:\documents\Typora\HTML元素的补充笔记.assets\1584718445437.png)

![1584718482228](D:\documents\Typora\HTML元素的补充笔记.assets\1584718482228.png)

![1584718878722](D:\documents\Typora\HTML元素的补充笔记.assets\1584718878722.png)

##### :not()

![1584886201875](D:\documents\Typora\HTML元素的补充笔记.assets\1584886201875.png)

![1584719081960](D:\documents\Typora\HTML元素的补充笔记.assets\1584719081960.png)

![1584719122296](D:\documents\Typora\HTML元素的补充笔记.assets\1584719122296.png)

![1584886331446](D:\documents\Typora\HTML元素的补充笔记.assets\1584886331446.png)

### 伪元素

![1584886453404](D:\documents\Typora\HTML元素的补充笔记.assets\1584886453404.png)

#### ::first-letter

![1584886569983](D:\documents\Typora\HTML元素的补充笔记.assets\1584886569983.png)

![1584886607476](D:\documents\Typora\HTML元素的补充笔记.assets\1584886607476.png)

![1584887006433](D:\documents\Typora\HTML元素的补充笔记.assets\1584887006433.png)

#### ::first-line

![1584886767005](D:\documents\Typora\HTML元素的补充笔记.assets\1584886767005.png)

![1584886794202](D:\documents\Typora\HTML元素的补充笔记.assets\1584886794202.png)

![1584886883315](D:\documents\Typora\HTML元素的补充笔记.assets\1584886883315.png)

#### ::before

![1584887251558](D:\documents\Typora\HTML元素的补充笔记.assets\1584887251558.png)

![1584887334282](D:\documents\Typora\HTML元素的补充笔记.assets\1584887334282.png)

![1584887431067](D:\documents\Typora\HTML元素的补充笔记.assets\1584887431067.png)

![1584887467828](D:\documents\Typora\HTML元素的补充笔记.assets\1584887467828.png)

![1584887530457](D:\documents\Typora\HTML元素的补充笔记.assets\1584887530457.png)

![1584887561487](D:\documents\Typora\HTML元素的补充笔记.assets\1584887561487.png)

![1584887861412](D:\documents\Typora\HTML元素的补充笔记.assets\1584887861412.png)

![1584887931342](D:\documents\Typora\HTML元素的补充笔记.assets\1584887931342.png)

## Element语法

![1584888111499](D:\documents\Typora\HTML元素的补充笔记.assets\1584888111499.png)









![1584888198845](D:\documents\Typora\HTML元素的补充笔记.assets\1584888198845.png)





![1584888352683](D:\documents\Typora\HTML元素的补充笔记.assets\1584888352683.png)

![1584888456399](D:\documents\Typora\HTML元素的补充笔记.assets\1584888456399.png)

![1584888559569](D:\documents\Typora\HTML元素的补充笔记.assets\1584888559569.png)

![1584888649247](D:\documents\Typora\HTML元素的补充笔记.assets\1584888649247.png)



![1584888726435](D:\documents\Typora\HTML元素的补充笔记.assets\1584888726435.png)

![1584888843990](D:\documents\Typora\HTML元素的补充笔记.assets\1584888843990.png)



![1584888913156](D:\documents\Typora\HTML元素的补充笔记.assets\1584888913156.png)



![1584889089935](D:\documents\Typora\HTML元素的补充笔记.assets\1584889089935.png)





![1584889220137](D:\documents\Typora\HTML元素的补充笔记.assets\1584889220137.png)

![1584889253269](D:\documents\Typora\HTML元素的补充笔记.assets\1584889253269.png)

![1584889910978](D:\documents\Typora\HTML元素的补充笔记.assets\1584889910978.png)



![1584889336701](D:\documents\Typora\HTML元素的补充笔记.assets\1584889336701.png)

![1584889364900](D:\documents\Typora\HTML元素的补充笔记.assets\1584889364900.png)



![1584889704984](D:\documents\Typora\HTML元素的补充笔记.assets\1584889704984.png)

![1584889781318](D:\documents\Typora\HTML元素的补充笔记.assets\1584889781318.png)

![1584889858600](D:\documents\Typora\HTML元素的补充笔记.assets\1584889858600.png)





![1584889984338](D:\documents\Typora\HTML元素的补充笔记.assets\1584889984338.png)



![1584890053507](D:\documents\Typora\HTML元素的补充笔记.assets\1584890053507.png)

![1584890097600](D:\documents\Typora\HTML元素的补充笔记.assets\1584890097600.png)



![1584890245087](D:\documents\Typora\HTML元素的补充笔记.assets\1584890245087.png)



![1584890387206](D:\documents\Typora\HTML元素的补充笔记.assets\1584890387206.png)

![1584890471523](D:\documents\Typora\HTML元素的补充笔记.assets\1584890471523.png)







![1584890573925](D:\documents\Typora\HTML元素的补充笔记.assets\1584890573925.png)

![1584890749398](D:\documents\Typora\HTML元素的补充笔记.assets\1584890749398.png)

## CSS的特性



### css的特性-继承特性的解析

![1585233316374](D:\documents\Typora\HTML元素的补充笔记.assets\1585233316374.png)

![1585233224881](D:\documents\Typora\HTML元素的补充笔记.assets\1585233224881.png)

继承的html元素的属性被层叠掉了。

![1585233782984](D:\documents\Typora\HTML元素的补充笔记.assets\1585233782984.png)

此处的MDN查找相应的元素的方式，记住含有关键字以及property。。。这种关键字的链接。

![1585234165708](D:\documents\Typora\HTML元素的补充笔记.assets\1585234165708.png) 

可以通过chrome浏览器直接观察到inherited from div 这种形式

**对于css继承而言，就是文本相关的属性容易被继承。**

**可以使用inherit强制继承，例如下面的width一般是不能继承的，但是可以采用width:inherit来强制继承来自父类的width属性的值**



### inherit强制继承

![1585234070794](D:\documents\Typora\HTML元素的补充笔记.assets\1585234070794.png)

![1585234103151](D:\documents\Typora\HTML元素的补充笔记.assets\1585234103151.png)

### 继承的注意事项

继承为计算之后的值，例如0.5rem必须要经过计算，也就是继承为30px,而不是0.5rem

![1585235052870](D:\documents\Typora\HTML元素的补充笔记.assets\1585235052870.png)

![1585235210556](D:\documents\Typora\HTML元素的补充笔记.assets\1585235210556.png)

此处通过三层嵌套的关系来说明，继承关系继承的是计算值，而不是当初编写属性时的指定值（字面值），可以看到，无论是第三层还是第二层均继承来自第一层的font-size的值

### css的特性-层叠特性的解析

![1585235455333](D:\documents\Typora\HTML元素的补充笔记.assets\1585235455333.png)

![1585235427736](D:\documents\Typora\HTML元素的补充笔记.assets\1585235427736.png)

当然，此处表示的为在相同的选择器情况下，后面的会覆盖前面的选择器属性，就像上面的3个类选择器，最后的一个选择器会覆盖前面的选择器，但是不同的选择器的权重不同，生效的结果也不相同。

### CSS属性的优先级

![1585318921125](D:\documents\Typora\HTML元素的补充笔记.assets\1585318921125.png)

![1585319213569](D:\documents\Typora\HTML元素的补充笔记.assets\1585319213569.png)

此处的比较与预想的比较有所不同，这里将选择器的优先级数量做一个比较，数量多少比较。

### 浏览器自带的样式与继承的样式



![1585319260094](D:\documents\Typora\HTML元素的补充笔记.assets\1585319260094.png)

a元素有浏览器自带的样式所以继承自父元素的css属性被覆盖掉了，P元素标签里面不能够嵌套div元素

![1585319334167](D:\documents\Typora\HTML元素的补充笔记.assets\1585319334167.png)





![image-20200420220423937](HTML元素的补充笔记.assets/image-20200420220423937.png)







## HTML元素-列表

![1585360675272](D:\documents\Typora\HTML元素的补充笔记.assets\1585360675272.png)

![1585360725267](D:\documents\Typora\HTML元素的补充笔记.assets\1585360725267.png)

### 有序列表

![1585360854374](D:\documents\Typora\HTML元素的补充笔记.assets\1585360854374.png)

### 无序列表

![1585360887166](D:\documents\Typora\HTML元素的补充笔记.assets\1585360887166.png)

### 定义列表

![1585360981749](D:\documents\Typora\HTML元素的补充笔记.assets\1585360981749.png)

![1585361067654](D:\documents\Typora\HTML元素的补充笔记.assets\1585361067654.png)

![1585361102790](D:\documents\Typora\HTML元素的补充笔记.assets\1585361102790.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    dl {
      list-style: none;
    }
    dl dt{
      color:#999;
    }
  </style>
</head>
<body>
  <div>
    <h2>配送方式</h2>
    <dl>
      <dt>上门自提</dt>
      <dt>211直达</dt>
      <dt>配送服务查询</dt>
      <dt>配送费收取标准</dt>
      <dt>配送标准</dt>
    </dl>
    <!-- <h2>
      配送方式
    </h2>
    <dl>
      <dt>上门自提</li>
      <li>211直达</li>
      <li>配送服务查询</li>
      <li>配送费收取标准</li>
      <li>配送标准</li>
    </dl> -->
  </div>
</body>
</html>
~~~



### css列表相关属性

#### list-style-type:设置li元素前面标记的样式

![1585361299022](D:\documents\Typora\HTML元素的补充笔记.assets\1585361299022.png)

#### list-style-image:设置某张图片为li元素前面的标记

#### list-style-position:设置li元素前面标记的位置

#### list-style:是前面3个属性的缩写，一般值为none

![1585361397648](D:\documents\Typora\HTML元素的补充笔记.assets\1585361397648.png)

此处的list-style:none,严格来说，就是list-style-type:none，list-style单独一个none值，就是list-style-type:none的简写形式。

![1585361419024](D:\documents\Typora\HTML元素的补充笔记.assets\1585361419024.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>列表练习</title>
  <style>
    a{
      text-decoration:none;
      color:blue;
    }
    ul {
      list-style: none;
    }
    ul li {
      margin-top: 5px;
    }
    ul li span{
      padding:0px 5px;
      margin-right: 8px;
      background-color: #999;
      color:#fff;
    }
    ul li:nth-child(-n+3) span{
      background-color: red !important;
    }
  </style>
</head>
<body>
  <div>
    <ul>
      <li><span>1</span><a href="">OPPO召开首次亚太战略发布会，携手合作伙伴共赢未来</a></li>
      <li><span>2</span><a href="">FCC计划开放更多频段供给5G互联网使用</a></li>
      <li><span>3</span><a href="">5G网络能源消耗巨大？这个方法确实用心了</a></li>
      <li><span>4</span><a href="">持续突破自我 呦蓝范珊珊传授成功密码</a></li>
      <li><span>5</span><a href="">华为在伦敦成立5G研发基地&nbsp;寻找与当地的合作伙伴</a></li>
    </ul>
  </div>
</body>
</html>
~~~



![1585384589994](D:\documents\Typora\HTML元素的补充笔记.assets\1585384589994.png)

![1585384753350](D:\documents\Typora\HTML元素的补充笔记.assets\1585384753350.png)

![1585384839303](D:\documents\Typora\HTML元素的补充笔记.assets\1585384839303.png)

## HTML元素-表格

![1585390978551](D:\documents\Typora\HTML元素的补充笔记.assets\1585390978551.png)

![1585391009579](D:\documents\Typora\HTML元素的补充笔记.assets\1585391009579.png)

![1585391045535](D:\documents\Typora\HTML元素的补充笔记.assets\1585391045535.png)

### table的常用属性

![1585391072118](D:\documents\Typora\HTML元素的补充笔记.assets\1585391072118.png)

#### border：边框的宽度

![1585396498395](D:\documents\Typora\HTML元素的补充笔记.assets\1585396498395.png)

![1585396570924](D:\documents\Typora\HTML元素的补充笔记.assets\1585396570924.png)

#### cellpadding：单元格内部的间距

![1585396746251](D:\documents\Typora\HTML元素的补充笔记.assets\1585396746251.png)

![1585396784793](D:\documents\Typora\HTML元素的补充笔记.assets\1585396784793.png)

#### cellspacing:单元格之间的间距

![1585398995277](D:\documents\Typora\HTML元素的补充笔记.assets\1585398995277.png)

![1585399047558](D:\documents\Typora\HTML元素的补充笔记.assets\1585399047558.png)

#### width:表格的宽度

![1585399112134](D:\documents\Typora\HTML元素的补充笔记.assets\1585399112134.png)

![1585399150661](D:\documents\Typora\HTML元素的补充笔记.assets\1585399150661.png)

#### align: 表格的水平对齐方式

![1585399252776](D:\documents\Typora\HTML元素的补充笔记.assets\1585399252776.png)

![1585399345025](D:\documents\Typora\HTML元素的补充笔记.assets\1585399345025.png)

### tr常用的属性

![1585399611544](D:\documents\Typora\HTML元素的补充笔记.assets\1585399611544.png)

#### valign:单元格的垂直对齐方式

![1585399901307](D:\documents\Typora\HTML元素的补充笔记.assets\1585399901307.png)

![1585399956978](D:\documents\Typora\HTML元素的补充笔记.assets\1585399956978.png)



#### align:单元格的水平对齐方式

![1585400054204](D:\documents\Typora\HTML元素的补充笔记.assets\1585400054204.png)

![1585400102619](D:\documents\Typora\HTML元素的补充笔记.assets\1585400102619.png)

### th,td的常用属性(单独单元格)

![1585400180304](D:\documents\Typora\HTML元素的补充笔记.assets\1585400180304.png)

![1585400398110](D:\documents\Typora\HTML元素的补充笔记.assets\1585400398110.png)

![1585400423805](D:\documents\Typora\HTML元素的补充笔记.assets\1585400423805.png)

![1585400513166](D:\documents\Typora\HTML元素的补充笔记.assets\1585400513166.png)

![1585400539598](D:\documents\Typora\HTML元素的补充笔记.assets\1585400539598.png)

### 细线表格的实现：border-collapse

![1585391197056](D:\documents\Typora\HTML元素的补充笔记.assets\1585391197056.png)border-collapse属性为table的属性。

![1585400833009](D:\documents\Typora\HTML元素的补充笔记.assets\1585400833009.png)

![1585401090763](D:\documents\Typora\HTML元素的补充笔记.assets\1585401090763.png)

![1585401190815](D:\documents\Typora\HTML元素的补充笔记.assets\1585401190815.png)

![1585401237319](D:\documents\Typora\HTML元素的补充笔记.assets\1585401237319.png)

![1585401401699](D:\documents\Typora\HTML元素的补充笔记.assets\1585401401699.png)

以上中table以及tr,th,td的相关属性，处于比较老的版本，在新的w3c标准中已经提及不适合采用这种形式了。在实际的开发中尽量采用style样式表形式修改样式。



### 其他元素

以下元素为对table的补充标签，为了对table的内容进行划分，这样比较清晰，但是也增加了很多的标签，所以在实际的开发中一般都是直接使用table，tr,td再加css样式的形式的。

![1585391302275](D:\documents\Typora\HTML元素的补充笔记.assets\1585391302275.png)

#### tbody:表格主体

![1585470108731](D:\documents\Typora\HTML元素的补充笔记.assets\1585470108731.png)

#### caption:表格的标题

![1585470155608](D:\documents\Typora\HTML元素的补充笔记.assets\1585470155608.png)

![1585470252480](D:\documents\Typora\HTML元素的补充笔记.assets\1585470252480.png)

#### thead表格的表头

![1585470497676](D:\documents\Typora\HTML元素的补充笔记.assets\1585470497676.png)![1585470533477](D:\documents\Typora\HTML元素的补充笔记.assets\1585470533477.png)

#### tfoot表格的页脚

![1585470796318](D:\documents\Typora\HTML元素的补充笔记.assets\1585470796318.png)

![1585470822404](D:\documents\Typora\HTML元素的补充笔记.assets\1585470822404.png)

#### th表格的表头单元格

### 单元格合并



![1585391346059](D:\documents\Typora\HTML元素的补充笔记.assets\1585391346059.png)

#### colspan:合并列

![1585471562875](D:\documents\Typora\HTML元素的补充笔记.assets\1585471562875.png)

![1585471597642](D:\documents\Typora\HTML元素的补充笔记.assets\1585471597642.png)

#### rowspan:合并行

![1585471721653](D:\documents\Typora\HTML元素的补充笔记.assets\1585471721653.png)

![1585471749609](D:\documents\Typora\HTML元素的补充笔记.assets\1585471749609.png)

![1585471852998](D:\documents\Typora\HTML元素的补充笔记.assets\1585471852998.png)

![1585471889515](D:\documents\Typora\HTML元素的补充笔记.assets\1585471889515.png)







![1585391368123](D:\documents\Typora\HTML元素的补充笔记.assets\1585391368123.png)

![1585391386463](D:\documents\Typora\HTML元素的补充笔记.assets\1585391386463.png)

### border-spacing

![1585391483164](D:\documents\Typora\HTML元素的补充笔记.assets\1585391483164.png)

![1585479047709](D:\documents\Typora\HTML元素的补充笔记.assets\1585479047709.png)

![1585479098559](D:\documents\Typora\HTML元素的补充笔记.assets\1585479098559.png)

## HTML元素-表单

### 表单

![1585479224926](D:\documents\Typora\HTML元素的补充笔记.assets\1585479224926.png)

### 常用元素

![1585479260548](D:\documents\Typora\HTML元素的补充笔记.assets\1585479260548.png)

#### input

![1585479330450](D:\documents\Typora\HTML元素的补充笔记.assets\1585479330450.png)

**input为替换元素，类似于img元素，也就是用图片来替换标签内容，不是之前说的行内块元素**

![1585483149358](D:\documents\Typora\HTML元素的补充笔记.assets\1585483149358.png)

![1585483349583](D:\documents\Typora\HTML元素的补充笔记.assets\1585483349583.png)

在实际的开发过程中，不宜采用br来换行，因为不好控制，还有浏览器自动添加的样式，采用div来换行是比较稳妥的方式。

![1585483673459](D:\documents\Typora\HTML元素的补充笔记.assets\1585483673459.png)

![1585483744047](D:\documents\Typora\HTML元素的补充笔记.assets\1585483744047.png)



##### 布尔属性

![1585479373620](D:\documents\Typora\HTML元素的补充笔记.assets\1585479373620.png)

##### 按钮--input

![1585479400787](D:\documents\Typora\HTML元素的补充笔记.assets\1585479400787.png)

##### 按钮--button元素

![1585479475258](D:\documents\Typora\HTML元素的补充笔记.assets\1585479475258.png)

![1585559372803](D:\documents\Typora\HTML元素的补充笔记.assets\1585559372803.png)

![1585559597801](D:\documents\Typora\HTML元素的补充笔记.assets\1585559597801.png)

![1585559649624](D:\documents\Typora\HTML元素的补充笔记.assets\1585559649624.png)

##### input和label

![1585479507949](D:\documents\Typora\HTML元素的补充笔记.assets\1585479507949.png)

![1585560137350](D:\documents\Typora\HTML元素的补充笔记.assets\1585560137350.png)

##### radio使用的注意

![1585479591664](D:\documents\Typora\HTML元素的补充笔记.assets\1585479591664.png)

##### checkbox使用的注意

![1585479623836](D:\documents\Typora\HTML元素的补充笔记.assets\1585479623836.png)

![1585560463787](D:\documents\Typora\HTML元素的补充笔记.assets\1585560463787.png)

##### 去除input的Tab键选中效果

![1585479781670](D:\documents\Typora\HTML元素的补充笔记.assets\1585479781670.png)

![1585561041645](D:\documents\Typora\HTML元素的补充笔记.assets\1585561041645.png)

![1585561071611](D:\documents\Typora\HTML元素的补充笔记.assets\1585561071611.png)

![1585561314880](D:\documents\Typora\HTML元素的补充笔记.assets\1585561314880.png)

![1585561372094](D:\documents\Typora\HTML元素的补充笔记.assets\1585561372094.png)









#### textarea

![1585479862240](D:\documents\Typora\HTML元素的补充笔记.assets\1585479862240.png)

![1585570984010](D:\documents\Typora\HTML元素的补充笔记.assets\1585570984010.png)

~~~html
textarea{
resize:none;
}
~~~

![1585571077383](D:\documents\Typora\HTML元素的补充笔记.assets\1585571077383.png)

![1585571172827](D:\documents\Typora\HTML元素的补充笔记.assets\1585571172827.png)

默认值为：resize：both，也就是既可以水平拉伸，也可以垂直拉伸。

#### select和option

![1585479917190](D:\documents\Typora\HTML元素的补充笔记.assets\1585479917190.png)

select下拉选项也需要name属性，传值到后台。

![1585571543836](D:\documents\Typora\HTML元素的补充笔记.assets\1585571543836.png)

![1585571605579](D:\documents\Typora\HTML元素的补充笔记.assets\1585571605579.png)



#### fieldset和legend

![1585480021000](D:\documents\Typora\HTML元素的补充笔记.assets\1585480021000.png)

#### form

![1585480049857](D:\documents\Typora\HTML元素的补充笔记.assets\1585480049857.png)

enctype:encode type 编码类型的缩写。

![1585572221201](D:\documents\Typora\HTML元素的补充笔记.assets\1585572221201.png)

![1585572746003](D:\documents\Typora\HTML元素的补充笔记.assets\1585572746003.png)

![1585572947258](D:\documents\Typora\HTML元素的补充笔记.assets\1585572947258.png)

![1585573081937](D:\documents\Typora\HTML元素的补充笔记.assets\1585573081937.png)

![1585573167977](D:\documents\Typora\HTML元素的补充笔记.assets\1585573167977.png)

![1585573231197](D:\documents\Typora\HTML元素的补充笔记.assets\1585573231197.png)

![1585573312830](D:\documents\Typora\HTML元素的补充笔记.assets\1585573312830.png)

![1585573382340](D:\documents\Typora\HTML元素的补充笔记.assets\1585573382340.png)

![1585575138164](D:\documents\Typora\HTML元素的补充笔记.assets\1585575138164.png)

![1585575374417](D:\documents\Typora\HTML元素的补充笔记.assets\1585575374417.png)

![1585575403575](D:\documents\Typora\HTML元素的补充笔记.assets\1585575403575.png)

![1585575557993](D:\documents\Typora\HTML元素的补充笔记.assets\1585575557993.png)

貌似最新版本的chrome不支持这种请求的浏览方式。。。。。

![1585575627592](D:\documents\Typora\HTML元素的补充笔记.assets\1585575627592.png)

![1585575831052](D:\documents\Typora\HTML元素的补充笔记.assets\1585575831052.png)

此处的另起一个页面打开，实际上就是原生的form表单提交的话，其会跳转一个页面，那么这个页面是在当前页面打开，还是另起一个页面打开。这里可以利用target设置一下。

### get和post

![1585480085962](D:\documents\Typora\HTML元素的补充笔记.assets\1585480085962.png)

#### get请求

![1585480113868](D:\documents\Typora\HTML元素的补充笔记.assets\1585480113868.png)

#### post请求

![1585480156543](D:\documents\Typora\HTML元素的补充笔记.assets\1585480156543.png)

## CSS属性--元素类型

### 块级，行内级元素

![1585639114533](D:\documents\Typora\HTML元素的补充笔记.assets\1585639114533.png)

![1585640689035](D:\documents\Typora\HTML元素的补充笔记.assets\1585640689035.png)

此处作此解释是要和下面的块级元素的盒子元素区分开来。看起来好像是分层的，内容可以设置宽度，为一层，div的位置为已成，

### 替换，非替换元素

![1585639420004](D:\documents\Typora\HTML元素的补充笔记.assets\1585639420004.png)

### 元素的分类总结

![1585639515092](D:\documents\Typora\HTML元素的补充笔记.assets\1585639515092.png)

### display

![1585639563307](D:\documents\Typora\HTML元素的补充笔记.assets\1585639563307.png)

h1元素本身可以理解为被浏览器默认添加了许多默认样式的div元素。

![1585646949063](D:\documents\Typora\HTML元素的补充笔记.assets\1585646949063.png)











![1585639618390](D:\documents\Typora\HTML元素的补充笔记.assets\1585639618390.png)

![1585655254835](D:\documents\Typora\HTML元素的补充笔记.assets\1585655254835.png)

![1585655333739](D:\documents\Typora\HTML元素的补充笔记.assets\1585655333739.png)

![1585655594858](D:\documents\Typora\HTML元素的补充笔记.assets\1585655594858.png)

![1585655703182](D:\documents\Typora\HTML元素的补充笔记.assets\1585655703182.png)

此处有一个开发技巧，也就是将a标签设置为display:block，此时a元素会默认占据整个父元素div的宽度，点击父元素时将不会出现文档箭头样式，这样比较好处理。

![1585655835602](D:\documents\Typora\HTML元素的补充笔记.assets\1585655835602.png)

![1585655997362](D:\documents\Typora\HTML元素的补充笔记.assets\1585655997362.png)

这里有一个样式 .email:hover ul 表示对.email这个dom添加悬浮伪类，然后监听，一旦有悬浮事件，就自动将其后代元素中的ul 添加display:block样式。

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* 清除浏览器格式 */
    ul {
      list-style: none;
      padding:0px;
      margin:0px;
    }
    a{
      text-decoration:none;
    }
    .email{
      width: 120px;
      border:2px solid #999;
      text-align: center;
    }
    .header{
      background-color: #999;
      color:#fff;
    }
    .email ul{
      display:none;
    }
    .email:hover ul{
      display: block;
    }
    ul li a {
      display:block;
      color:#000;
    }
    ul li a:hover{
      background-color: skyblue;
    }

  </style>
</head>
<body>
  <div class="email">
    <div class="header">邮箱</div>
    <ul>
      <li><a href="#">QQ邮箱</a></li>
      <li><a href="#">360邮箱</a></li>
      <li><a href="#">网易126邮箱</a></li>
    </ul>
  </div>
</body>
</html>
~~~



#### display的值的拓展

![1585639665744](D:\documents\Typora\HTML元素的补充笔记.assets\1585639665744.png)

table默认为display:table，所以一个table会默认独占一行。可以修改为display:inline-table

![1585647153917](D:\documents\Typora\HTML元素的补充笔记.assets\1585647153917.png)

![1585647247325](D:\documents\Typora\HTML元素的补充笔记.assets\1585647247325.png)

![1585658018249](D:\documents\Typora\HTML元素的补充笔记.assets\1585658018249.png)

此处的inline-table可以将table替换为inline元素，也就是并列一行，记得以前的table是独占一行的，也就是相当于block

可以在实践中采用此方法。但是意义不大，因为如此的话table就不能设置width和height了。

![1585658214909](D:\documents\Typora\HTML元素的补充笔记.assets\1585658214909.png)

#### inline-block

![1585639709165](D:\documents\Typora\HTML元素的补充笔记.assets\1585639709165.png)

![1585639743868](D:\documents\Typora\HTML元素的补充笔记.assets\1585639743868.png)

![1585658956168](D:\documents\Typora\HTML元素的补充笔记.assets\1585658956168.png)

![1585659306948](D:\documents\Typora\HTML元素的补充笔记.assets\1585659306948.png)

![1585659664875](D:\documents\Typora\HTML元素的补充笔记.assets\1585659664875.png)

![1585659998188](D:\documents\Typora\HTML元素的补充笔记.assets\1585659998188.png)

![1585660189971](D:\documents\Typora\HTML元素的补充笔记.assets\1585660189971.png)

![1585660353638](D:\documents\Typora\HTML元素的补充笔记.assets\1585660353638.png)

![1585660424877](D:\documents\Typora\HTML元素的补充笔记.assets\1585660424877.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* 重置浏览器默认配置 */
    ul {
      list-style:none;
      padding: 0;
      margin: 0;
    }
    a{
      text-decoration: none;
    }
    ul li {
      display:inline-block;
      text-align: center;
      margin-left: 5px;
    }
    ul li a{
      display: inline-block;
      width: 34px;
      height: 34px;
      line-height: 34px;
      border:1px solid #e1e2e3
    }
    .prve,.next{
      width: 88px;
    }
    /* 悬浮效果 */
    .page ul li a:hover{
      background-color: #38f;
      color:#f2f8ff;
    }
    /* 点击之后的效果 */
    .page .active{
      border: none;
      font-weight: 700;
      color:#000;
    }
    .page .active:hover{
      border:none;
      background-color: #fff;
      color:#000;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <div class="page">
    <ul>
      <li><a href="#" class="prve">&lt;上一页</a></li>
      <li><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a class="active">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">6</a></li>
      <li><a href="#">7</a></li>
      <li><a href="#">8</a></li>
      <li><a href="#">9</a></li>
      <li><a href="#">10</a></li>
      <li><a href="#" class="next">下一页&gt;</a></li>
    </ul>

  </div>
</body>
</html>
~~~

![1585639760950](D:\documents\Typora\HTML元素的补充笔记.assets\1585639760950.png)

![1585724419522](D:\documents\Typora\HTML元素的补充笔记.assets\1585724419522.png)

### visibility

![1585639803825](D:\documents\Typora\HTML元素的补充笔记.assets\1585639803825.png)

![1585724892245](D:\documents\Typora\HTML元素的补充笔记.assets\1585724892245.png)



### overflow

![1585639843450](D:\documents\Typora\HTML元素的补充笔记.assets\1585639843450.png)

![1585726412072](D:\documents\Typora\HTML元素的补充笔记.assets\1585726412072.png)



![1585726371236](D:\documents\Typora\HTML元素的补充笔记.assets\1585726371236.png)

![1585726981717](D:\documents\Typora\HTML元素的补充笔记.assets\1585726981717.png)

![1585726900292](D:\documents\Typora\HTML元素的补充笔记.assets\1585726900292.png)

此处也就是说设置了scroll,无论内容是否超出，均会出现滚动条。所以在实际的开发中除非特殊需要，一般都只需设置overflow:auto，就可以了。

#### 颜色网站

![1585727773727](D:\documents\Typora\HTML元素的补充笔记.assets\1585727773727.png)

![1585729112773](D:\documents\Typora\HTML元素的补充笔记.assets\1585729112773.png)



### 细节

#### 元素之间的空格

![1585639894897](D:\documents\Typora\HTML元素的补充笔记.assets\1585639894897.png)

#### 注意点

![1585639934972](D:\documents\Typora\HTML元素的补充笔记.assets\1585639934972.png)

特殊情况是：p元素一般不能包含其他块级元素，此处的以前理解为p元素不能包含div元素，在这里扩大了范围。包含所有的块级元素如 h1,p,ul,li等

## 盒子模型

![1585826072275](HTML元素的补充笔记.assets/1585826072275.png)

### 盒子模型

![1585826125200](HTML元素的补充笔记.assets/1585826125200.png)

![1585826167981](HTML元素的补充笔记.assets/1585826167981.png)

![1585826183017](HTML元素的补充笔记.assets/1585826183017.png)

![1585830232364](HTML元素的补充笔记.assets/1585830232364.png)

![1585830372535](HTML元素的补充笔记.assets/1585830372535.png)

此处作何解释呢？span的宽度可以知道由内容撑开，而div的宽度可以知道由其父元素来决定。

### width-height

![1585826226543](HTML元素的补充笔记.assets/1585826226543.png)

![1585831639079](HTML元素的补充笔记.assets/1585831639079.png)

![1585831872602](HTML元素的补充笔记.assets/1585831872602.png)

![1585831921930](HTML元素的补充笔记.assets/1585831921930.png)

超过了max-width自动换行。

![1585832764030](HTML元素的补充笔记.assets/1585832764030.png)

![1585832830308](HTML元素的补充笔记.assets/1585832830308.png)

![1585832938391](HTML元素的补充笔记.assets/1585832938391.png)

![1585832964361](HTML元素的补充笔记.assets/1585832964361.png)



### word-break：设置单词可以换行

![1585837813515](HTML元素的补充笔记.assets/1585837813515.png)

![1585837870474](HTML元素的补充笔记.assets/1585837870474.png)

### padding

![1585834024286](HTML元素的补充笔记.assets/1585834024286.png)

#### padding的取值规律

![1585834109337](HTML元素的补充笔记.assets/1585834109337.png)



![1585834132278](HTML元素的补充笔记.assets/1585834132278.png)



### margin

![1585834159402](HTML元素的补充笔记.assets/1585834159402.png)

![1585838105901](HTML元素的补充笔记.assets/1585838105901.png)

![1585838342459](HTML元素的补充笔记.assets/1585838342459.png)





![1585834172940](HTML元素的补充笔记.assets/1585834172940.png)

#### 上下margin的传递--父子关系

![1585834280227](HTML元素的补充笔记.assets/1585834280227.png)

![1585838991985](HTML元素的补充笔记.assets/1585838991985.png)

![1585839073861](HTML元素的补充笔记.assets/1585839073861.png)

![1585839329839](HTML元素的补充笔记.assets/1585839329839.png)



![1585839363262](HTML元素的补充笔记.assets/1585839363262.png)

![1585839620831](HTML元素的补充笔记.assets/1585839620831.png)

![1585839675861](HTML元素的补充笔记.assets/1585839675861.png)



#### 上下margin的折叠--兄弟关系

![1585834310687](HTML元素的补充笔记.assets/1585834310687.png)

![1585880056022](HTML元素的补充笔记.assets/1585880056022.png)

![1585880102978](HTML元素的补充笔记.assets/1585880102978.png)

![1585880180974](HTML元素的补充笔记.assets/1585880180974.png)

![1585880214881](HTML元素的补充笔记.assets/1585880214881.png)



![1585834320657](HTML元素的补充笔记.assets/1585834320657.png)



![1585834332916](HTML元素的补充笔记.assets/1585834332916.png)



![1585834344086](HTML元素的补充笔记.assets/1585834344086.png)



### border

![1585834387529](HTML元素的补充笔记.assets/1585834387529.png)

#### 边框相关的属性（一）

![1585834413496](HTML元素的补充笔记.assets/1585834413496.png)

![1585880661917](HTML元素的补充笔记.assets/1585880661917.png)





#### 边框的样式取值

![1585834483046](HTML元素的补充笔记.assets/1585834483046.png)



#### 边框相关的属性（二）

##### border-top

##### border-right

##### border-bottom

##### border-left

![1585834520793](HTML元素的补充笔记.assets/1585834520793.png)

#### 边框的形状

![1585834555241](HTML元素的补充笔记.assets/1585834555241.png)

![1585881408134](HTML元素的补充笔记.assets/1585881408134.png)



#### 边框妙用--实现三角形

![1585834595372](HTML元素的补充笔记.assets/1585834595372.png)



#### 注意

![1585834642054](HTML元素的补充笔记.assets/1585834642054.png)





#### 行内元素的盒模型

![image-20200420224009543](HTML元素的补充笔记.assets/image-20200420224009543.png)









![1585881792024](HTML元素的补充笔记.assets/1585881792024.png)

![1585881833123](HTML元素的补充笔记.assets/1585881833123.png)

![1585881985565](HTML元素的补充笔记.assets/1585881985565.png)

![1585882084517](HTML元素的补充笔记.assets/1585882084517.png)

![1585882136249](HTML元素的补充笔记.assets/1585882136249.png)

![1585882187366](HTML元素的补充笔记.assets/1585882187366.png)

![1585882244064](HTML元素的补充笔记.assets/1585882244064.png)







### border-radius

![1585834735307](HTML元素的补充笔记.assets/1585834735307.png)



#### css属性 -border-\*-\*-radius

![1585834893390](HTML元素的补充笔记.assets/1585834893390.png)

![1585834906950](HTML元素的补充笔记.assets/1585834906950.png)

#### css属性 - border-radius

![1585834923438](HTML元素的补充笔记.assets/1585834923438.png)



![1585834965610](HTML元素的补充笔记.assets/1585834965610.png)

![1585882927780](HTML元素的补充笔记.assets/1585882927780.png)

![1585883012366](HTML元素的补充笔记.assets/1585883012366.png)

之前的百分比一般均是参照父元素比例来计算的。此处的border-radius:50%参照的是dom本身的大小。

### outline

![1585834988157](HTML元素的补充笔记.assets/1585834988157.png)

![1585895168438](HTML元素的补充笔记.assets/1585895168438.png)

![1585895529852](HTML元素的补充笔记.assets/1585895529852.png)

![1585895495769](HTML元素的补充笔记.assets/1585895495769.png)

![1585895616072](HTML元素的补充笔记.assets/1585895616072.png)



### box-shadow

![1585835003469](HTML元素的补充笔记.assets/1585835003469.png)

**注意box-shadow可以设置一个或者多个阴影，不仅限于一边**

![1585919048877](HTML元素的补充笔记.assets/1585919048877.png)







![1585835039289](HTML元素的补充笔记.assets/1585835039289.png)

**默认跟随color的颜色**

![1585919169969](HTML元素的补充笔记.assets/1585919169969.png)

![1585919194216](HTML元素的补充笔记.assets/1585919194216.png)

![1585919259247](HTML元素的补充笔记.assets/1585919259247.png)

![1585919291904](HTML元素的补充笔记.assets/1585919291904.png)

![1585919377490](HTML元素的补充笔记.assets/1585919377490.png)

![1585919397498](HTML元素的补充笔记.assets/1585919397498.png)

![1585919536304](HTML元素的补充笔记.assets/1585919536304.png)

![1585919563701](HTML元素的补充笔记.assets/1585919563701.png)

![1585919610742](HTML元素的补充笔记.assets/1585919610742.png)

![1585919626959](HTML元素的补充笔记.assets/1585919626959.png)

![1585919669631](HTML元素的补充笔记.assets/1585919669631.png)

![1585919699973](HTML元素的补充笔记.assets/1585919699973.png)



![1585835052106](HTML元素的补充笔记.assets/1585835052106.png)

![1585920230263](HTML元素的补充笔记.assets/1585920230263.png)

![1585920262312](HTML元素的补充笔记.assets/1585920262312.png)



### text-shadow

![1585835074475](HTML元素的补充笔记.assets/1585835074475.png)

![1585920502938](HTML元素的补充笔记.assets/1585920502938.png)

![1585920527483](HTML元素的补充笔记.assets/1585920527483.png)

![1585920578572](HTML元素的补充笔记.assets/1585920578572.png)

**多个text-shadow同时使用，类似于box-shadow的多个值同时使用。**

![1585920600898](HTML元素的补充笔记.assets/1585920600898.png)

![1585920672641](HTML元素的补充笔记.assets/1585920672641.png)

![1585920689860](HTML元素的补充笔记.assets/1585920689860.png)

![1585920733720](HTML元素的补充笔记.assets/1585920733720.png)

![1585920750940](HTML元素的补充笔记.assets/1585920750940.png)



### box-sizing

![1585835095229](HTML元素的补充笔记.assets/1585835095229.png)



#### box-sizing:content-box

![1585835199420](HTML元素的补充笔记.assets/1585835199420.png)

![1585920907992](HTML元素的补充笔记.assets/1585920907992.png)



#### box-sizing:border-box

![1585835243895](HTML元素的补充笔记.assets/1585835243895.png)

![1585920989965](HTML元素的补充笔记.assets/1585920989965.png)





### 盒子模型

![1585835311242](HTML元素的补充笔记.assets/1585835311242.png)



### 元素的水平居中显示

![1585835354273](HTML元素的补充笔记.assets/1585835354273.png)

![1586007020511](HTML元素的补充笔记.assets/1586007020511.png)

![1586007061291](HTML元素的补充笔记.assets/1586007061291.png)

![1586007076399](HTML元素的补充笔记.assets/1586007076399.png)

### margin水平居中的原理

![1586007451286](HTML元素的补充笔记.assets/1586007451286.png)

此处父元素box的width默认为auto，所以可以居中 （在随后的实验中，此处的解释应该为一个错误，居中无关父元素的width是否为auto）

![1586007488628](HTML元素的补充笔记.assets/1586007488628.png)

![1586007557355](HTML元素的补充笔记.assets/1586007557355.png)

![1586007638459](HTML元素的补充笔记.assets/1586007638459.png)

![1586007665966](HTML元素的补充笔记.assets/1586007665966.png)

![1586007741422](HTML元素的补充笔记.assets/1586007741422.png)

以上也是同样的解释错误，原因是一样的。

![1586009525928](HTML元素的补充笔记.assets/1586009525928.png)

![1586009633860](HTML元素的补充笔记.assets/1586009633860.png)

![1586009657915](HTML元素的补充笔记.assets/1586009657915.png)

![1586009815198](HTML元素的补充笔记.assets/1586009815198.png)

![1586009880558](HTML元素的补充笔记.assets/1586009880558.png)

![1586010015681](HTML元素的补充笔记.assets/1586010015681.png)



## css属性--背景

### css属性-background-image

![1586008129603](HTML元素的补充笔记.assets/1586008129603.png)

![1586009129772](HTML元素的补充笔记.assets/1586009129772.png)





### css属性-background-repeat

![1586008165819](HTML元素的补充笔记.assets/1586008165819.png)



![1586009269243](HTML元素的补充笔记.assets/1586009269243.png)

![1586009245349](HTML元素的补充笔记.assets/1586009245349.png)

![1586009303384](HTML元素的补充笔记.assets/1586009303384.png)

![1586009321293](HTML元素的补充笔记.assets/1586009321293.png)





![1586008230830](HTML元素的补充笔记.assets/1586008230830.png)





### css属性-background-size

![1586008302398](HTML元素的补充笔记.assets/1586008302398.png)

![1586012165615](HTML元素的补充笔记.assets/1586012165615.png)

![1586012190822](HTML元素的补充笔记.assets/1586012190822.png)



![1586012356258](HTML元素的补充笔记.assets/1586012356258.png)

![1586012295298](HTML元素的补充笔记.assets/1586012295298.png)

![1586012511734](HTML元素的补充笔记.assets/1586012511734.png)



![1586012540549](HTML元素的补充笔记.assets/1586012540549.png)















### css属性-background-position

![1586008365270](HTML元素的补充笔记.assets/1586008365270.png)

![1586008498356](HTML元素的补充笔记.assets/1586008498356.png)

![1586012689834](HTML元素的补充笔记.assets/1586012689834.png)

![1586012707993](HTML元素的补充笔记.assets/1586012707993.png)

### css Sprite

![1586008518744](HTML元素的补充笔记.assets/1586008518744.png)

![1586008566310](HTML元素的补充笔记.assets/1586008566310.png)

![1586013557177](HTML元素的补充笔记.assets/1586013557177.png)

![1586013829872](HTML元素的补充笔记.assets/1586013829872.png)

![1586270649853](HTML元素的补充笔记.assets/1586270649853.png)

![1586270930418](HTML元素的补充笔记.assets/1586270930418.png)

![1586271005197](HTML元素的补充笔记.assets/1586271005197.png)

![1586271059033](HTML元素的补充笔记.assets/1586271059033.png)



### css Sprite编写建议

![1586008586040](HTML元素的补充笔记.assets/1586008586040.png)



![1586008622228](HTML元素的补充笔记.assets/1586008622228.png)

![1586008644836](HTML元素的补充笔记.assets/1586008644836.png)



![1586416753278](HTML元素的补充笔记.assets/1586416753278.png)

![1586416795748](HTML元素的补充笔记.assets/1586416795748.png)

### css属性- background-attachment

![1586008658358](HTML元素的补充笔记.assets/1586008658358.png)

![1586417057352](HTML元素的补充笔记.assets/1586417057352.png)

![1586417154050](HTML元素的补充笔记.assets/1586417154050.png)



### css属性-background

![1586008727679](HTML元素的补充笔记.assets/1586008727679.png)



### background-image和img的选择

![1586008772590](HTML元素的补充笔记.assets/1586008772590.png)

## css属性-cursor

![1586008847416](HTML元素的补充笔记.assets/1586008847416.png)

![1586418022502](HTML元素的补充笔记.assets/1586418022502.png)

## css属性-定位

### 标准流

![1586418935274](HTML元素的补充笔记.assets/1586418935274.png)



### margin,padding定位

![1586418965912](HTML元素的补充笔记.assets/1586418965912.png)

**总结一句话，margin,padding布局比较容易影响标准流中的其他元素的布局效果。**

### css属性-position

![1586419025718](HTML元素的补充笔记.assets/1586419025718.png)



#### static-静态定位

![1586419083845](HTML元素的补充笔记.assets/1586419083845.png)

static属性为position的默认属性，没有left,right,top,bottom等其他值

#### relative-相对定位

![1586419111672](HTML元素的补充笔记.assets/1586419111672.png)

**注意到此刻position:relative相对的是元素自己的中心轴中心为原点，而不是元素自己的左上角的区域为原点，这一点需要注意。position:absolute的定位原点为包含块的左上角的位置为坐标原点，这要做**



![1586423326666](HTML元素的补充笔记.assets/1586423326666.png)

![1586424426473](HTML元素的补充笔记.assets/1586424426473.png)





#### 练习一

![1586419209005](HTML元素的补充笔记.assets/1586419209005.png)



![1586424692445](HTML元素的补充笔记.assets/1586424692445.png)

![1586424784950](HTML元素的补充笔记.assets/1586424784950.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        sub,sup{
            font-size: 14px;
        }
       sub{
           position: relative;
           bottom: 3px;
       }
       sup{
           position: relative;
           top:3px;
       }

    </style>
</head>
<body>
    <h1>请计算一下n<sub>1</sub>+n<sub>2</sub>+n<sup>2</sup>的值</h1>
</body>
</html>
~~~



#### 练习二

![1586419246649](HTML元素的补充笔记.assets/1586419246649.png)

![1586426292917](HTML元素的补充笔记.assets/1586426292917.png)

![1586435634611](HTML元素的补充笔记.assets/1586435634611.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            overflow:hidden;
            min-width: 1000px;
        }
        .box img {
            position: relative;
            /* left:-960px; */
            transform: translate(-50%);
            margin-left:50%;
        }
    </style>
</head>
<body>
    <div class="box">
        <img src="./img/mhxy.jpg">
    </div>
</body>
</html>
~~~



#### flex-固定定位

![1586419357521](HTML元素的补充笔记.assets/1586419357521.png)



![1586423858158](HTML元素的补充笔记.assets/1586423858158.png)

![1586437371934](HTML元素的补充笔记.assets/1586437371934.png)



### 画布和视口

![1586419399634](HTML元素的补充笔记.assets/1586419399634.png)

![1586437613046](HTML元素的补充笔记.assets/1586437613046.png)

![1586437641222](HTML元素的补充笔记.assets/1586437641222.png)



### 脱标元素的特点



![1586419426884](HTML元素的补充笔记.assets/1586419426884.png)

![1586437990125](HTML元素的补充笔记.assets/1586437990125.png)

![1586438016895](HTML元素的补充笔记.assets/1586438016895.png)

![1586438161251](HTML元素的补充笔记.assets/1586438161251.png)

![1586439052067](HTML元素的补充笔记.assets/1586439052067.png)





### 练习三

![1586419545191](HTML元素的补充笔记.assets/1586419545191.png)

![1586439482744](HTML元素的补充笔记.assets/1586439482744.png)

![1586439638069](HTML元素的补充笔记.assets/1586439638069.png)

![1586439826080](HTML元素的补充笔记.assets/1586439826080.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 清除浏览器自带样式 */
        body{
            margin: 0px;
            padding:0px;
        }
        a{
            text-decoration:none;
            color:#000;
        }
        /* 自定义样式 */
        .box{
            position:fixed;
            top:100px;
            right:30px;
            border:1px solid #eaeaea;
        }
        .box a{
            display:block;
            width: 62px;
            height: 48px;
            padding-top:12px;
            font-size: 12px;
            text-align: center;
            border-bottom:1px solid #eaeaea;
        }
        a.top{
            border-bottom:none;
        }
        .icon {
            display:block;
            width:20px;
            height: 20px;
            margin:0 auto 3px;
        }
        .sign{
            background:url("./img/icon-aside-right-signin.png")
        }
        .cart{
            background:url("./img/icon-aside-right-cart.png");
        }
        .phone{
            background:url("./img/icon-aside-right-phone.png")
        }
        .backTop{
            background:url("./img/icon-aside-right-top.png")
        }
        /* 悬浮样式变更 */
        .box a:hover{
            background-color: #f5f5f5;
            color:#e41625;
        
        }
        .box a:hover .sign{
            background:url("./img/icon-aside-right-signin-active.png")
        }
        .box a:hover .cart{
            background:url("./img/icon-aside-right-cart-active.png");
        }
        .box a:hover .phone{
            background:url("./img/icon-aside-right-phone-active.png")
        }
        .box a:hover .backTop{
            background:url("./img/icon-aside-right-top-active.png")
        }
    </style>
</head>
<body>
    <div class="box">
        <a href="#">
            <i class="icon sign"></i>
            <span>签到</span>
        </a>
        <a href="#">
            <i class="icon cart"></i>
            <span>购物车</span>
        </a>
        <a href="#">
            <i class="icon phone"></i>
            <span>APP</span>
        </a>
        <a href="#" class="top">
            <i class="icon backTop"></i>
            <span>TOP</span>
        </a>
    </div>
    <br><br>  <br><br>  <br><br>  <br><br>  <br><br>  <br><br>  <br><br>  <br><br>  <br><br>
    <br><br>  <br><br>  <br><br>  <br><br>  <br><br>  <br><br>  <br><br>  <br><br>  <br><br>
    <br><br>  <br><br>  <br><br>  <br><br>  <br><br>  <br><br>  <br><br>  <br><br>  <br><br>
</body>
</html>
~~~





### 绝对定位-absolute

![1586419584389](HTML元素的补充笔记.assets/1586419584389.png)



![1586423542241](HTML元素的补充笔记.assets/1586423542241.png)

####  子绝父相

![1586419642850](HTML元素的补充笔记.assets/1586419642850.png)

#### 练习四



![1586419871778](HTML元素的补充笔记.assets/1586419871778.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 重置默认配置 */
        body{
            margin:0px;
            padding:0px;
        }
        ul{
            list-style: none;
            margin:0px;
            padding:0px;
        }
        a {
            text-decoration:none;
            color:#333;
        }
        /* 设置样式 */
        .product-show {
            position:relative;
            display:inline-block;
        }
        .product-show ul {
            position:absolute;
            bottom:20px;
            width: 285px;
            text-align: justify;
            text-align-last: justify;
            left:0;
            right:0;
            margin: 0 auto;
        }
        .product-show ul li {
            display:inline-block;
            margin-top:10px;
        }
        .product-show ul li a{
            display: inline-block;
            width: 80px;
            height: 40px;
            font-size: 12px;
            text-align-last: center;
            text-align:center;
            line-height: 40px;
            border:1px solid #eaeaea;
            border-radius:40px;
            box-shadow: 0 0 0 1 rgba(0,0,0,0.1);
            background-color: #fff;
        }
        /* 悬浮效果 */
        .product-show ul li a:hover {
            color:#f00;
        }
    </style>
</head>
<body>
    <div class="product-show">
        <a ref="#">
            <img src="./img/beauty-left-img.jpg" alt>
        </a>
        <ul>
            <li><a href="#">精致护肤</a></li>
            <li><a href="#">人气面膜</a></li>
            <li><a href="#">大牌彩妆</a></li>
            <li><a href="#">防晒修护</a></li>
            <li><a href="#">迷人香氛</a></li>
            <li><a href="#">面部精华</a></li>
        </ul>
    </div>
</body>
</html>
~~~



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 样式重置 */
        body{
            margin:0px;
            padding:0px;
        }
        a {
            text-decoration: none;
            color:#333;
        }
        img {
            vertical-align: middle;
        }
        .phone {
            position:relative;
            margin-left:200px;
        }
        .phone>span{
            font-size:12px;
        }
        .phone .code{
            display:none;
            position:absolute;
            left:0;
            top:32px;
            transform:translate(-50%);
            margin-left:50%;
            border:1px solid #eaeaea;
            padding:5px 5px 0px;
        }
        .phone .code span{
            display: block;
            text-align: center;
        }
        .arrow{
            position:absolute;
            left:0;
            right:0;
            margin:0 auto;
            top:-6px;
            width: 8px;
            height:8px;
            border-top:1px solid #eaeaea;
            border-left:1px solid #eaeaea;
            transform:rotate(45deg);
            background:#fff;
        }
        .phone>span:hover+.code{
            display:inline;
        }
    </style>
</head>
<body>
    <a href="#" class="phone">
        <span>手机考拉</span>
        <span class="code">
            <span class="arrow"></span>
            <img src="./img/qrcode.png" alt>
            <span>APP下载</span>
            <span>领1000元新人礼包</span>
        </span>
    </a>
</body>
</html>
~~~









#### 绝对定位技巧

![1586419894735](HTML元素的补充笔记.assets/1586419894735.png)



### 粘滞定位-sticky

![image-20200420235345643](HTML元素的补充笔记.assets/image-20200420235345643.png)





![image-20200420235441470](HTML元素的补充笔记.assets/image-20200420235441470.png)



![image-20200421000041657](HTML元素的补充笔记.assets/image-20200421000041657.png)





![image-20200421000124175](HTML元素的补充笔记.assets/image-20200421000124175.png)





![image-20200421000418167](HTML元素的补充笔记.assets/image-20200421000418167.png)





### 元素的层级

![image-20200421000803246](HTML元素的补充笔记.assets/image-20200421000803246.png)



![image-20200421001201013](HTML元素的补充笔记.assets/image-20200421001201013.png)





### position总结



![1586419982728](HTML元素的补充笔记.assets/1586419982728.png)



### 元素的层叠

![1586422286162](HTML元素的补充笔记.assets/1586422286162.png)



### css属性-z-index

![1586422316985](HTML元素的补充笔记.assets/1586422316985.png)



## css属性-浮动

### 定位方案

![image-20200412203235496](HTML元素的补充笔记.assets/image-20200412203235496.png)



### float

![image-20200412203311983](HTML元素的补充笔记.assets/image-20200412203311983.png)





#### 浮动的规则一

![image-20200412203333053](HTML元素的补充笔记.assets/image-20200412203333053.png)

一旦浮动之后，浮动元素就朝着向左或者向右浮动，除非遇到包含块的边界或者其他的浮动元素才会停止浮动。



#### 浮动的规则二

![image-20200412203359642](HTML元素的补充笔记.assets/image-20200412203359642.png)

div里面的文字也是可以被视作是一个行内级元素，所以可以知道，在实际中经常遇到浮动块占据了div的大片位置，从而将div里面的文字挤到一边去了，这也是这个规则的实际应用，就像上图中的图片文字环绕效果一样。



#### 浮动的规则三

![image-20200412203438020](HTML元素的补充笔记.assets/image-20200412203438020.png)





#### 浮动的规则四

![image-20200412203508456](HTML元素的补充笔记.assets/image-20200412203508456.png)





#### 浮动的规则五

![image-20200412203542487](HTML元素的补充笔记.assets/image-20200412203542487.png)



#### 浮动的规则六

![image-20200412203617232](HTML元素的补充笔记.assets/image-20200412203617232.png)





### 应用

![image-20200412203641095](HTML元素的补充笔记.assets/image-20200412203641095.png)







### 多出的margin的处理方式

![image-20200412210806934](HTML元素的补充笔记.assets/image-20200412210806934.png)



![image-20200412211543186](HTML元素的补充笔记.assets/image-20200412211543186.png)







![image-20200412210842986](HTML元素的补充笔记.assets/image-20200412210842986.png)



![image-20200412210934960](HTML元素的补充笔记.assets/image-20200412210934960.png)



![image-20200412211039489](HTML元素的补充笔记.assets/image-20200412211039489.png)



### caniuse

![image-20200412211254849](HTML元素的补充笔记.assets/image-20200412211254849.png)





![image-20200412211419966](HTML元素的补充笔记.assets/image-20200412211419966.png)





![image-20200412211713749](HTML元素的补充笔记.assets/image-20200412211713749.png)





![image-20200412211849958](HTML元素的补充笔记.assets/image-20200412211849958.png)





![image-20200412212300351](HTML元素的补充笔记.assets/image-20200412212300351.png)





![image-20200412212453154](HTML元素的补充笔记.assets/image-20200412212453154.png)





![image-20200412212756870](HTML元素的补充笔记.assets/image-20200412212756870.png)







![image-20200412213012902](HTML元素的补充笔记.assets/image-20200412213012902.png)





![image-20200412213215182](HTML元素的补充笔记.assets/image-20200412213215182.png)







![image-20200412213640153](HTML元素的补充笔记.assets/image-20200412213640153.png)





![image-20200412214202856](HTML元素的补充笔记.assets/image-20200412214202856.png)





![image-20200412214330929](HTML元素的补充笔记.assets/image-20200412214330929.png)











### 浮动练习（一）

![image-20200412203657484](HTML元素的补充笔记.assets/image-20200412203657484.png)



![image-20200412214905879](HTML元素的补充笔记.assets/image-20200412214905879.png)





![image-20200412215035902](HTML元素的补充笔记.assets/image-20200412215035902.png)





![image-20200412215216233](HTML元素的补充笔记.assets/image-20200412215216233.png)



![image-20200412215337304](HTML元素的补充笔记.assets/image-20200412215337304.png)



![image-20200412215410889](HTML元素的补充笔记.assets/image-20200412215410889.png)





![image-20200412215502785](HTML元素的补充笔记.assets/image-20200412215502785.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            width: 990px;
            height: 500px;
            background-color: bisque;
            margin:0 auto;
        }
        .wrap{
            margin-right: -10px;
        }
        .item {
            float:left;
            width: 240px;
            background-color: brown;
            margin-right: 10px;
        }
        .itema{
            height: 306px;
        }
        .itemb{
            height: 148px;
        }
        .item-last{
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
      <div class="wrap">
        <div class="item itema"></div>
        <div class="item itema"></div>
        <div class="item itemb"></div>
        <div class="item itemb"></div>
        <div class="item itemb item-last"></div>
        <div class="item itemb item-last"></div>
      </div>
    </div>
</body>
</html>
~~~

![image-20200412221944361](HTML元素的补充笔记.assets/image-20200412221944361.png)







### 浮动练习（二）

![image-20200412203717964](HTML元素的补充笔记.assets/image-20200412203717964.png)



![image-20200412222305409](HTML元素的补充笔记.assets/image-20200412222305409.png)





![image-20200412222850769](HTML元素的补充笔记.assets/image-20200412222850769.png)





![image-20200412223028712](HTML元素的补充笔记.assets/image-20200412223028712.png)





![image-20200412223602987](HTML元素的补充笔记.assets/image-20200412223602987.png)





![image-20200412224109124](HTML元素的补充笔记.assets/image-20200412224109124.png)



![image-20200412224146656](HTML元素的补充笔记.assets/image-20200412224146656.png)





![image-20200412224321546](HTML元素的补充笔记.assets/image-20200412224321546.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 清除浏览器自带样式 */
        body{
            margin: 0px;
            padding:0px;
        }
        a{
            text-decoration:none;
            color:#333;
        }
        /* 自定义样式 */
        .container{
            width: 1000px;
            height: 200px;
            background-color: bisque;
            padding-top:20px;
            margin:0 auto;
        }
        /* 左浮动样式 */
        .f_left{
            float:left;
        }
        .desc_left h2 {
            float:left;
            margin-top:0px;
            margin-bottom: 0px;
            font-size:22px; 
        }
        .desc_left span , .desc_left a{
            float:left;
            font-size:14px;
            color:#8DB6CD;
            margin-top:9px;
            margin-left:20px;
        }
        /* 右浮动样式 */
        .f_right{
            float:right;
        }
        .desc_right a{
            margin-top:9px;
            font-size:14px;
            color:#8DB6CD;
        }
        /*特殊字体颜色 */
       .desc_left .hot{
           color:#ff080f;
       }
       /* 悬浮效果 */
       .desc_left a:hover,.desc_right a:hover{
           text-decoration: underline;
       }
    </style>
</head>
<body>
    <div class="container">
        <div class="desc_left f_left">
            <h2>美妆专区</h2>
            <span>热搜词</span>
            <a href="#" class="hot">面膜</a>
            <a href="#" class="hot">口红</a>
            <a href="#">眼霜</a>
            <a href="#">精华</a>
            <a href="#">卸妆</a>
        </div>
        <div class="desc_right f_right">
            <a href="#">更多好货></a>
        </div>
    </div>
</body>
</html>
~~~

![image-20200413111149441](HTML元素的补充笔记.assets/image-20200413111149441.png)









![image-20200413111837225](HTML元素的补充笔记.assets/image-20200413111837225.png)





![image-20200413111659291](HTML元素的补充笔记.assets/image-20200413111659291.png)



![image-20200413112120114](HTML元素的补充笔记.assets/image-20200413112120114.png)



![image-20200413112655749](HTML元素的补充笔记.assets/image-20200413112655749.png)

![image-20200413112812028](HTML元素的补充笔记.assets/image-20200413112812028.png)





### 浮动练习（三）

![image-20200412203801367](HTML元素的补充笔记.assets/image-20200412203801367.png)





![image-20200413113543464](HTML元素的补充笔记.assets/image-20200413113543464.png)



![image-20200413113744155](HTML元素的补充笔记.assets/image-20200413113744155.png)





![image-20200413113831313](HTML元素的补充笔记.assets/image-20200413113831313.png)





![image-20200413114011402](HTML元素的补充笔记.assets/image-20200413114011402.png)







![image-20200413114144627](HTML元素的补充笔记.assets/image-20200413114144627.png)





![image-20200413114402911](HTML元素的补充笔记.assets/image-20200413114402911.png)





![image-20200413114722590](HTML元素的补充笔记.assets/image-20200413114722590.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* css reset */
        body{
            margin: 0;
            padding: 0;
        }
        a{
            text-decoration:none;
            color:#000;
        }
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        /* 样式 */
        .container{
            width: 1100px;
            margin:0 auto;
            height: 380px;
        }
        .wraper{
            margin-right: -3px;
        }
        .container .wraper li {
            float:left;
            width: 420px;
            height: 190px;
            line-height: 190px;
            text-align: center;
            border:1px solid #eaeaea;
            margin-right:-1px;
            margin-bottom: -1px;
        }
        .container .wraper li.last{
            float:right;
            height: 381px;
            line-height: 381px;
            width: 260px;
        }
    </style>
</head>
<body>
    <div class="container">
     <ul class="wraper">
         <li class="last"><a href="#">区域五</a></li>
         <li><a href="#">区域一</a></li>
         <li><a href="#">区域二</a></li>
         <li><a href="#">区域三</a></li>
         <li><a href="#">区域四</a></li>
     </ul>
    </div>
</body>
</html>
~~~

![image-20200413164334119](HTML元素的补充笔记.assets/image-20200413164334119.png)





### 浮动练习（四）

![image-20200412203835612](HTML元素的补充笔记.assets/image-20200412203835612.png)





### 浮动存在的问题

![image-20200412203915511](HTML元素的补充笔记.assets/image-20200412203915511.png)







#### 清除浮动

![image-20200412203938918](HTML元素的补充笔记.assets/image-20200412203938918.png)



![image-20200413171243140](HTML元素的补充笔记.assets/image-20200413171243140.png)





![image-20200413171313151](HTML元素的补充笔记.assets/image-20200413171313151.png)







![image-20200413171448111](HTML元素的补充笔记.assets/image-20200413171448111.png)







![image-20200413171602872](HTML元素的补充笔记.assets/image-20200413171602872.png)





![image-20200413171732680](HTML元素的补充笔记.assets/image-20200413171732680.png)



![image-20200413172302356](HTML元素的补充笔记.assets/image-20200413172302356.png)





![image-20200413172418624](HTML元素的补充笔记.assets/image-20200413172418624.png)





![image-20200413172510193](HTML元素的补充笔记.assets/image-20200413172510193.png)



![image-20200413172641447](HTML元素的补充笔记.assets/image-20200413172641447.png)



#### 清除浮动的常用方法

![image-20200412204022473](HTML元素的补充笔记.assets/image-20200412204022473.png)







### clear

![image-20200412204048050](HTML元素的补充笔记.assets/image-20200412204048050.png)







### 定位方案对比

![image-20200412204131726](HTML元素的补充笔记.assets/image-20200412204131726.png)







## transform

![image-20200412204329301](HTML元素的补充笔记.assets/image-20200412204329301.png)





### 位移 - translate

![image-20200412204404269](HTML元素的补充笔记.assets/image-20200412204404269.png)



![image-20200413202836513](HTML元素的补充笔记.assets/image-20200413202836513.png)



![image-20200413202902957](HTML元素的补充笔记.assets/image-20200413202902957.png)







![image-20200413203104506](HTML元素的补充笔记.assets/image-20200413203104506.png)





![image-20200413203202596](HTML元素的补充笔记.assets/image-20200413203202596.png)



### 缩放 - scale

![image-20200412204500634](HTML元素的补充笔记.assets/image-20200412204500634.png)



![image-20200413203650631](HTML元素的补充笔记.assets/image-20200413203650631.png)



![image-20200413203458891](HTML元素的补充笔记.assets/image-20200413203458891.png)





![image-20200413203736976](HTML元素的补充笔记.assets/image-20200413203736976.png)





![image-20200413203830803](HTML元素的补充笔记.assets/image-20200413203830803.png)





![image-20200413203938282](HTML元素的补充笔记.assets/image-20200413203938282.png)







### transform - origin

![image-20200412204549915](HTML元素的补充笔记.assets/image-20200412204549915.png)





![image-20200413204146134](HTML元素的补充笔记.assets/image-20200413204146134.png)



![image-20200413204304574](HTML元素的补充笔记.assets/image-20200413204304574.png)





![image-20200413204341420](HTML元素的补充笔记.assets/image-20200413204341420.png)





![image-20200413204423394](HTML元素的补充笔记.assets/image-20200413204423394.png)







### 旋转 - rotate

![image-20200412204703704](HTML元素的补充笔记.assets/image-20200412204703704.png)



![image-20200413204833828](HTML元素的补充笔记.assets/image-20200413204833828.png)



![image-20200413204906261](HTML元素的补充笔记.assets/image-20200413204906261.png)









### 倾斜-skew

![image-20200412204733815](HTML元素的补充笔记.assets/image-20200412204733815.png)



![image-20200413205659215](HTML元素的补充笔记.assets/image-20200413205659215.png)



![image-20200413205721830](HTML元素的补充笔记.assets/image-20200413205721830.png)







## 过渡动画

![image-20200412204830582](HTML元素的补充笔记.assets/image-20200412204830582.png)



![image-20200413211016030](HTML元素的补充笔记.assets/image-20200413211016030.png)





![image-20200413211348192](HTML元素的补充笔记.assets/image-20200413211348192.png)

可以注意到过渡动画属性是添加在.box上面的，代码它的某个属性的变化的过渡动画的效果。



![image-20200413211451524](HTML元素的补充笔记.assets/image-20200413211451524.png)







![image-20200413211532596](HTML元素的补充笔记.assets/image-20200413211532596.png)





![image-20200413211554792](HTML元素的补充笔记.assets/image-20200413211554792.png)





![image-20200413211715852](HTML元素的补充笔记.assets/image-20200413211715852.png)





![image-20200413211744333](HTML元素的补充笔记.assets/image-20200413211744333.png)



![image-20200413211800853](HTML元素的补充笔记.assets/image-20200413211800853.png)







## vertical -align



![image-20200412204915491](HTML元素的补充笔记.assets/image-20200412204915491.png)







### vertical-align-line boxes

![image-20200413212537998](HTML元素的补充笔记.assets/image-20200413212537998.png)



![image-20200413213109398](HTML元素的补充笔记.assets/image-20200413213109398.png)





![image-20200413213127223](HTML元素的补充笔记.assets/image-20200413213127223.png)



![image-20200413213224725](HTML元素的补充笔记.assets/image-20200413213224725.png)





![image-20200413213240751](HTML元素的补充笔记.assets/image-20200413213240751.png)



![image-20200413213441462](HTML元素的补充笔记.assets/image-20200413213441462.png)





![image-20200413213400158](HTML元素的补充笔记.assets/image-20200413213400158.png)



![image-20200413213609544](HTML元素的补充笔记.assets/image-20200413213609544.png)







![image-20200413213907516](HTML元素的补充笔记.assets/image-20200413213907516.png)





![image-20200413214019764](HTML元素的补充笔记.assets/image-20200413214019764.png)



![image-20200413214047156](HTML元素的补充笔记.assets/image-20200413214047156.png)





![image-20200413214200335](HTML元素的补充笔记.assets/image-20200413214200335.png)



![image-20200413214323387](HTML元素的补充笔记.assets/image-20200413214323387.png)



![image-20200413214359296](HTML元素的补充笔记.assets/image-20200413214359296.png)







![image-20200413214909427](HTML元素的补充笔记.assets/image-20200413214909427.png)



![image-20200413214928611](HTML元素的补充笔记.assets/image-20200413214928611.png)





![image-20200413215036908](HTML元素的补充笔记.assets/image-20200413215036908.png)



![image-20200413215407126](HTML元素的补充笔记.assets/image-20200413215407126.png)







![image-20200413215607585](HTML元素的补充笔记.assets/image-20200413215607585.png)





![image-20200413215722098](HTML元素的补充笔记.assets/image-20200413215722098.png)



![image-20200413215759496](HTML元素的补充笔记.assets/image-20200413215759496.png)





![image-20200413215905500](HTML元素的补充笔记.assets/image-20200413215905500.png)



![image-20200413220032182](HTML元素的补充笔记.assets/image-20200413220032182.png)



![image-20200413220114651](HTML元素的补充笔记.assets/image-20200413220114651.png)



![image-20200413220334503](HTML元素的补充笔记.assets/image-20200413220334503.png)



![image-20200413220445907](HTML元素的补充笔记.assets/image-20200413220445907.png)



![image-20200413220545781](HTML元素的补充笔记.assets/image-20200413220545781.png)



![image-20200413220720334](HTML元素的补充笔记.assets/image-20200413220720334.png)



![image-20200413221116657](HTML元素的补充笔记.assets/image-20200413221116657.png)





![image-20200413221313091](HTML元素的补充笔记.assets/image-20200413221313091.png)



![image-20200413221345018](HTML元素的补充笔记.assets/image-20200413221345018.png)



![image-20200413221412755](HTML元素的补充笔记.assets/image-20200413221412755.png)



![image-20200413221551446](HTML元素的补充笔记.assets/image-20200413221551446.png)



![image-20200413221605823](HTML元素的补充笔记.assets/image-20200413221605823.png)





![image-20200413222751623](HTML元素的补充笔记.assets/image-20200413222751623.png)



![image-20200413222809363](HTML元素的补充笔记.assets/image-20200413222809363.png)





![image-20200413223116400](HTML元素的补充笔记.assets/image-20200413223116400.png)





![image-20200413223217582](HTML元素的补充笔记.assets/image-20200413223217582.png)



![image-20200413223235290](HTML元素的补充笔记.assets/image-20200413223235290.png)







### 不同情况分析一

![image-20200412205057399](HTML元素的补充笔记.assets/image-20200412205057399.png)









### 不同情况分析二

![image-20200412205137848](HTML元素的补充笔记.assets/image-20200412205137848.png)







### 出场

![image-20200412205207066](HTML元素的补充笔记.assets/image-20200412205207066.png)





### 不同的取值

![image-20200412205245778](HTML元素的补充笔记.assets/image-20200412205245778.png)







## 笔记

![image-20200416153355489](HTML元素的补充笔记.assets/image-20200416153355489.png)

### opacity

**此处新添加的opacity:0是因为display属性不能支持transition，所以采用opactiy:0**

设置 div 元素的不透明级别：

```
div
{
opacity:0.5;
}
```

opacity属性修改元素的不透明度，0表示完全透明 ，1表示完全不透明

规定不透明度。从 0.0 （完全透明）到 1.0（完全不透明）。

![image-20200416154112438](HTML元素的补充笔记.assets/image-20200416154112438.png)

**此处对于transition这个属性，可以同时设置多个属性的动画效果，例如上面的transition：首先设置了transform这个属性的动画，然后，在创建了基于margin-top的动画效果**



![image-20200416154538509](HTML元素的补充笔记.assets/image-20200416154538509.png)



![image-20200416154701859](HTML元素的补充笔记.assets/image-20200416154701859.png)





![image-20200416162327573](HTML元素的补充笔记.assets/image-20200416162327573.png)







## HTML5和CSS3的概念

![image-20200416160305386](HTML元素的补充笔记.assets/image-20200416160305386.png)

这段话的第一句可以删除掉，因为这里显示类型之类的描述有一个问题



### HTML5的新特性

![image-20200416160359474](HTML元素的补充笔记.assets/image-20200416160359474.png)

语义化元素，其实质可以理解为就是一个“div”，例如<header></header> 其在chrome中的显示机制就是一个普通的元素

如<header></header>然后在浏览器的代理样式中添加了display:block这样样式，是不是跟<span></span>套一个display:inline是一样的

![image-20200420210414370](HTML元素的补充笔记.assets/image-20200420210414370.png)



### 媒体元素 - video

![image-20200416160437722](HTML元素的补充笔记.assets/image-20200416160437722.png)







![image-20200416172040786](HTML元素的补充笔记.assets/image-20200416172040786.png)













![image-20200416171751438](HTML元素的补充笔记.assets/image-20200416171751438.png)



![image-20200416172545620](HTML元素的补充笔记.assets/image-20200416172545620.png)





![image-20200416172450999](HTML元素的补充笔记.assets/image-20200416172450999.png)





### 媒体元素-audio

![image-20200416160621666](HTML元素的补充笔记.assets/image-20200416160621666.png)



![image-20200416172933076](HTML元素的补充笔记.assets/image-20200416172933076.png)





![image-20200416173046497](HTML元素的补充笔记.assets/image-20200416173046497.png)



![image-20200416173028156](HTML元素的补充笔记.assets/image-20200416173028156.png)

![image-20200420213005744](HTML元素的补充笔记.assets/image-20200420213005744.png)





![image-20200420213431248](HTML元素的补充笔记.assets/image-20200420213431248.png)





![image-20200420213600337](HTML元素的补充笔记.assets/image-20200420213600337.png)





![image-20200420213950393](HTML元素的补充笔记.assets/image-20200420213950393.png)



### input元素的拓展

![image-20200416160709671](HTML元素的补充笔记.assets/image-20200416160709671.png)





![image-20200416174301817](HTML元素的补充笔记.assets/image-20200416174301817.png)





~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        input {
            display: block;
        }
    </style>
</head>
<body>
    <!-- placeholer input默认文字-->
    <input type="text" placeholder="默认输入文字">
    <!-- multiple 下拉多选 -->
    <select name="" id="" multiple>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
    </select>
    <!-- autofocus 自动获取焦点 -->
    <input type="text" autofocus>
    <!-- type="data" -->
    <input type="date">
    <!-- type="time"-->
    <input type="time">
    <!-- type="number" -->
    <input type="number">
    <!-- type="tel" -->
    <input type="tel">
    <!-- type="color" -->
    <input type="color">
    <!-- type="email" -->
    <input type="email">
</body>
</html>
~~~



![image-20200417103352248](HTML元素的补充笔记.assets/image-20200417103352248.png)



### 字体补充

![image-20200416160742913](HTML元素的补充笔记.assets/image-20200416160742913.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 从资源中引入设计好的字体资源 */
        @font-face {
            /* 给引入的字体资源取一个名字 */
            font-family: zw01;
            /* 利用统一资源定位符获取字体文件资源 */
            src: url("../source/Zhi_Mang_Xing/ZhiMangXing-Regular.ttf");
        }
        div{
            width: 100px;
            height: 100px;
            color:red;
            font-size: 30px;
            border:1px solid #000;
        }
        .box{
            /* 在元素的选择器中使用font-family属性，其值为之前所取的名字 */
            font-family: zw01;
        }
    </style>
</head>
<body>
    <div class="box">
        我是一个野指针，我没得对象
    </div>
    
</body>
</html>
~~~

![image-20200418173125659](HTML元素的补充笔记.assets/image-20200418173125659.png)



![image-20200417144446608](HTML元素的补充笔记.assets/image-20200417144446608.png)

![image-20200417144715420](HTML元素的补充笔记.assets/image-20200417144715420.png)



![image-20200417145306815](HTML元素的补充笔记.assets/image-20200417145306815.png)

**此处为了处理浏览器的兼容性问题，所以同时添加了多个字体文件，换言之，总有一个适合你的**



![image-20200417145512546](HTML元素的补充笔记.assets/image-20200417145512546.png)

**以上，可以同时设置多个自定义的字体，设置的样式均以往上相同，只是取的名字不同**



![image-20200417145632074](HTML元素的补充笔记.assets/image-20200417145632074.png)





![image-20200417145611008](HTML元素的补充笔记.assets/image-20200417145611008.png)



### @font-face的使用

![image-20200416160828033](HTML元素的补充笔记.assets/image-20200416160828033.png)



### 字体图标

![image-20200416160912858](HTML元素的补充笔记.assets/image-20200416160912858.png)

![image-20200417150033901](HTML元素的补充笔记.assets/image-20200417150033901.png)



此处有一个问题，如果有多个文字呢？是否就是有多个图标，也就是如何将图标插入到指定的内容中去，这是一个值得注意的点

#### 阿里巴巴图标库使用流程

##### 第一步添加入库

![image-20200417150857046](HTML元素的补充笔记.assets/image-20200417150857046.png)



![image-20200417151010487](HTML元素的补充笔记.assets/image-20200417151010487.png)



![image-20200417151107563](HTML元素的补充笔记.assets/image-20200417151107563.png)



![image-20200417151827183](HTML元素的补充笔记.assets/image-20200417151827183.png)



![image-20200417152002524](HTML元素的补充笔记.assets/image-20200417152002524.png)



![image-20200417152100209](HTML元素的补充笔记.assets/image-20200417152100209.png)



##### 第二步下载图标

![image-20200417152153646](HTML元素的补充笔记.assets/image-20200417152153646.png)



![image-20200417152350646](HTML元素的补充笔记.assets/image-20200417152350646.png)





![image-20200417152523421](HTML元素的补充笔记.assets/image-20200417152523421.png)

##### 第三步拷贝图标代码

![image-20200417152707042](HTML元素的补充笔记.assets/image-20200417152707042.png)



![image-20200417152751426](HTML元素的补充笔记.assets/image-20200417152751426.png)



![image-20200417152851755](HTML元素的补充笔记.assets/image-20200417152851755.png)



##### 第四步对字体图标进行相应的颜色大小设置

![image-20200417153005598](HTML元素的补充笔记.assets/image-20200417153005598.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>字体图标</title>
    <style>
        /* 引入阿里巴巴图标库设计的字体 */
        @font-face {
            /* 重新命名图标 */
            font-family:zw-alibabaicon;
            /* 同时添加多个字体资源，以便于兼容不同的浏览器 */
            src: url("../source/download/font_alibaba/iconfont.eot"),
                 url("../source/download/font_alibaba/iconfont.ttf"),
                 url("../source/download/font_alibaba/iconfont.woff"),
                 url("../source/download/font_alibaba/iconfont.woff2"),
                 url("../source/download/font_alibaba/iconfont.svg")
        }
        .box{
            width: 100px;
            height: 100px;
            border:1px solid red;
            margin:20px auto;
        }
        p{
            /* 引用相应的字体资源 */
            font-family: zw-alibabaicon;
            /* 对字体图标添加字体相关的样式 */
            font-weight: 700px;
            font-size: 20px;
            color:red;
        }
    </style>
</head>
<body>
    <!-- 测试字体图标方式一 -->
    <div class="box">
        <!-- 在对应的p标签中写入相应的图标对应的编码 -->
        <p>&#xe612;</p>
        <p>&#xe667;</p>
        <p>&#xe60f;</p>
        <p>&#xe63b;</p>
        <p>&#xe608;</p>
    </div>
    
</body>
</html>
~~~

![image-20200419160933458](HTML元素的补充笔记.assets/image-20200419160933458.png)



##### 第二种引入字体图标的方式

![image-20200417153408905](HTML元素的补充笔记.assets/image-20200417153408905.png)



###### 拷贝infont.css文件到相应的文件夹

![image-20200417153536517](HTML元素的补充笔记.assets/image-20200417153536517.png)



###### 在对应的html文件中引入css文件

![image-20200417153645021](HTML元素的补充笔记.assets/image-20200417153645021.png)

###### 在html中直接引用.infont的类

![image-20200417153813316](HTML元素的补充笔记.assets/image-20200417153813316.png)



###### 添加对应的图标代码

![image-20200417153904151](HTML元素的补充笔记.assets/image-20200417153904151.png)





![image-20200417153942887](HTML元素的补充笔记.assets/image-20200417153942887.png)



![image-20200417154130815](HTML元素的补充笔记.assets/image-20200417154130815.png)



###### 利用伪类来进行处理避免图标代码

![image-20200417154241697](HTML元素的补充笔记.assets/image-20200417154241697.png)





![image-20200417154409307](HTML元素的补充笔记.assets/image-20200417154409307.png)



![image-20200417154436034](HTML元素的补充笔记.assets/image-20200417154436034.png)

~~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../source/download/font_alibaba/iconfont.css">
    <title>Document</title>
    <style>
        .box{
            width: 100px;
            height: 100px;
            margin:20 auto;
        }
        /* 重新定义默认字体图标的颜色 */
        .iconfont{
            color:red;
        }
    </style>
</head>
<body>
    <div class="box">
        <p class="iconfont icon-gongju"></p>
        <p class="iconfont hongbao"></p>
        <p class="iconfont icon-cocktail"></p>
        <p class="iconfont icon-compass"></p>
        <p class="iconfont icon-CombinedShape"></p>
        <p class="iconfont icon-gongju"></p>
    </div>
    
</body>
</html> 
~~~~



![image-20200419183429490](HTML元素的补充笔记.assets/image-20200419183429490.png)





![image-20200417155028602](HTML元素的补充笔记.assets/image-20200417155028602.png)









### 动画补充

![image-20200416160952617](HTML元素的补充笔记.assets/image-20200416160952617.png)

###### transition动画

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            height: 200px;
            width: 200px;
            background-color: red;
            margin:100px auto;
            transition: transform 1s linear;
        }
        .box:hover {
            transform : scale(1.5) translate(200px,0) rotate(45deg)

        }
    </style>
</head>
<body>
    <div class="box">

    </div>
    
</body>
</html>
~~~





![image-20200419202443979](HTML元素的补充笔记.assets/image-20200419202443979.png)





###### animation动画

![image-20200417162117513](HTML元素的补充笔记.assets/image-20200417162117513.png)



###### @keyframes

![image-20200417162322090](HTML元素的补充笔记.assets/image-20200417162322090.png)



![image-20200417162537451](HTML元素的补充笔记.assets/image-20200417162537451.png)





![image-20200417162637394](HTML元素的补充笔记.assets/image-20200417162637394.png)



![image-20200417162733424](HTML元素的补充笔记.assets/image-20200417162733424.png)



![image-20200417163052914](HTML元素的补充笔记.assets/image-20200417163052914.png)



![image-20200417163134481](HTML元素的补充笔记.assets/image-20200417163134481.png)



![image-20200417163347747](HTML元素的补充笔记.assets/image-20200417163347747.png)







### animation的属性

![image-20200416161041244](HTML元素的补充笔记.assets/image-20200416161041244.png)

![image-20200417165411525](HTML元素的补充笔记.assets/image-20200417165411525.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

        .box{
            width: 100px;
            height: 100px;
            margin:200px auto;
            background-color: red;;
        }
        .box:hover{
            animation: zwanimation 1s ease infinite;
        }
        @keyframes zwanimation {
            0%{
                transform: translate(0,0) scale(1)
            }

            25%{
                transform: translate(100,0) scale(1.5)
            }

            50%{
                transform: translate(100px,100px) scale(2)
            }

            75%{
                transform: translate(0,100px) scale(1.5)
            }
            100%{
                transform: translate(0,0) scale(1)
            }
            
        }
    </style>
</head>
<body>
    <div class="box">

    </div>
    
</body>
</html>
~~~



![image-20200419204157182](HTML元素的补充笔记.assets/image-20200419204157182.png)







### 3D动画

![image-20200416161115408](HTML元素的补充笔记.assets/image-20200416161115408.png)





### flex布局

![image-20200416161214806](HTML元素的补充笔记.assets/image-20200416161214806.png)





![image-20200416161224555](HTML元素的补充笔记.assets/image-20200416161224555.png)







![image-20200416161233448](HTML元素的补充笔记.assets/image-20200416161233448.png)



#### flex container

##### flex-direction

![image-20200416161245549](HTML元素的补充笔记.assets/image-20200416161245549.png)



##### justify-content

![image-20200416161302549](HTML元素的补充笔记.assets/image-20200416161302549.png)



##### align-items

![image-20200416161313644](HTML元素的补充笔记.assets/image-20200416161313644.png)





##### flex-wrap

![image-20200416161333216](HTML元素的补充笔记.assets/image-20200416161333216.png)

##### flex-flow



##### align-content

![image-20200416161420988](HTML元素的补充笔记.assets/image-20200416161420988.png)





#### flex item

##### order

![image-20200416161438560](HTML元素的补充笔记.assets/image-20200416161438560.png)



##### align-self

![image-20200416161449636](HTML元素的补充笔记.assets/image-20200416161449636.png)



##### flex-grow

![image-20200416161458668](HTML元素的补充笔记.assets/image-20200416161458668.png)





##### flex-shrink

![image-20200416161512061](HTML元素的补充笔记.assets/image-20200416161512061.png)





##### flex-basis

![image-20200416161521252](HTML元素的补充笔记.assets/image-20200416161521252.png)



##### flex

![image-20200416161531414](HTML元素的补充笔记.assets/image-20200416161531414.png)







![image-20200416161541260](HTML元素的补充笔记.assets/image-20200416161541260.png)





https://vuejs.org/v2/guide/list.html#key

JHO-Y5ISS-6S

https://www.crx4chrome.com/



## 浏览器的私有前缀

![image-20200417165809868](HTML元素的补充笔记.assets/image-20200417165809868.png)

**前缀不需要自己手动添加，一般在项目中通过webpack可以打包自动在相应的属性上面添加对应浏览器的后缀名。**



![image-20200417220927572](HTML元素的补充笔记.assets/image-20200417220927572.png)







## 文字省略号的显示

![image-20200417220942556](HTML元素的补充笔记.assets/image-20200417220942556.png)

![image-20200417171509852](HTML元素的补充笔记.assets/image-20200417171509852.png)



![image-20200417172808625](HTML元素的补充笔记.assets/image-20200417172808625.png)



![image-20200417173130156](HTML元素的补充笔记.assets/image-20200417173130156.png)

### 最多显示一行文字且有点数表示剩余文字

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            width: 200px;
            height: 200px;
            background-color: red;
            /* 禁止换行 */
            white-space: nowrap;
            /* 溢出的那行用...表示 */
            text-overflow: ellipsis;
            /* 超出父元素部分隐藏 */
            overflow: hidden;
        }
    </style>
</head>
<body>
    <div class="box">
2000年1月，李彦宏以超链分析专利为技术基础，带着融到的第一笔风险投资120万美元，
在北大资源宾馆租了两间房，与好友徐勇先生共同创建百度。9个月之后，风险投资商德丰杰联合IDG又向百度投入了1000万美元。 [1] 
2001年，李彦宏在百度董事会上说服股东，将百度转型为面向终端用户的独立搜索引擎网站，并实施“闪电计划”对百度实行技术升级，
使百度成为全球第二大独立搜索引擎，在中文搜索引擎中名列第一。 [1] 
2005年8月，百度在美国纳斯达克成功上市，成为全球资本市场最受关注的上市公司之一。 [1] 
2009年，李彦宏提出框计算技术理念，并陆续推出“数据开放平台”、“应用开放平台”，构建互联网全新产业生态。 [12] 
2013年，李彦宏在百度建设中国首个深度学习研究院，成为中国乃至全球率先推动人工智能前沿科技研究的企业家。 [13] 
2015年，李彦宏倡议在国家层面建立“中国大脑”计划，以人工智能为核心抢占新一轮科技革命制高点。 [14] 
2017年，百度牵头筹建深
    </div>
</body>
</html>
~~~

![image-20200419205724340](HTML元素的补充笔记.assets/image-20200419205724340.png)

### 最多显示两行文字且有点数表示剩余文字

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box
        {
            width: 200px;
            height: 43px;
            background-color: red;
            color:#fff;
            /* 多行超出显示省略号 */
            overflow: hidden;
            text-overflow: elipsis;
            display:-webkit-box;
            /* 2行 */
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;

          
        }
/* 注意：-webkit-line-clamp是一个 不规范的属性
（unsupported WebKit property），
它没有出现在 CSS 规范草案中。只适用于WebKit内核的浏览器，
因此firebox、ie等并不支持该属性。 */

    </style>
</head>
<body>
    <div class="box">
        2000年1月，李彦宏以超链分析专利为技术基础，带着融到的第一笔风险投资120万美元，
        在北大资源宾馆租了两间房，与好友徐勇先生共同创建百度。9个月之后，风险投资商德丰杰联合IDG又向百度投入了1000万美元。 [1] 
        2001年，李彦宏在百度董事会上说服股东，将百度转型为面向终端用户的独立搜索引擎网站，并实施“闪电计划”对百度实行技术升级，
        使百度成为全球第二大独立搜索引擎，在中文搜索引擎中名列第一。 [1] 
        2005年8月，百度在美国纳斯达克成功上市，成为全球资本市场最受关注的上市公司之一。 [1] 
        2009年，李彦宏提出框计算技术理念，并陆续推出“数据开放平台”、“应用开放平台”，构建互联网全新产业生态。 [12] 
        2013年，李彦宏在百度建设中国首个深度学习研究院，成为中国乃至全球率先推动人工智能前沿科技研究的企业家。 [13] 
        2015年，李彦宏倡议在国家层面建立“中国大脑”计划，以人工智能为核心抢占新一轮科技革命制高点。 [14] 
        2017年，百度牵头筹建深
    </div>
</body>
</html>
~~~



![image-20200419211244113](HTML元素的补充笔记.assets/image-20200419211244113.png)









## 移动端适配-视口的设置

![image-20200417221009415](HTML元素的补充笔记.assets/image-20200417221009415.png)

![image-20200417173619405](HTML元素的补充笔记.assets/image-20200417173619405.png)



![image-20200417173807880](HTML元素的补充笔记.assets/image-20200417173807880.png)



![image-20200417203139209](HTML元素的补充笔记.assets/image-20200417203139209.png)



![image-20200417203228889](HTML元素的补充笔记.assets/image-20200417203228889.png)





![image-20200417203331024](HTML元素的补充笔记.assets/image-20200417203331024.png)





![image-20200417203437373](HTML元素的补充笔记.assets/image-20200417203437373.png)





![image-20200417203555884](HTML元素的补充笔记.assets/image-20200417203555884.png)





![image-20200417203714843](HTML元素的补充笔记.assets/image-20200417203714843.png)



![image-20200417204220601](HTML元素的补充笔记.assets/image-20200417204220601.png)



![image-20200417204420175](HTML元素的补充笔记.assets/image-20200417204420175.png)





![image-20200417204550869](HTML元素的补充笔记.assets/image-20200417204550869.png)





![image-20200417204833480](HTML元素的补充笔记.assets/image-20200417204833480.png)





![image-20200417205203538](HTML元素的补充笔记.assets/image-20200417205203538.png)





![image-20200417205436959](HTML元素的补充笔记.assets/image-20200417205436959.png)





![image-20200417205658512](HTML元素的补充笔记.assets/image-20200417205658512.png)



![image-20200417205830562](HTML元素的补充笔记.assets/image-20200417205830562.png)



![image-20200417205853903](HTML元素的补充笔记.assets/image-20200417205853903.png)



![image-20200417210325889](HTML元素的补充笔记.assets/image-20200417210325889.png)





![image-20200417210531840](HTML元素的补充笔记.assets/image-20200417210531840.png)







![image-20200417210649530](HTML元素的补充笔记.assets/image-20200417210649530.png)





## 不同的单位相对谁？



![image-20200417211459336](HTML元素的补充笔记.assets/image-20200417211459336.png)



![image-20200417211527012](HTML元素的补充笔记.assets/image-20200417211527012.png)





![image-20200417211956648](HTML元素的补充笔记.assets/image-20200417211956648.png)





![image-20200417212103966](HTML元素的补充笔记.assets/image-20200417212103966.png)



![image-20200417212307320](HTML元素的补充笔记.assets/image-20200417212307320.png)



## rem单位的使用

![image-20200417221024534](HTML元素的补充笔记.assets/image-20200417221024534.png)



![image-20200417221051298](HTML元素的补充笔记.assets/image-20200417221051298.png)





![image-20200417221101457](HTML元素的补充笔记.assets/image-20200417221101457.png)







![image-20200417212726608](HTML元素的补充笔记.assets/image-20200417212726608.png)



![image-20200417212758765](HTML元素的补充笔记.assets/image-20200417212758765.png)





![image-20200417212825798](HTML元素的补充笔记.assets/image-20200417212825798.png)





![image-20200417213021109](HTML元素的补充笔记.assets/image-20200417213021109.png)





## rem如何进行移动端的适配

![image-20200417213530993](HTML元素的补充笔记.assets/image-20200417213530993.png)



![image-20200417213728647](HTML元素的补充笔记.assets/image-20200417213728647.png)





![image-20200417214441872](HTML元素的补充笔记.assets/image-20200417214441872.png)



![image-20200417214605227](HTML元素的补充笔记.assets/image-20200417214605227.png)

这里使用媒体查询的时候，不能使用min-width作为单位，应为它的比较对象应该为屏幕固定的宽度，例如iphone为375

那么其最大值应该为375.



## less的基本使用

![image-20200417221126920](HTML元素的补充笔记.assets/image-20200417221126920.png)







![image-20200417215916193](HTML元素的补充笔记.assets/image-20200417215916193.png)



![image-20200417220040314](HTML元素的补充笔记.assets/image-20200417220040314.png)





![image-20200417220154553](HTML元素的补充笔记.assets/image-20200417220154553.png)



![image-20200417220329985](HTML元素的补充笔记.assets/image-20200417220329985.png)





## 实体

所谓的实体，其实质就是转义字符

![image-20200420204941790](HTML元素的补充笔记.assets/image-20200420204941790.png)

常用实体介绍：（想不起来可以去查看w3c）

\&nbsp;表示空格

\&lt;表示&lt;

\&gt;表示&gt;

\&copy;表示&copy;





## 图片的格式

### 常见图片格式以及优缺点

![image-20200420211517982](HTML元素的补充笔记.assets/image-20200420211517982.png)

### base64图片格式

![image-20200420211915948](HTML元素的补充笔记.assets/image-20200420211915948.png)

### 普通图片转base64位图片格式以及使用

![image-20200420212000029](HTML元素的补充笔记.assets/image-20200420212000029.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="./girl.jpg">
    <img src="data:image/jpeg;base64,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e8MHM/MKhZjL5zUBP7cy1ieM/wDRoj3UPu4R1+K10UbTpjhgigbwwxtYP5RssiIoSIiIC8SMLwBxFo8dupHlv4L2iDy1oY0NaNgOgC9IiAiIgIiICIiAiIgIiIMDqzO+bPEXwWGHds0Lix7T5ghW/A9pepMLwxZJrc1THLid9Cdo9/R3xG/qquibQ7zpbXWA1OBHj7gjt7fSqWPoSj4ePw3VlX5asVYpyHPaRI07tkadnN9QVatOdouotPcMN8nNY9vLaR207B6O+18d/eFaJNO9oq/pbWWE1TDvi7YM4G76sv0ZWe9vj7xuFYFKBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEXwkAEk7AcySg+qPzebxmBpOuZe5FVgHQvPNx8gOpPoFRNY9qtalJJj9LsZkbzd2vsE/uIT7x9c+g5evguV3ZLeVvG/mrcl62ej5Pqs9Gt6AKJnQuWpe1PLZfjr6ahdjaZ5e2TtBmePNrejffzPuVHZXHfvsTPknsvO755ncb3Hz3KzoomUiIihIiIgIiICIiAiIgIiICIiAiIgIiICL5uN9vFfUBERAREQEREGCSu10zLET3wWYzuyeFxa9p89wr3pftVyWJLKuqozdpjkL8Lf3jP67fH3jn71S18UxKH6TxWUo5iky7i7UVqs/wCrJG7ce4+R9DzW4vzHiruS09dN7T9o1Zif3kJ5xTDyc3p8fyXYdE9pWO1DIyhkWDG5fp3EjvoSnzjd4+48/epiUL2iIpBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEVR11ryhpSIQNb7ZlZW7w02Hn6Oefst/E+HmAm9QZ7G6dx772XtMghbybvzc8+TR1J9y4hq7W+X1eX14+8xuGPIV2u2lnHnIR4eg5e/qoXJ3chnciclnrHtFrpGwco4R91o8PevKrMp08RRMhjDImBrR4Be0RQkREQERfCdhzQfUXwHcbjovqAiIgIiICIiAiIgIiICIiAiIgw2SWNEzBuWc3AeI8f81la4PaHNIII3BHiF9WpWPcTvqn6v14vd4j4H8CiG2iIiRERAREQEREBYbFeKwwNlbvtzDhyLT5grMiC3aO7TL+AMdHUzpL2MH0WX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NRLnW3aA7pgsQ0+brpP5BP2Z2iWer9PU2+Y7yQj9F0VFlHZ/Dx0qv6e/m51/oHqa/wD/ANW1rYYw9Y6FcRfjutmj2TaYhkE1+O3k5vv3bBdv8Bsr4i6KYcdPZjTOb2nrLSxuIxuKjEeNoVqrB4QxBv5LdRFpERHRUREUgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP/9k=">
</body>
</html>
~~~



![image-20200424095100144](HTML元素的补充笔记.assets/image-20200424095100144.png)





## 内联框架 -iframe

![image-20200420212403454](HTML元素的补充笔记.assets/image-20200420212403454.png)



##  文档流

![image-20200420223252085](HTML元素的补充笔记.assets/image-20200420223252085.png)



## 浏览器默认样式

![image-20200420225300286](HTML元素的补充笔记.assets/image-20200420225300286.png)



## 高度塌陷和BFC

![image-20200420232544538](HTML元素的补充笔记.assets/image-20200420232544538.png)





![image-20200420232717641](HTML元素的补充笔记.assets/image-20200420232717641.png)





![image-20200420232848272](HTML元素的补充笔记.assets/image-20200420232848272.png)









![image-20200420232952697](HTML元素的补充笔记.assets/image-20200420232952697.png)





![image-20200420233015308](HTML元素的补充笔记.assets/image-20200420233015308.png)





![image-20200420233036342](HTML元素的补充笔记.assets/image-20200420233036342.png)





![image-20200420233110616](HTML元素的补充笔记.assets/image-20200420233110616.png)

### 开启BFC的几种常见方式

1.设置浮动(不推荐)

2.设置display:inline-block(不推荐)

3.将overflow的值设置为非visibility .比较适合的是hidden

注意，给元素设置BFC都会对页面布局产生或多或少的问题，而我们最好采取影响最小的一种，也就是overflow:hidden;



## BFC演示

![image-20200420233431205](HTML元素的补充笔记.assets/image-20200420233431205.png)





![image-20200420233606579](HTML元素的补充笔记.assets/image-20200420233606579.png)

.bo2上移一行被.box1覆盖了。



![image-20200420233703362](HTML元素的补充笔记.assets/image-20200420233703362.png)

可以知道开启BFC之后，就与与之一行，类似于之前的display:inline，但是有一个问题

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin: 0;
            padding: 0;        }
        div{
            width: 400px;
            height: 200px;
        }
        .box1{
            float: left;
            background-color:blueviolet;
        }
        .box2{
            background-color: blue;
            /* overflow: hidden; */
            display: inline-block;
        }
    </style>
</head>
<body>
    <div class="box1"></div>
    <div class="box2"></div> 
</body>
</html>
~~~



![image-20200424103805183](HTML元素的补充笔记.assets/image-20200424103805183.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin: 0;
            padding: 0;        }
        div{
            width: 400px;
            height: 200px;
        }
        .box1{
            background-color:blueviolet;
            display: inline-block;
        }
        .box2{
            background-color: blue;
            float: left;
            /* overflow: hidden; */
          
        }
    </style>
</head>
<body>
    <div class="box1"></div>
    <div class="box2"></div> 
</body>
</html>
~~~

![image-20200424104223206](HTML元素的补充笔记.assets/image-20200424104223206.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin: 0;
            padding: 0;        }
        div{
            width: 400px;
            height: 200px;
        }
        .box1{
            background-color:blueviolet;
            /* overflow: hidden; */
            display: inline-block;
        }
        .box2{
            background-color: blue;
         
            float: left;
          
        }
    </style>
</head>
<body>
    <div class="box1"></div>
    <div class="box2"></div> 
</body>
</html>
~~~

![image-20200424104944081](HTML元素的补充笔记.assets/image-20200424104944081.png)



## 行高

![image-20200421002202265](HTML元素的补充笔记.assets/image-20200421002202265.png)





## 背景补充

 background-color也包含了border部分，例如以下:

![image-20200421143120678](HTML元素的补充笔记.assets/image-20200421143120678.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            width: 200px;
            height: 200px;
            background-color: red;
            border:40px purple double;
        }
    </style>
</head>
<body>
    <div class="container">
    </div>
</body>
</html>
~~~

![image-20200424105439046](HTML元素的补充笔记.assets/image-20200424105439046.png)



### background-clip:设置背景图的范围

#### border-box:默认值，背景会出现在边框的下面

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
         .container{
            width: 200px;
            height: 200px;
            background-color: red;
            border:40px purple double;
            background-image: url("../22_图片/img1.png");
            background-repeat: no-repeat;
            background-size: 100px;
            /* 默认值 */
            background-clip: border-box;
        }
    </style>
</head>
<body>
    <div class="container">

    </div>
</body>
</html>
~~~



![image-20200424110056886](HTML元素的补充笔记.assets/image-20200424110056886.png)



![image-20200421143239637](HTML元素的补充笔记.assets/image-20200421143239637.png)

#### padding-box：背景不会出现在边框，只出现在内容区和内边距中

![image-20200421143341213](HTML元素的补充笔记.assets/image-20200421143341213.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            width: 200px;
            height: 200px;
            background-color: red;
            border:20px purple double;
            background-image: url("../22_图片/img1.png");
            background-repeat: no-repeat;
            background-size: contain;
            padding:40px;
            /* padding-box*/
            background-clip: padding-box;
        }
        .content{
            width: 50px;
            height: 50px;
            background-color: blueviolet;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="content"></div>
    </div>
</body>
</html>
~~~



![image-20200424111541693](HTML元素的补充笔记.assets/image-20200424111541693.png)



#### content-box：背景只会出现在内容区域



![image-20200421143405615](HTML元素的补充笔记.assets/image-20200421143405615.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            width: 200px;
            height: 200px;
            background-color: red;
            border:20px purple double;
            background-image: url("../22_图片/img1.png");
            background-repeat: no-repeat;
            background-size: contain;
            padding:40px;
            /* padding-box*/
            background-clip: content-box;
        }
        .content{
            width: 50px;
            height: 50px;
            background-color: blueviolet;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="content"></div>
    </div>
</body>
</html>
~~~



![image-20200424112004885](HTML元素的补充笔记.assets/image-20200424112004885.png)



### background-origin:背景图片的偏移量计算的原点

![image-20200421143527929](HTML元素的补充笔记.assets/image-20200421143527929.png)



![image-20200421143808707](HTML元素的补充笔记.assets/image-20200421143808707.png)



#### border-box默认值,background-position从边框开始计算

![image-20200424113454299](HTML元素的补充笔记.assets/image-20200424113454299.png)



#### padding-box,background-position从内边距开始计算

![image-20200424113541487](HTML元素的补充笔记.assets/image-20200424113541487.png)



#### content-box,background-position从内容区开始计算

![image-20200424113612996](HTML元素的补充笔记.assets/image-20200424113612996.png)



## 线性渐变

#### linear-gradient()

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            width: 200px;
            height: 200px;
            /* 报错，background-color没有这个属性 */
            /* background-color: linear-gradient(red,yellow); */
           background-image: linear-gradient(red,yellow);
        }
    </style>
</head>
<body>
    <div class="container">
    </div>
</body>
</html>
~~~



![image-20200424115341686](HTML元素的补充笔记.assets/image-20200424115341686.png)



#### 从上到下渐变

![image-20200421151525686](HTML元素的补充笔记.assets/image-20200421151525686.png)



#### 从左到右渐变



![image-20200421152011656](HTML元素的补充笔记.assets/image-20200421152011656.png)



#### 组合渐变

![image-20200421152200024](HTML元素的补充笔记.assets/image-20200421152200024.png)



#### turn

![image-20200421152250374](HTML元素的补充笔记.assets/image-20200421152250374.png)



#### 多种颜色渐变



![image-20200421152530982](HTML元素的补充笔记.assets/image-20200421152530982.png)



#### 指点渐变的颜色的范围

![image-20200421152755890](HTML元素的补充笔记.assets/image-20200421152755890.png)





![image-20200421152846549](HTML元素的补充笔记.assets/image-20200421152846549.png)





![image-20200421153051436](HTML元素的补充笔记.assets/image-20200421153051436.png)





## 径向渐变

#### radial-gradient()

![image-20200421153609945](HTML元素的补充笔记.assets/image-20200421153609945.png)



#### 渐变范围

![image-20200421153905532](HTML元素的补充笔记.assets/image-20200421153905532.png)



#### 渐变位置

![image-20200421153931745](HTML元素的补充笔记.assets/image-20200421153931745.png)



#### closest-side

![image-20200421154131180](HTML元素的补充笔记.assets/image-20200421154131180.png)



#### 径向渐变总结

![image-20200421154426855](HTML元素的补充笔记.assets/image-20200421154426855.png)







## 过渡补充

![image-20200421155356421](HTML元素的补充笔记.assets/image-20200421155356421.png)





#### transition-property:过渡属性

#### transition-duration:动画时间

![image-20200421160219757](HTML元素的补充笔记.assets/image-20200421160219757.png)



![image-20200421160403161](HTML元素的补充笔记.assets/image-20200421160403161.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            width: 500px;
            height: 400px;
            background-color: purple;
            margin: 0 auto;
        }
        .box1{
            width: 200px;
            height: 150px;
            background-color: red;
            margin-left:auto;
            /* 过渡属性名称 */
            transition-property: all;
            transition-duration: 1000s;
            transition-timing-function:ease-in
        }
       .container:hover .box1{
            margin-left: 0;
        }
    </style>

</head>
<body>
    <div class="container">
        <div class="box1"></div>
    </div>
</body>
</html>
~~~

此时.box1的动画无法控制时间以及速度。

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            width: 800px;
            height: 400px;
            background-color: purple;
            margin: 0 auto;
        }
        .box1{
            width: 200px;
            height: 150px;
            background-color: red;
            margin-left:0px;
            /* 过渡属性名称 */
            transition-property: all;
            /* 过渡持续时间 */
            transition-duration: 1000ms;
            /* 过渡贝塞尔曲线，也就是速度曲线 */
            transition-timing-function:ease-in
        }
       .container:hover .box1{
            margin-left: 600px;
        }
    </style>

</head>
<body>
    <div class="container">
        <div class="box1"></div>
    </div>
</body>
</html>
~~~

不使用margin-left的值为auto.而是具体的宽度的时候，就可以了。

margin-left:auto 此时，整个父元素的宽度都给了margin-left

![image-20200424144038521](HTML元素的补充笔记.assets/image-20200424144038521.png)



#### 属性，时间值单独设置



![image-20200421160533747](HTML元素的补充笔记.assets/image-20200421160533747.png)

#### transition-timing-function() :过渡速率曲线函数

##### ease:默认值，慢速开始，先加速，再减速

##### linear:匀速运动

##### ease-in: 加速运动

##### ease-out:减速运动

##### ease-in-out:先加速，后减速

![image-20200421160956676](HTML元素的补充笔记.assets/image-20200421160956676.png)

##### 贝塞尔曲线函数

https://cubic-bezier.com

cubic-bezier(.17,.67,.83,.67)

![image-20200421161151687](HTML元素的补充笔记.assets/image-20200421161151687.png)



##### step

| step-start            | 相当于steps(1,start)                                         |
| --------------------- | ------------------------------------------------------------ |
| step-end              | 相当于steps(1,end)                                           |
| steps(int,start\|end) | 指定带有两个参数的步进功能。第一个参数指定函数中的间隔数。它必须是正整数（大于0）。第二个参数是可选的，它是值“start”或“end”，并指定值在区间内发生变化的点。如果省略第二个参数，则给出值“end” |

![image-20200421161603701](HTML元素的补充笔记.assets/image-20200421161603701.png)

~~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            width: 700px;
            height: 500px;
            background-color: red;
            margin:30px auto;
        }
        .box1{
            width: 200px;
            height: 150px;
            background-color: purple;
            margin-left: 0px;
            transition-property:margin-left;
            transition-duration:5s;
            /* steps:后面的end|start作用就是
            间隔一秒之后再步进，还是先步进再间隔一秒 */
            transition-timing-function:steps(5,start)

        }
        .box2{
            width: 200px;
            height: 150px;
            background-color:green;
            margin-left: 0px;
            transition-property:margin-left;
            transition-duration:5s;
            /* 注释步进函数 */
            /* transition-timing-function:steps(5,start) */
        }
        .container:hover .box1,.container:hover .box2{
            margin-left:500px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box1"></div>
        <div class="box2"></div>
    </div>
</body>
</html>
~~~~

![image-20200424151151375](HTML元素的补充笔记.assets/image-20200424151151375.png)



## 米兔动画效果

![image-20200421162458834](HTML元素的补充笔记.assets/image-20200421162458834.png)







## 动画补充

### animation-name:动画名称

### animation-duration:动画执行时间

![image-20200421163110929](HTML元素的补充笔记.assets/image-20200421163110929.png)



### animation-timing-function:动画执行的贝塞尔曲线

### animation-iteration-count:动画执行的次数

### animation-delay:动画的延时

infinite无限次数

![image-20200421163406305](HTML元素的补充笔记.assets/image-20200421163406305.png)





### animation-direction:指定动画的运行方向

### animation-play-state:设置动画的执行状态

![image-20200421163738134](HTML元素的补充笔记.assets/image-20200421163738134.png)



### 

### animation-fill-mode:动画的填充模式

![image-20200421164127379](HTML元素的补充笔记.assets/image-20200421164127379.png)





## 奔跑的少年

![image-20200421164519963](HTML元素的补充笔记.assets/image-20200421164519963.png)



## 关键帧

![image-20200421165112244](HTML元素的补充笔记.assets/image-20200421165112244.png)



![image-20200421165407685](HTML元素的补充笔记.assets/image-20200421165407685.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=di, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            width: 900px;
            height: 600px;
            background-color: indianred;
            margin:0 auto;
        }
        .container div{
            float: left;
            margin-right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            /* 动画设置 */
            animation-name: Keyframes;
            animation-duration: 2s;
            animation-timing-function: ease-in;
            animation-iteration-count:infinite;
            /* 设置从0% 到100% 时是否返回以及如何返回 */
            animation-direction:alternate;
            animation-fill-mode: forwards;

        }
        /* 鼠标放入暂停 */
        .container:hover div{
            animation-play-state:paused
        }
        .container .box1{
            background-color: red;
        }
        .container .box2{
            background-color: orange;
            animation-delay: 0.2s;
        } .container .box3{
            background-color: yellow;
            animation-delay: 0.4s;
        } .container .box4{
            background-color: green;
            animation-delay: 0.6s;
        } .container .box5{
            background-color: cyan;
            animation-delay: 0.8s;
        } .container .box6{
            background-color: blue;
            animation-delay: 1.0s;
        } .container .box7{
            background-color:purple;
            animation-delay: 1.2s;
        } .container .box8{
            background-color:brown;
            animation-delay: 1.4s;
        }
        @keyframes Keyframes {
            0%{
                margin-top: 0;
            }
            20%,60%,100%{
                margin-top: 500px;
                transition-timing-function: ease-in;
            }
            40%{
                margin-top:100px
            }
            80%{
                margin-top: 200px;
            }  
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box1"></div>
        <div class="box2"></div>
        <div class="box3"></div>
        <div class="box4"></div>
        <div class="box5"></div>
        <div class="box6"></div>
        <div class="box7"></div>
        <div class="box8"></div>
    </div>
</body>
</html>
~~~

![image-20200424164729218](HTML元素的补充笔记.assets/image-20200424164729218.png)







## 变形平移补充

### 当元素的大小没有确定的时候，采用居中方法

![image-20200421170007063](HTML元素的补充笔记.assets/image-20200421170007063.png)



![image-20200421170743094](HTML元素的补充笔记.assets/image-20200421170743094.png)



![image-20200421171041548](HTML元素的补充笔记.assets/image-20200421171041548.png)







![image-20200421171155465](HTML元素的补充笔记.assets/image-20200421171155465.png)





![image-20200421171453279](HTML元素的补充笔记.assets/image-20200421171453279.png)





## 鸭子表

![image-20200421172247289](HTML元素的补充笔记.assets/image-20200421172247289.png)



![image-20200421172441836](HTML元素的补充笔记.assets/image-20200421172441836.png)





![image-20200421172511541](HTML元素的补充笔记.assets/image-20200421172511541.png)





![image-20200421172551955](HTML元素的补充笔记.assets/image-20200421172551955.png)





![image-20200421172713074](HTML元素的补充笔记.assets/image-20200421172713074.png)







![image-20200421172806726](HTML元素的补充笔记.assets/image-20200421172806726.png)







![image-20200421173018259](HTML元素的补充笔记.assets/image-20200421173018259.png)









![image-20200421173303033](HTML元素的补充笔记.assets/image-20200421173303033.png)





## 复仇者联盟

![image-20200421174020542](HTML元素的补充笔记.assets/image-20200421174020542.png)





![image-20200421174414894](HTML元素的补充笔记.assets/image-20200421174414894.png)



、

![image-20200421174707822](HTML元素的补充笔记.assets/image-20200421174707822.png)





![image-20200421174800743](HTML元素的补充笔记.assets/image-20200421174800743.png)





![image-20200421174859577](HTML元素的补充笔记.assets/image-20200421174859577.png)







![image-20200421175000717](HTML元素的补充笔记.assets/image-20200421175000717.png)





![image-20200421175042574](HTML元素的补充笔记.assets/image-20200421175042574.png)



## 聊聊像素

![image-20200421203431728](HTML元素的补充笔记.assets/image-20200421203431728.png)





![image-20200421203711597](HTML元素的补充笔记.assets/image-20200421203711597.png)





![image-20200421203814731](HTML元素的补充笔记.assets/image-20200421203814731.png)





![image-20200421203854847](HTML元素的补充笔记.assets/image-20200421203854847.png)



![image-20200421204258203](HTML元素的补充笔记.assets/image-20200421204258203.png)



![image-20200421204607442](HTML元素的补充笔记.assets/image-20200421204607442.png)







## 手机像素

![image-20200421205331754](HTML元素的补充笔记.assets/image-20200421205331754.png)





![image-20200421205444190](HTML元素的补充笔记.assets/image-20200421205444190.png)





![image-20200421205656473](HTML元素的补充笔记.assets/image-20200421205656473.png)





![image-20200421205802903](HTML元素的补充笔记.assets/image-20200421205802903.png)







![image-20200421205854187](HTML元素的补充笔记.assets/image-20200421205854187.png)





![image-20200421210212590](HTML元素的补充笔记.assets/image-20200421210212590.png)







## 完美视口



![image-20200421211427044](HTML元素的补充笔记.assets/image-20200421211427044.png)







## VW单位

![image-20200421212418004](HTML元素的补充笔记.assets/image-20200421212418004.png)



![image-20200421212822732](HTML元素的补充笔记.assets/image-20200421212822732.png)





![image-20200421212933229](HTML元素的补充笔记.assets/image-20200421212933229.png)





## VW适配

![image-20200421213552394](HTML元素的补充笔记.assets/image-20200421213552394.png)





![image-20200421214537379](HTML元素的补充笔记.assets/image-20200421214537379.png)





<img src="HTML元素的补充笔记.assets/image-20200421220844871.png" alt="image-20200421220844871" style="zoom: 150%;" />





## 移动端页面部分

![image-20200421221852236](HTML元素的补充笔记.assets/image-20200421221852236.png)







![image-20200421222002251](HTML元素的补充笔记.assets/image-20200421222002251.png)







![image-20200421222116053](HTML元素的补充笔记.assets/image-20200421222116053.png)





![image-20200421222434210](HTML元素的补充笔记.assets/image-20200421222434210.png)



![image-20200421222541738](HTML元素的补充笔记.assets/image-20200421222541738.png)



![image-20200421223051575](HTML元素的补充笔记.assets/image-20200421223051575.png)





![image-20200421223822050](HTML元素的补充笔记.assets/image-20200421223822050.png)





![image-20200421224046145](HTML元素的补充笔记.assets/image-20200421224046145.png)



![image-20200421225608393](HTML元素的补充笔记.assets/image-20200421225608393.png)





![image-20200421230055011](HTML元素的补充笔记.assets/image-20200421230055011.png)



![image-20200421230345484](HTML元素的补充笔记.assets/image-20200421230345484.png)





![image-20200421230613200](HTML元素的补充笔记.assets/image-20200421230613200.png)







## 媒体查询简介

![image-20200421231514952](HTML元素的补充笔记.assets/image-20200421231514952.png)









![image-20200421231712319](HTML元素的补充笔记.assets/image-20200421231712319.png)





![image-20200421232240772](HTML元素的补充笔记.assets/image-20200421232240772.png)





![image-20200421233018747](HTML元素的补充笔记.assets/image-20200421233018747.png)



![image-20200421233102253](HTML元素的补充笔记.assets/image-20200421233102253.png)





![image-20200421233208380](HTML元素的补充笔记.assets/image-20200421233208380.png)









