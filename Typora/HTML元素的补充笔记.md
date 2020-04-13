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





#### 浮动的规则二

![image-20200412203359642](HTML元素的补充笔记.assets/image-20200412203359642.png)





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