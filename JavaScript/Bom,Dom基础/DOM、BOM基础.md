# DOM、BOM基础

# Web APIs简介

![image-20200427103402409](DOM、BOM基础.assets/image-20200427103402409.png)



![image-20200427103545158](DOM、BOM基础.assets/image-20200427103545158.png)



## 1. Web APIs和JS基础关联性

### 1.1 JS的组成

![image-20200427103729658](DOM、BOM基础.assets/image-20200427103729658.png)





### 1.2 JS基础阶段以及Web APIs阶段

![image-20200427103749700](DOM、BOM基础.assets/image-20200427103749700.png)



## 2. API和Web API

### 2.1 API

![image-20200427104116619](DOM、BOM基础.assets/image-20200427104116619.png)



### 2.2 Web API

![image-20200427104231125](DOM、BOM基础.assets/image-20200427104231125.png)



### 2.3 API和Web API总结

![image-20200427104326689](DOM、BOM基础.assets/image-20200427104326689.png)



# DOM



![image-20200427104601409](DOM、BOM基础.assets/image-20200427104601409.png)



![image-20200427104617559](DOM、BOM基础.assets/image-20200427104617559.png)



## 1. DOM简介

### 1.1 什么是DOM

![image-20200427104825882](DOM、BOM基础.assets/image-20200427104825882.png)



### 1.2 DOM树

![image-20200427104903536](DOM、BOM基础.assets/image-20200427104903536.png)





## 2. 获取元素

### 2.1 如何获取页面元素

![image-20200427105104706](DOM、BOM基础.assets/image-20200427105104706.png)



![image-20200428133824216](DOM、BOM基础.assets/image-20200428133824216.png)



![image-20200428133853976](DOM、BOM基础.assets/image-20200428133853976.png)





### 2.2 根据ID获取

![image-20200427105326537](DOM、BOM基础.assets/image-20200427105326537.png)





### 2.3 根据标签名获取

![image-20200427105529008](DOM、BOM基础.assets/image-20200427105529008.png)



![image-20200428135657572](DOM、BOM基础.assets/image-20200428135657572.png)



![image-20200428140342138](DOM、BOM基础.assets/image-20200428140342138.png)



![image-20200428140641693](DOM、BOM基础.assets/image-20200428140641693.png)



![image-20200428140936431](DOM、BOM基础.assets/image-20200428140936431.png)



![image-20200428141009823](DOM、BOM基础.assets/image-20200428141009823.png)





![image-20200428141059248](DOM、BOM基础.assets/image-20200428141059248.png)





### 2.4 通过HTML5新增的方法获取

![image-20200427105629906](DOM、BOM基础.assets/image-20200427105629906.png)



![image-20200428141737922](DOM、BOM基础.assets/image-20200428141737922.png)













### 2.5  获取特殊元素（body,html）

![image-20200427105807544](DOM、BOM基础.assets/image-20200427105807544.png)



![image-20200428142000033](DOM、BOM基础.assets/image-20200428142000033.png)



![image-20200428142019658](DOM、BOM基础.assets/image-20200428142019658.png)





## 3. 事件基础

### 3.1 事件概述



![image-20200427105945046](DOM、BOM基础.assets/image-20200427105945046.png)



### 3.2 事件三要素

![image-20200427110206308](DOM、BOM基础.assets/image-20200427110206308.png)



![image-20200428142322914](DOM、BOM基础.assets/image-20200428142322914.png)



![image-20200428142530155](DOM、BOM基础.assets/image-20200428142530155.png)





### 案例一：点击按钮弹出警示框

![image-20200427110304683](DOM、BOM基础.assets/image-20200427110304683.png)





![image-20200427110341559](DOM、BOM基础.assets/image-20200427110341559.png)



![image-20200427110400368](DOM、BOM基础.assets/image-20200427110400368.png)



### 3.3 执行事件的步骤

![image-20200427110426723](DOM、BOM基础.assets/image-20200427110426723.png)





### 3.4 常见的鼠标事件

![image-20200427110532097](DOM、BOM基础.assets/image-20200427110532097.png)





### 3.5 分析事件三要素

![image-20200427110716594](DOM、BOM基础.assets/image-20200427110716594.png)





## 4. 操作元素



### 4.1 改变元素内容

![image-20200427111432530](DOM、BOM基础.assets/image-20200427111432530.png)



![image-20200428143026153](DOM、BOM基础.assets/image-20200428143026153.png)



![image-20200428143044925](DOM、BOM基础.assets/image-20200428143044925.png)



![image-20200428143241118](DOM、BOM基础.assets/image-20200428143241118.png)



![image-20200428143410616](DOM、BOM基础.assets/image-20200428143410616.png)





![image-20200428143944846](DOM、BOM基础.assets/image-20200428143944846.png)



![image-20200428143840793](DOM、BOM基础.assets/image-20200428143840793.png)



![image-20200428144244062](DOM、BOM基础.assets/image-20200428144244062.png)





![image-20200428144058365](DOM、BOM基础.assets/image-20200428144058365.png)





### 4.2 常见元素的属性操作

![image-20200427111627759](DOM、BOM基础.assets/image-20200427111627759.png)



![image-20200428144718307](DOM、BOM基础.assets/image-20200428144718307.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img{
            width: 300px;
        }
    </style>
</head>
<body>
    <button id="first">第一张图片</button>
    <button id="second">第二张图片</button>
    <img src="./image/pkq.png" title="皮卡丘">
</body>
<script>
    var firstBtn = document.getElementById("first")
    var secondBtn = document.getElementById("second")
    var img = document.querySelector("img")
    firstBtn.onclick = function(){
        img.src="./image/pkq.png";
        img.title="皮卡丘"
    }
    secondBtn.onclick = function(){
        img.src="./image/rain.png";
        img.title="小孩与狗"
    }
</script>
</html>
~~~





### 案例

![image-20200427111733686](DOM、BOM基础.assets/image-20200427111733686.png)



![image-20200427111813958](DOM、BOM基础.assets/image-20200427111813958.png)



![image-20200428145102790](DOM、BOM基础.assets/image-20200428145102790.png)



![image-20200428145311245](DOM、BOM基础.assets/image-20200428145311245.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img{
        width: 200px;
        height: 200px;
        }
    </style>
</head>
<body>
    <img src="image/goodmorning.jpg" title="上午好">
    <div class="desc">上午好</div>
</body>
<script>
    var img = document.querySelector("img");
    var descList = document.getElementsByClassName("desc")
    // 获取当前的时间
    var date = new Date();
    var hour = date.getHours();
    console.log(hour);
    console.log(descList);
    hour  = 20;
    if (hour > 0 && hour <= 12){
        img.src="./image/goodmorning.jpg";
        img.title = '上午好';
        descList[0].innerHTML = "上午好"
    } else if( hour > 12 && hour <= 18) {
        img.src="./image/pkq.png";
        img.title = '下午好';
        descList[0].innerHTML = '下午好'
    } else {
        img.src="./image/rain.png";
        img.title = "晚上好";
        descList[0].innerHTML = '晚上好'
    }
</script>
</html>
~~~





### 4.3 表单元素的属性操作

![image-20200427111834907](DOM、BOM基础.assets/image-20200427111834907.png)



![image-20200428153809375](DOM、BOM基础.assets/image-20200428153809375.png)



![image-20200428153925999](DOM、BOM基础.assets/image-20200428153925999.png)



![image-20200428154019734](DOM、BOM基础.assets/image-20200428154019734.png)



![image-20200428154136620](DOM、BOM基础.assets/image-20200428154136620.png)





### 案例：仿京东显示密码

![image-20200427112200780](DOM、BOM基础.assets/image-20200427112200780.png)





![image-20200427112323145](DOM、BOM基础.assets/image-20200427112323145.png)





![image-20200428154927274](DOM、BOM基础.assets/image-20200428154927274.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            width: 300px;
            margin:50px auto;
            border-right: 1px solid #eee;
            display: flex;
            align-items: center;
        }
        img{
            width: 30px;
            height: 30px;
        }
        input{
            width: 250px;
            height: 30px;
            border:none;
            outline:none;
        }
    </style>
</head>
<body>
    <div class="container">
        <input type="password" id="pwd">
        <img src="./image/close.png">
    </div>
</body>
<script>
    var eyeImg = document.querySelector("img");
    var pwd  = document.querySelector('#pwd');
    var flag = 0;
    eyeImg.onclick = function(){
        if (flag == 0) {
            eyeImg.src="./image/open.png";
            pwd.type="text";
            flag = 1;
        } else {
            eyeImg.src="./image/close.png";
            pwd.type="password";
            flag = 0;
        }
    }
</script>
</html>
~~~





### 4.4 样式属性操作

![image-20200427112427646](DOM、BOM基础.assets/image-20200427112427646.png)



![image-20200428161128022](DOM、BOM基础.assets/image-20200428161128022.png)



![image-20200428161235648](DOM、BOM基础.assets/image-20200428161235648.png)







### 案例：淘宝点击关闭二维码

![image-20200427112537314](DOM、BOM基础.assets/image-20200427112537314.png)



![image-20200427112632810](DOM、BOM基础.assets/image-20200427112632810.png)



![image-20200427112714343](DOM、BOM基础.assets/image-20200427112714343.png)



![image-20200428161357050](DOM、BOM基础.assets/image-20200428161357050.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            position: relative;
            width: 150px;
            height: 180px;
            margin: 50px auto;
            text-align: center;
            color:#EF4F2b;
            padding:5px;
            border:1px solid #999;
            background-color: #eee;
        }
        .container span{
            display: inline-block;
            height: 30px;
            line-height: 30px;
        }
        img{
            width: 150px;
        }
        .btn-close{
            position: absolute;
            top:-1px;
            left:-36px;
            width: 35px;
            height: 35px;
            line-height: 35px;
            background-color: #eee;
            border:1px solid #999;
        }
    </style>
</head>
<body>
    <div class="container">
        <span>手机淘宝</span>
        <img src="./image/tao.png">
        <i class="btn-close">×</i>
    </div>
</body>
<script>
    // var spanText = document.querySelector('span');
    // var img = document.querySelector('img');
    var container = document.querySelector(".container")
    console.log(container);
    var i = document.querySelector("i")
    i.onclick = function(){
        // img.style.display = 'none';
        // spanText.style.display = 'none';
        console.log(container);
        container.style.display = 'none';
    }
</script>
</html>
~~~







### 案例：循环精灵图背景

![image-20200427112749612](DOM、BOM基础.assets/image-20200427112749612.png)



![image-20200427112901683](DOM、BOM基础.assets/image-20200427112901683.png)



![image-20200427112937804](DOM、BOM基础.assets/image-20200427112937804.png)



![image-20200428170255014](DOM、BOM基础.assets/image-20200428170255014.png)







### 案例：显示隐藏文本框内容

![image-20200427113135981](DOM、BOM基础.assets/image-20200427113135981.png)



![image-20200427113222839](DOM、BOM基础.assets/image-20200427113222839.png)



![image-20200428172119631](DOM、BOM基础.assets/image-20200428172119631.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" value="手机">
</body>
<script>
    var inputText = document.querySelector("input")
    inputText.onfocus = function(){
        if (inputText.value == '手机'){
            inputText.value = '';
            inputText.style.color = "#333";
        }
    }

    inputText.onblur = function(){
        if(inputText.value == ''){
            inputText.value = '手机';
            inputText.style.color = '#999';
        }
    }
</script>
</html>
~~~





### 4.5 样式属性操作

![image-20200427114432155](DOM、BOM基础.assets/image-20200427114432155.png)



![image-20200428173154879](DOM、BOM基础.assets/image-20200428173154879.png)



![image-20200428173256478](DOM、BOM基础.assets/image-20200428173256478.png)





![image-20200428173513730](DOM、BOM基础.assets/image-20200428173513730.png)



![image-20200428173633701](DOM、BOM基础.assets/image-20200428173633701.png)













### 案例：密码框格式提示错误信息

![image-20200427114619284](DOM、BOM基础.assets/image-20200427114619284.png)



![image-20200427114811292](DOM、BOM基础.assets/image-20200427114811292.png)



![image-20200428173839273](DOM、BOM基础.assets/image-20200428173839273.png)



![image-20200428174212951](DOM、BOM基础.assets/image-20200428174212951.png)



![image-20200428174238388](DOM、BOM基础.assets/image-20200428174238388.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .pwd{
            width: 600px;
            display: flex;
            align-items: center;
            margin: 50px auto;
        }
        .pwd i{
            display: inline-block;
            width: 20px;
            height: 25px;
            box-sizing: border-box;
            padding: 5px 0px;
            text-align: center;
        }
        .pwd label{
            display: inline-block;
            height: 25px;
            line-height: 25px;
        }
        .pwd input{
            height: 25px;
            width: 200px;
        }
        .info{
            display: inline-block;
            font-size: 12px;
            color: #999;
            width: 120px;
            height: 25px;
            line-height: 25px;
            background-size: 50px 25px;
            background: url(image/mess.png) no-repeat left center;
            margin-left: 10px;
            padding-left:20px;
        }
        .wrong{
            background-image: url("./image/wrong.png");
        }
        .right{
        background-image: url("./image/right.png");
        }
    </style>
</head>
<body>
    <div class="pwd">
        <i>*</i>
        <label for="pwd">
            设置密码：
        </label>
        <input type="password"  name ="pwd"  id="pwd"/>
        <div class="info">请输入6~16位密码</div>
    </div>
</body>
<script>
    var pwd = document.querySelector("#pwd")
    var tip = document.querySelector(".info")
    pwd.onblur = function(){
        if(pwd.value.length<6 || pwd.value.length>16){
            tip.innerHTML = '您输入的位数不够，应该为6~16位';
            tip.className = "info wrong"
            } else {
                tip.innerHTML = '您输入的密码正确';
                tip.className = 'info right'
            }
    }
</script>
</html>
~~~





### 操作元素总结

![image-20200427114842690](DOM、BOM基础.assets/image-20200427114842690.png)



### 作业

![image-20200427114931710](DOM、BOM基础.assets/image-20200427114931710.png)



### 4.6 排他思想



![image-20200427115030595](DOM、BOM基础.assets/image-20200427115030595.png)



![image-20200428194406838](DOM、BOM基础.assets/image-20200428194406838.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            width: 400px;
            height: 400px;
            margin: 200px auto;;
        }
        .active{
            background-color: brown;
        }
        button{
            outline: none;
        }
    </style>
</head>
<body>
    <div>
        <button>按钮1</button>
        <button>按钮2</button>
        <button>按钮3</button>
        <button>按钮4</button>
        <button>按钮5</button>
    </div>
</body>
<script>
     var btns = document.getElementsByTagName('button')
     for(var i =0;i<btns.length;i++){
         btns[i].onclick = function(){
            //  先清除掉所有的样式
            for(var i = 0; i<btns.length;i++){
                btns[i].className = '';
            }
            // 给被点击的按钮添加样式
            this.className = 'active'
         }
     }
</script>
</html>
~~~

















### 案例：百度换肤

![image-20200427115202163](DOM、BOM基础.assets/image-20200427115202163.png)



![image-20200427115239781](DOM、BOM基础.assets/image-20200427115239781.png)



![image-20200427115316318](DOM、BOM基础.assets/image-20200427115316318.png)



![image-20200428195941395](DOM、BOM基础.assets/image-20200428195941395.png)



![image-20200428200014518](DOM、BOM基础.assets/image-20200428200014518.png)





![image-20200428200320729](DOM、BOM基础.assets/image-20200428200320729.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 清除样式 */
        body{
            margin: 0;
            padding: 0;
            background-image:url('./image/1.jpg');
            background-repeat: no-repeat;
            background-position:top center;
        }
        ul,li {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        /* 自定义样式 */
        .baidu{
            width:400px ;
            height:100px;
            margin:200px auto;
            border:2px solid #fff;
        }
        .baidu ul li{
            float:left;
            width: 100px;
            height: 100px;
        }
        img {
            width: 100px;
            height: 100px;
        }
     
    </style>
</head>
<body>
    <div class="baidu">
        <ul>
            <li><img src="./image/1.jpg" alt=""></li>
            <li><img src="./image/2.jpg" alt=""></li>
            <li><img src="./image/3.jpg" alt=""></li>
            <li><img src="./image/4.jpg" alt=""></li>
        </ul>
    </div>
</body>
<script>
    var btnImg = document.querySelector(".baidu").getElementsByTagName("img")
    for(var i = 0; i<btnImg.length;i++){
        btnImg[i].onclick = function(){
            document.body.style.backgroundImage = "url("+this.src+")"
        }
    }
</script>
</html>
~~~









### 案例：表格隔行变色

![image-20200427115408624](DOM、BOM基础.assets/image-20200427115408624.png)



![image-20200427115437775](DOM、BOM基础.assets/image-20200427115437775.png)



![image-20200428202555138](DOM、BOM基础.assets/image-20200428202555138.png)







### 案例：表单全选取消全选案例

![image-20200427115528025](DOM、BOM基础.assets/image-20200427115528025.png)





![image-20200427115626960](DOM、BOM基础.assets/image-20200427115626960.png)



![image-20200428203113544](DOM、BOM基础.assets/image-20200428203113544.png)



![image-20200428203635039](DOM、BOM基础.assets/image-20200428203635039.png)

 

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table,tr,td{
            border: 1px solid #333;
            border-collapse: collapse;
            margin: 50px auto;
        }
        td{
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
    </style>
</head>
<body>
    <table>
        <thead>
          <tr>
              <th><input type="checkbox" id="is_check_all"/>全选</th>
              <th>商品</th>
              <th>价格</th>
          </tr>
        </thead>
        <tbody id="is_check_body">
            <tr>
                <td><input type="checkbox" id="is_check"/></td>
                <td>苹果1</td>
                <td>1120</td>
            </tr>
            <tr>
                <td><input type="checkbox" id="is_check"/></td>
                <td>苹果2</td>
                <td>2220</td>
            </tr>
            <tr>
                <td><input type="checkbox" id="is_check"/></td>
                <td>苹果3</td>
                <td>3330</td>
            </tr>
            <tr>
                <td><input type="checkbox" id="is_check"/></td>
                <td>苹果4</td>
                <td>4440</td>
            </tr>
        </tbody>
    </table>
</body>
<script>
    // 全选控制 单选
    var isCheckAll = document.querySelector("#is_check_all")
    var isChecks = document.querySelector("#is_check_body").querySelectorAll("input")
    isCheckAll.onclick = function(){
        for(var i = 0; i<isChecks.length;i++){
            isChecks[i].checked = isCheckAll.checked 
        }        
    }
    // 单选控制 全选
    for(var i = 0;i<isChecks.length;i++){
        isChecks[i].onclick = function(){
            var flag = true;            
            for(var i = 0;i<isChecks.length;i++){
                if(!isChecks[i].checked){
                    flag = false;
                    break;
                }
            }
            isCheckAll.checked = flag;
        }
    }
</script>
</html>
~~~





### 4.7 自定义属性的操作

#### 1. 获取属性值

![image-20200427115732915](DOM、BOM基础.assets/image-20200427115732915.png)



![image-20200428213203438](DOM、BOM基础.assets/image-20200428213203438.png)









#### 2. 设置属性值

![image-20200427115848218](DOM、BOM基础.assets/image-20200427115848218.png)



![image-20200428213449548](DOM、BOM基础.assets/image-20200428213449548.png)





#### 3. 移除属性

![image-20200427120005196](DOM、BOM基础.assets/image-20200427120005196.png)



![image-20200428213621521](DOM、BOM基础.assets/image-20200428213621521.png)





#### 案例：tab栏切换

![image-20200427134432608](DOM、BOM基础.assets/image-20200427134432608.png)





![image-20200427134525311](DOM、BOM基础.assets/image-20200427134525311.png)



![image-20200428215034115](DOM、BOM基础.assets/image-20200428215034115.png)



![image-20200428215134727](DOM、BOM基础.assets/image-20200428215134727.png)



![image-20200428215250592](DOM、BOM基础.assets/image-20200428215250592.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* 初始化样式 */
        body{
            margin: 0;
            padding: 0;
        }
        ul,li{
            list-style: none;
            margin: 0;
            padding: 0;
        }
        /* 自定义样式 */
        .tab_list ul {
            display: flex;
            justify-content: space-around;
            width: 800px;
            margin: 50px auto;
            margin-bottom: 0px;
        }
        .tab_list ul li{
            flex:1;
            height: 30px;
            line-height: 30px;
            padding:5px 5px;
            text-align: center;
            background-color: #999;

        }
       .tab_list .tab_current{
            background-color: #f00;
        }
        .content_item{
            display: none;
            width: 800px;
            height: 400px;
            background-color: aqua;
            margin: 0 auto;
        }
    </style>
    <title>Document</title>
</head>
<body>
    <div class="container">
        <div class="tab_list">
            <ul>
                <li class="tab_current">商品介绍</li>
                <li>规格与包装</li>
                <li>售后保障</li>
                <li>商品评价（50000）</li>
                <li>手机社区</li>
            </ul>
        </div>
        <div class="tab_content">
            <div class="content_item" style="display: block;">商品介绍的内容</div>
            <div class="content_item">规格与包装的内容</div>
            <div class="content_item">售后保障的内容</div>
            <div class="content_item">商品评价（50000）的内容</div>
            <div class="content_item">手机社区的内容</div>
        </div>
    </div>
</body>
<script>
    // 获取tabList
    var tabList = document.querySelector(".tab_list").querySelectorAll("li")

    // 获取所有的tabContentList
    var tabContentList = document.querySelectorAll(".content_item")

    // 给tabList添加自定义属性
    for(var i = 0; i<tabList.length;i++){
        // 依次将0,1,2,3,4 设置进去
        tabList[i].setAttribute("data-index",i);
        // 给所有tab选项添加点击事件
        tabList[i].onclick = function(){
            // 执行排他
            for(var i = 0;i<tabList.length;i++){
                tabList[i].className = '';
            }
            for(var i = 0;i<tabContentList.length;i++){
                tabContentList[i].style.display = 'none'
            }
            // 选中点击的tab
            this.className = 'tab_current'
            tabContentList[this.getAttribute("data-index")].style.display = 'block'
        }
    }
</script>
</html>
~~~



![image-20200429093701644](DOM、BOM基础.assets/image-20200429093701644.png)



### 4.8 H5自定义属性

#### 1.设置H5自定义属性

![image-20200427134635744](DOM、BOM基础.assets/image-20200427134635744.png)





#### 2. 获取H5自定义属性

![image-20200427134827159](DOM、BOM基础.assets/image-20200427134827159.png)





![image-20200428215927643](DOM、BOM基础.assets/image-20200428215927643.png)



![image-20200428220020610](DOM、BOM基础.assets/image-20200428220020610.png)



![image-20200428220230102](DOM、BOM基础.assets/image-20200428220230102.png)





## 5. 节点操作

 

### 5.1 为什么学节点操作

![image-20200427135023676](DOM、BOM基础.assets/image-20200427135023676.png)





### 5.2 节点概述

![image-20200427135142942](DOM、BOM基础.assets/image-20200427135142942.png)



![image-20200429094254662](DOM、BOM基础.assets/image-20200429094254662.png)



![image-20200427135238141](DOM、BOM基础.assets/image-20200427135238141.png)



### 5.3 节点层级

![image-20200427135350275](DOM、BOM基础.assets/image-20200427135350275.png)



#### 1.父级节点：parentNode

![image-20200427135610333](DOM、BOM基础.assets/image-20200427135610333.png)



![image-20200429094930908](DOM、BOM基础.assets/image-20200429094930908.png)





#### 2.子节点:

##### 2.1 childNode

![image-20200427135706625](DOM、BOM基础.assets/image-20200427135706625.png)



##### 2.2 children

![image-20200427135902037](DOM、BOM基础.assets/image-20200427135902037.png)



![image-20200429095325789](DOM、BOM基础.assets/image-20200429095325789.png)







##### 2.3 firstChild、lastChild

![image-20200427135944014](DOM、BOM基础.assets/image-20200427135944014.png)



![image-20200429095707444](DOM、BOM基础.assets/image-20200429095707444.png)





![image-20200429095733429](DOM、BOM基础.assets/image-20200429095733429.png)







##### 2.4 firstElementChild、lastElementChild

![image-20200427140022248](DOM、BOM基础.assets/image-20200427140022248.png)





![image-20200429100244438](DOM、BOM基础.assets/image-20200429100244438.png)



![image-20200429100337556](DOM、BOM基础.assets/image-20200429100337556.png)



![image-20200429100528765](DOM、BOM基础.assets/image-20200429100528765.png)









##### 2.5 子元素节点小结

![image-20200427140638219](DOM、BOM基础.assets/image-20200427140638219.png)



#### 案例：下拉菜单

![image-20200427140815710](DOM、BOM基础.assets/image-20200427140815710.png)



![image-20200427140901925](DOM、BOM基础.assets/image-20200427140901925.png)



![image-20200427140951135](DOM、BOM基础.assets/image-20200427140951135.png)





![image-20200429101035504](DOM、BOM基础.assets/image-20200429101035504.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /*样式重置*/
        body{
            margin: 0;
            padding: 0;
        }
        ul,li{
            list-style: none;
            margin: 0;
            padding: 0;
        }
        a{
            text-decoration: none;
            color:#000;
        }
        /*自定义样式*/
        .nav{
            display:flex;
            width: 400px;
            justify-content:space-around;
            margin:50px auto;
            text-align: center;
        }
        .nav>li{
            position: relative;
        }
        .nav li a{
            display:inline-block;
            width:100px ;
            height: 40px;
            line-height: 40px;
        }
        .nav>li>a:hover{
            background-color: #eee;
        }
        .nav>li ul{
            position: absolute;
            display: none;
            top:40px;
            left:0px;
            width: 98px;
            border-left: 1px solid #FECC5B;
            border-right: 1px soLid #FECC5B;
        }
        .nav>li ul li{
            border-bottom: 1px solid #FECC5B;
        }
        .nav>li ul li a:hover{
            background-color: #FECC5B;
        }
    </style>
</head>
<body>
    <ul class="nav">
        <li>
            <a href="#">微博</a>
            <ul class="">
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
    </ul>
</body>
<script>
    // 获取所有的孩子
    var nav_list = document.querySelector(".nav").children
    // 循环注册事件
    for(var i= 0;i<nav_list.length;i++){
        // 鼠标进入
        nav_list[i].onmouseover = function(){
            this.children[1].style.display = 'block'
            // nav_list[i].children[1].style.display = 'block'
        }
        // 鼠标离开
        nav_list[i].onmouseout = function(){
            this.children[1].style.display = 'none'
        }
    }
</script>
</html>
~~~





#### 3.兄弟节点

##### 3.1.nextSibling

##### 3.2.previousSibing

![image-20200427141141359](DOM、BOM基础.assets/image-20200427141141359.png)



##### 3.3.nextElementSibling

##### 3.4.previousElementSibling

![image-20200427141743203](DOM、BOM基础.assets/image-20200427141743203.png)



![image-20200429104119214](DOM、BOM基础.assets/image-20200429104119214.png)



![image-20200429104139151](DOM、BOM基础.assets/image-20200429104139151.png)



##### 3.5 兄弟节点小结

![image-20200427142032320](DOM、BOM基础.assets/image-20200427142032320.png)





### 5.4 创建节点

![image-20200427142227301](DOM、BOM基础.assets/image-20200427142227301.png)



### 5.5 添加节点

![image-20200427142336765](DOM、BOM基础.assets/image-20200427142336765.png)



![image-20200429104836962](DOM、BOM基础.assets/image-20200429104836962.png)





### 案例：简单版发布留言案列

![image-20200427142508698](DOM、BOM基础.assets/image-20200427142508698.png)



![image-20200427143437934](DOM、BOM基础.assets/image-20200427143437934.png)



![image-20200429105243118](DOM、BOM基础.assets/image-20200429105243118.png)





![image-20200429105331266](DOM、BOM基础.assets/image-20200429105331266.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        ul,li{
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .container{
            width: 400px;
            height: 700px;
            margin: 0 auto;
        }
        .container textarea{
            display: block;
            height: 200px;
            width: 300px;
            resize: none;
        }
    </style>
</head>
<body>

    <div class="container">
        <textarea name="desc">
        </textarea>
        <button>添加</button>
        <ul>
        </ul>
    </div>
</body>
<script>
    var btn = document.querySelector("button");
    var textareaContent = document.querySelector("textarea")
    var ul = document.querySelector("ul")
    btn.onclick = function(){
        if(!textareaContent.value){
            alert('请输入内容');
            return ;
        }
        // 创建dom
        var li = document.createElement("li");
        // 添加文本
        li.innerHTML = textareaContent.value;
        // 添加到父元素中
        // ul.appendChild(li); 向父元素的末尾添加元素，类似于数组的push
        ul.insertBefore(li,ul.children[0])
    }
</script>
</html>
~~~



![image-20200429144458516](DOM、BOM基础.assets/image-20200429144458516.png)





### 5.6 删除节点

![image-20200427143508555](DOM、BOM基础.assets/image-20200427143508555.png)





![image-20200429105651292](DOM、BOM基础.assets/image-20200429105651292.png)







### 案例：删除留言板案例

![image-20200427143633971](DOM、BOM基础.assets/image-20200427143633971.png)





![image-20200427143745151](DOM、BOM基础.assets/image-20200427143745151.png)



![image-20200429110138740](DOM、BOM基础.assets/image-20200429110138740.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        ul,li{
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .container{
            width: 400px;
            height: 700px;
            margin: 0 auto;
        }
        .container textarea{
            display: block;
            height: 200px;
            width: 300px;
            resize: none;
        }
        a{
            float: right;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <textarea name="desc">
        </textarea>
        <button>添加</button>
        <ul>
        </ul>
    </div>
</body>
<script>
    var btn = document.querySelector("button");
    var textareaContent = document.querySelector("textarea")
    var ul = document.querySelector("ul")
    btn.onclick = function(){
        if(!textareaContent.value){
            alert('请输入内容');
            return ;
        }
        // 创建dom
        var li = document.createElement("li");
        // 添加文本
        li.innerHTML = textareaContent.value+"<a href='javascript:;'>删除</a>";
        // 添加到父元素中
        // ul.appendChild(li); 向父元素的末尾添加元素，类似于数组的push
        ul.insertBefore(li,ul.children[0])
        textareaContent.value = ''
        //  点击删除
        var as = document.querySelectorAll("a")
        for(var i = 0; i<as.length;i++){
            as[i].onclick = function(){
               // node.removeChild(child); 删除的是 li 当前a所在的li  this.parentNode;
               ul.removeChild(this.parentNode);
            }
        }
    }
</script>
</html>
~~~





### 5.7 复制节点

![image-20200427143826465](DOM、BOM基础.assets/image-20200427143826465.png)





![image-20200429110545571](DOM、BOM基础.assets/image-20200429110545571.png)







### 案例：动态生成表格

![image-20200427143950738](DOM、BOM基础.assets/image-20200427143950738.png)



![image-20200427144022867](DOM、BOM基础.assets/image-20200427144022867.png)



![image-20200429111317499](DOM、BOM基础.assets/image-20200429111317499.png)



![image-20200429111635602](DOM、BOM基础.assets/image-20200429111635602.png)



![image-20200429112048514](DOM、BOM基础.assets/image-20200429112048514.png)



![image-20200429141620232](DOM、BOM基础.assets/image-20200429141620232.png)



![image-20200429141829358](DOM、BOM基础.assets/image-20200429141829358.png)



![image-20200429142039912](DOM、BOM基础.assets/image-20200429142039912.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            width: 400px;
            height: 500px;
            margin: 0 auto;
        }
        table{
            width: 100%;
            text-align: center;
            border-collapse: collapse;
        }
        td,th{
            border: 1px solid #000;
            height: 30px;
            line-height: 30px;
        }
        a{
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <table>
            <thead>
               <tr>
                    <th>姓名</th>
                    <th>科目</th>
                    <th>成绩</th>
                    <th>操作</th>
               </tr>
            </thead>
            <tbody>
                <!-- <tr>
                    <td>hello</td>
                    <td>hello</td>
                    <td>hello</td>
                </tr>
                <tr>
                    <td>hello</td>
                    <td>hello</td>
                    <td>hello</td>
                </tr> <tr>
                    <td>hello</td>
                    <td>hello</td>
                    <td>hello</td>
                </tr> -->
            </tbody>
        </table>
    </div>
</body>
<script>
    var datas = [
        {
            name:'silly',
            course:'javascript',
            grade:99
        },
        {
            name:'smith',
            course:'Math',
            grade:100
        },
        {
            name:'alice',
            course:'javascript',
            grade:60
        },
        {
            name:'Job',
            course:'science',
            grade:99
        },
        {
            name:'Job',
            course:'science',
            grade:99
        },
        {
            name:'Job',
            course:'science',
            grade:99
        }
    ];
    var tbody = document.querySelector('tbody')
    // 依据数组来创建tr
    for(var i = 0; i<datas.length;i++){
        var tr = document.createElement("tr")
        for(var item in datas[i]){
            var td = document.createElement("td");
            td.innerHTML = datas[i][item]
            tr.appendChild(td)
        }
        // 添加删除选项
        var bta = document.createElement("td")
        bta.innerHTML = "<a href='javascript:;'>删除</a>";
        tr.appendChild(bta)
        tbody.appendChild(tr)
    }
    // 处理删除事件
    var as = document.querySelectorAll("a");
    for(var i = 0;i<as.length;i++){
        as[i].onclick = function(){
            tbody.removeChild(this.parentNode.parentNode)
        }
    }
</script>
</html>
~~~





### 5.8 三种动态创建元素区别

![image-20200427144115359](DOM、BOM基础.assets/image-20200427144115359.png)



![image-20200429152948965](DOM、BOM基础.assets/image-20200429152948965.png)



![image-20200429153143968](DOM、BOM基础.assets/image-20200429153143968.png)



![image-20200429153613875](DOM、BOM基础.assets/image-20200429153613875.png)



![image-20200429153659697](DOM、BOM基础.assets/image-20200429153659697.png)





## 5.6 DOM重点核心

![image-20200427144245444](DOM、BOM基础.assets/image-20200427144245444.png)



### 6.1 创建

![image-20200427144437645](DOM、BOM基础.assets/image-20200427144437645.png)



### 6.2 新增

![image-20200427144511827](DOM、BOM基础.assets/image-20200427144511827.png)





### 6.3  删除

![image-20200427144602417](DOM、BOM基础.assets/image-20200427144602417.png)



### 6.4 修改

![image-20200427144703749](DOM、BOM基础.assets/image-20200427144703749.png)



### 6.5 查询

![image-20200427144738110](DOM、BOM基础.assets/image-20200427144738110.png)



### 6.6 属性操作

![image-20200427144849352](DOM、BOM基础.assets/image-20200427144849352.png)



### 6.7 事件操作

![image-20200427144909847](DOM、BOM基础.assets/image-20200427144909847.png)





# 事件高级



![image-20200427145312987](DOM、BOM基础.assets/image-20200427145312987.png)



![image-20200427145328945](DOM、BOM基础.assets/image-20200427145328945.png)



## 1.注册事件（绑定事件）



### 1.1 注册事件概述

![image-20200427150408183](DOM、BOM基础.assets/image-20200427150408183.png)



![image-20200429154318729](DOM、BOM基础.assets/image-20200429154318729.png)



![image-20200429154551445](DOM、BOM基础.assets/image-20200429154551445.png)



### 1.2 addEventListener 事件监听方式

![image-20200427150544372](DOM、BOM基础.assets/image-20200427150544372.png)



![image-20200429154856058](DOM、BOM基础.assets/image-20200429154856058.png)









### 1.3  attachEvent  事件监听方式

![image-20200427150719657](DOM、BOM基础.assets/image-20200427150719657.png)



![image-20200429155537993](DOM、BOM基础.assets/image-20200429155537993.png)





### 1.4 注册事件兼容性解决方案

![image-20200427150951054](DOM、BOM基础.assets/image-20200427150951054.png)







## 2.删除事件（解绑事件）

### 2.1 删除事件的方式

![image-20200427151201478](DOM、BOM基础.assets/image-20200427151201478.png)



![image-20200429155744092](DOM、BOM基础.assets/image-20200429155744092.png)



![image-20200429160015645](DOM、BOM基础.assets/image-20200429160015645.png)



![image-20200429160131433](DOM、BOM基础.assets/image-20200429160131433.png)



### 2.2 删除事件兼容性解决方案

![image-20200427151318710](DOM、BOM基础.assets/image-20200427151318710.png)





## 3.DOM事件流



![image-20200427151553310](DOM、BOM基础.assets/image-20200427151553310.png)



![image-20200427151716326](DOM、BOM基础.assets/image-20200427151716326.png)



![image-20200427151939953](DOM、BOM基础.assets/image-20200427151939953.png)



![image-20200429161236272](DOM、BOM基础.assets/image-20200429161236272.png)



![image-20200429161528095](DOM、BOM基础.assets/image-20200429161528095.png)



![image-20200429161833249](DOM、BOM基础.assets/image-20200429161833249.png)













## 4.事件对象

### 4.1 什么是事件对象

![image-20200427152259710](DOM、BOM基础.assets/image-20200427152259710.png)





### 4.2 事件对象的使用语法

![image-20200427152436824](DOM、BOM基础.assets/image-20200427152436824.png)



![image-20200429162343578](DOM、BOM基础.assets/image-20200429162343578.png)



![image-20200429162402176](DOM、BOM基础.assets/image-20200429162402176.png)





### 4.3 事件对象的兼容性方案

![image-20200427152611046](DOM、BOM基础.assets/image-20200427152611046.png)



![image-20200429162532472](DOM、BOM基础.assets/image-20200429162532472.png)



### 4.4 事件对象的常见属性和方法

![image-20200427152806067](DOM、BOM基础.assets/image-20200427152806067.png)



![image-20200429162833073](DOM、BOM基础.assets/image-20200429162833073.png)



![image-20200429162912992](DOM、BOM基础.assets/image-20200429162912992.png)



![image-20200429163029354](DOM、BOM基础.assets/image-20200429163029354.png)





![image-20200427152949151](DOM、BOM基础.assets/image-20200427152949151.png)







## 5.阻止事件冒泡

### 5.1 阻止事件冒泡的两种方式

![image-20200427153138489](DOM、BOM基础.assets/image-20200427153138489.png)



![image-20200429163931425](DOM、BOM基础.assets/image-20200429163931425.png)





![image-20200429163504665](DOM、BOM基础.assets/image-20200429163504665.png)





![image-20200429163812147](DOM、BOM基础.assets/image-20200429163812147.png)



### 5.2  阻止事件冒泡的兼容性解决方案

![image-20200427153241886](DOM、BOM基础.assets/image-20200427153241886.png)





![image-20200429164228582](DOM、BOM基础.assets/image-20200429164228582.png)







## 6.事件委托（代理，委派）



![image-20200427153415715](DOM、BOM基础.assets/image-20200427153415715.png)





![image-20200427153446813](DOM、BOM基础.assets/image-20200427153446813.png)



![image-20200427153543166](DOM、BOM基础.assets/image-20200427153543166.png)



![image-20200429164858378](DOM、BOM基础.assets/image-20200429164858378.png)







## 7.常用的鼠标事件

### 7.1 常用的鼠标事件

![image-20200427153656172](DOM、BOM基础.assets/image-20200427153656172.png)



![image-20200427153727653](DOM、BOM基础.assets/image-20200427153727653.png)



![image-20200429165733454](DOM、BOM基础.assets/image-20200429165733454.png)



![image-20200429165854105](DOM、BOM基础.assets/image-20200429165854105.png)



### 7.2 鼠标事件对象

![image-20200427153813799](DOM、BOM基础.assets/image-20200427153813799.png)



![image-20200429170448838](DOM、BOM基础.assets/image-20200429170448838.png)



![image-20200429170428761](DOM、BOM基础.assets/image-20200429170428761.png)



![image-20200429170619156](DOM、BOM基础.assets/image-20200429170619156.png)



![image-20200429170749819](DOM、BOM基础.assets/image-20200429170749819.png)



![image-20200429170926925](DOM、BOM基础.assets/image-20200429170926925.png)



![image-20200429171012495](DOM、BOM基础.assets/image-20200429171012495.png)







### 案例：跟随鼠标的天使

![image-20200427153948017](DOM、BOM基础.assets/image-20200427153948017.png)



![image-20200427154028232](DOM、BOM基础.assets/image-20200427154028232.png)



![image-20200427154130339](DOM、BOM基础.assets/image-20200427154130339.png)



~~~html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        img {
            position: absolute;
            top: 2px;
        }
    </style>
</head>
<body>
    <img src="images/angel.gif" alt="">
    <script>
        var pic = document.querySelector('img');
        document.addEventListener('mousemove', function(e) {
            // 1. mousemove只要我们鼠标移动1px 就会触发这个事件
            // console.log(1);
            // 2.核心原理： 每次鼠标移动，我们都会获得最新的鼠标坐标， 把这个x和y坐标做为图片的top和left 值就可以移动图片
            var x = e.pageX;
            var y = e.pageY;
            console.log('x坐标是' + x, 'y坐标是' + y);
            //3 . 千万不要忘记给left 和top 添加px 单位
            pic.style.left = x - 50 + 'px';
            pic.style.top = y - 40 + 'px';
        });
    </script>
</body>
</html>
~~~





## 8.常用的键盘事件

### 8.1 常用键盘事件

![image-20200427154345192](DOM、BOM基础.assets/image-20200427154345192.png)



![image-20200429171921477](DOM、BOM基础.assets/image-20200429171921477.png)





### 8.2 键盘事件对象

![image-20200427154500236](DOM、BOM基础.assets/image-20200427154500236.png)



![image-20200429172555903](DOM、BOM基础.assets/image-20200429172555903.png)



![image-20200429172405360](DOM、BOM基础.assets/image-20200429172405360.png)



### 8.3 ASCLL表

![image-20200427154540803](DOM、BOM基础.assets/image-20200427154540803.png)



### 案例：模拟京东按键输入内容

![image-20200427154653507](DOM、BOM基础.assets/image-20200427154653507.png)





![image-20200427154727443](DOM、BOM基础.assets/image-20200427154727443.png)



![image-20200427154754406](DOM、BOM基础.assets/image-20200427154754406.png)



![image-20200429173028774](DOM、BOM基础.assets/image-20200429173028774.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" name = ''/>
</body>
<script>
    // 获取inputDom
    var input = document.querySelector('input')
    // 创建监听
    document.addEventListener('keyup',function(e){
        console.log(e);
    if(e.keyCode == 83){
        input.focus()
    }     
    })
</script>
</html>
~~~





### 案例：模拟京东快递单号查询

![image-20200427154851314](DOM、BOM基础.assets/image-20200427154851314.png)



![image-20200427154956951](DOM、BOM基础.assets/image-20200427154956951.png)





![image-20200429173259115](DOM、BOM基础.assets/image-20200429173259115.png)



![image-20200429173524507](DOM、BOM基础.assets/image-20200429173524507.png)



![image-20200429173845315](DOM、BOM基础.assets/image-20200429173845315.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            width:300px;
            height:200px;
            margin:50px auto;
            padding-left: 50px;
            position: relative;

        }
        .enlargements{
            display: none;
            width: 150px;
            /* height: 30px;
            line-height: 30px; */
            border: 1px solid #999;
            font-size: 20px;
            margin-bottom: 10px;
            /* 超出自动换行 */
            word-break:break-all;
            box-shadow: 0px 2px 8px rgba(0,0,0,0.2);
        }
        .enlargements::after{
            content: '';
            position: absolute;
            left: 64px;
            top:27px;
            width: 0px;
            height: 0px;
            border-top:8px solid #fff;
            border-right: 8px dashed transparent;
            border-left: 8px dashed transparent;
        }
        .input{
            width: 150px;
            height: 20px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="enlargements"></div>
        <input type="text" placeholder="请输入快递单号" class="input"/>
    </div>
</body>
<script>
    var input = document.querySelector('.input')
    var enlargeContent = document.querySelector(".enlargements")
    // 监听input框输入事件
     input.addEventListener('keyup',function(){
         if(input.value == ''){
            enlargeContent.innerHTML = '';
            enlargeContent.style.display = 'none';
         } else {
            enlargeContent.style.display = 'inline-block';
            enlargeContent.innerHTML = input.value
         }
     })
     // 监听input失去焦点事件
     input.addEventListener('blur',function(){
         enlargeContent.style.display = 'none';
     })
    //  监听input获得焦点事件
    input.addEventListener('focus',function(){
        if(input.value == ''){
            enlargeContent.style.display = 'none'; 
        } else {
            enlargeContent.style.display = 'inline-block'; 
        }
    })
</script>
</html>
~~~



![image-20200429220907675](DOM、BOM基础.assets/image-20200429220907675.png)



# BOM浏览器对象模型



![image-20200427155236282](DOM、BOM基础.assets/image-20200427155236282.png)





![image-20200427155446176](DOM、BOM基础.assets/image-20200427155446176.png)



## 1.BOM概述

### 1.1 什么是BOM

![image-20200427155742426](DOM、BOM基础.assets/image-20200427155742426.png)



### 1.2 BOM的构成

![image-20200427160014914](DOM、BOM基础.assets/image-20200427160014914.png)



![image-20200429174555103](DOM、BOM基础.assets/image-20200429174555103.png)





![image-20200427160112549](DOM、BOM基础.assets/image-20200427160112549.png)





![image-20200429174811784](DOM、BOM基础.assets/image-20200429174811784.png)



![image-20200429174831718](DOM、BOM基础.assets/image-20200429174831718.png)





## 2.window对象的常见事件

### 2.1 窗口加载事件

![image-20200427160238545](DOM、BOM基础.assets/image-20200427160238545.png)



![image-20200429175243675](DOM、BOM基础.assets/image-20200429175243675.png)



![image-20200429175421770](DOM、BOM基础.assets/image-20200429175421770.png)



![image-20200427160434865](DOM、BOM基础.assets/image-20200427160434865.png)









### 2.2 调整窗口大小事件

![image-20200427160514332](DOM、BOM基础.assets/image-20200427160514332.png)

**这个方法应该比较常用于媒体查询中的编程方式**



![image-20200429180312644](DOM、BOM基础.assets/image-20200429180312644.png)



![image-20200429180732949](DOM、BOM基础.assets/image-20200429180732949.png)



![image-20200429180627316](DOM、BOM基础.assets/image-20200429180627316.png)









## 3.定时器

### 3.1 两种定时器

![image-20200427160623058](DOM、BOM基础.assets/image-20200427160623058.png)



### 3.2 setTimeout()定时器

![image-20200427160725600](DOM、BOM基础.assets/image-20200427160725600.png)



![image-20200427160857802](DOM、BOM基础.assets/image-20200427160857802.png)



![image-20200429181018741](DOM、BOM基础.assets/image-20200429181018741.png)



![image-20200429181137211](DOM、BOM基础.assets/image-20200429181137211.png)



### 案例：5s后自动关闭的广告

![image-20200427160948444](DOM、BOM基础.assets/image-20200427160948444.png)



![image-20200427162632949](DOM、BOM基础.assets/image-20200427162632949.png)



![image-20200429221430540](DOM、BOM基础.assets/image-20200429221430540.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="./image/rain.png">
</body>
<script>
    var img  = document.querySelector('img');
    var spanText = document.querySelector("span");
    // 利用setTimeOut创建定时器
    var timer  = window.setTimeout(function(){
        img.style.display = 'none'
    },5000)
</script>
</html>
~~~









### 3.3 停止setTimeout()定时器

![image-20200427162742521](DOM、BOM基础.assets/image-20200427162742521.png)



![image-20200429221845350](DOM、BOM基础.assets/image-20200429221845350.png)







### 3.4 setInterval()定时器

![image-20200427162839092](DOM、BOM基础.assets/image-20200427162839092.png)



![image-20200429222200114](DOM、BOM基础.assets/image-20200429222200114.png)



### 案例：京东计时器

![image-20200427162939676](DOM、BOM基础.assets/image-20200427162939676.png)



![image-20200427163026412](DOM、BOM基础.assets/image-20200427163026412.png)



![image-20200429222348320](DOM、BOM基础.assets/image-20200429222348320.png)



![image-20200429222941861](DOM、BOM基础.assets/image-20200429222941861.png)



![image-20200429230458721](DOM、BOM基础.assets/image-20200429230458721.png)





~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            width: 360px;
            height: 150px;
            margin:50px auto;
            display: flex;
            justify-content:space-around;
        }
        .box div{
            width: 100px;
            height: 100px;
            background-color: #000;
            text-align: center;
            line-height: 100px;
            font-size: 35px;
            font-weight: 600;
            color:#fff;

        
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="hour">00</div>
        <div class="minute">11</div>
        <div class="second">22</div>
    </div>
</body>
<script>
    var hour = document.querySelector('.hour');
    var minute = document.querySelector('.minute');
    var second = document.querySelector('.second');
    var time = '2020-04-30 18:00:00';
    countTime(time);
    setInterval(countTime,1000);

    function countTime(){
        // 将输入事件转成毫秒
        var inputTime = new Date(time);
        // 获取当前的系统时间
        var nowTime = new Date();
        // 取得差值,并转成秒数
        var differenceTime = (inputTime - nowTime)/1000;
        // 获取hour
        var h = parseInt(differenceTime /60/60%24)
        h = h <10 ? '0'+h : h;
        hour.innerHTML = h;
        // 获取minute
        var min = parseInt(differenceTime/60%60)
        min = min <10 ? '0'+min : min;
        minute.innerHTML = min;
        // 获取second
        var sec = parseInt(differenceTime%60)
        sec = sec <10 ? '0'+sec : sec;
        second.innerHTML = sec;
    }

</script>
</html>
~~~





### 3.5 停止setInterval()定时器

![image-20200427163112960](DOM、BOM基础.assets/image-20200427163112960.png)



![image-20200429231252821](DOM、BOM基础.assets/image-20200429231252821.png)







### 案例：发送短信

![image-20200427163217266](DOM、BOM基础.assets/image-20200427163217266.png)



![image-20200427163314629](DOM、BOM基础.assets/image-20200427163314629.png)



![image-20200429232341659](DOM、BOM基础.assets/image-20200429232341659.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            height: 40px;
            width: 400px;
            margin: 50px auto;
            font-size: 0px;
        }
        input{
            height: 26px;
            outline: none;
            font-size: 16px;
            box-sizing: border-box;
        }
        button{
            height: 26px;
            padding: 0px 5px;
            vertical-align: top;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="box">
        <input type="text" placeholder="请输入验证码"/><button>发送</button>
    </div>
</body>
<script>
    var btn = document.querySelector('button')
     
     btn.addEventListener('click',function(){
        btn.disabled = true;
         var countTime = 10;
        //设置定时器
        var time  = window.setInterval(function(){
          if(countTime == 0){
            window.clearInterval(time);
            btn.disabled = false;
            btn.innerHTML = '发送'
          } else {
            btn.innerHTML = '还剩下'+countTime+'s';
            countTime--;
          }
        },1000)

     })
</script>
</html>
~~~



![image-20200430204836024](DOM、BOM基础.assets/image-20200430204836024.png)





### 3.6 this

![image-20200427163403572](DOM、BOM基础.assets/image-20200427163403572.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <button>点击</button>
    <script>
        // this 指向问题 一般情况下this的最终指向的是那个调用它的对象
        // 1. 全局作用域或者普通函数中this指向全局对象window（ 注意定时器里面的this指向window）
        console.log(this);
        function fn() {
            console.log(this);
        }
        window.fn();
        window.setTimeout(function() {
            console.log(this);
        }, 1000);
        // 2. 方法调用中谁调用this指向谁
        var o = {
            sayHi: function() {
                console.log(this); // this指向的是 o 这个对象
            }
        }
        o.sayHi();
        var btn = document.querySelector('button');
        // btn.onclick = function() {
        //     console.log(this); // this指向的是btn这个按钮对象
        // }
        btn.addEventListener('click', function() {
                console.log(this); // this指向的是btn这个按钮对象
            })
            // 3. 构造函数中this指向构造函数的实例
        function Fun() {
            console.log(this); // this 指向的是fun 实例对象
        }
        var fun = new Fun();
    </script>
</body>

</html>
~~~





### 案例：时钟

![image-20200427163523248](DOM、BOM基础.assets/image-20200427163523248.png)





## 4. JS执行机制

### 4.1 JS是单线程

![image-20200427163609297](DOM、BOM基础.assets/image-20200427163609297.png)



![image-20200427163719751](DOM、BOM基础.assets/image-20200427163719751.png)



![image-20200429233431036](DOM、BOM基础.assets/image-20200429233431036.png)





![image-20200427163738333](DOM、BOM基础.assets/image-20200427163738333.png)



![image-20200429233730047](DOM、BOM基础.assets/image-20200429233730047.png)











### 4.2 同步和异步

![image-20200427163803137](DOM、BOM基础.assets/image-20200427163803137.png)





### 4.3 同步和异步

![image-20200427163924013](DOM、BOM基础.assets/image-20200427163924013.png)





![image-20200430160304300](DOM、BOM基础.assets/image-20200430160304300.png)







### 4.4 JS执行机制

![image-20200427164021636](DOM、BOM基础.assets/image-20200427164021636.png)



![image-20200427164745393](DOM、BOM基础.assets/image-20200427164745393.png)



![image-20200427164803898](DOM、BOM基础.assets/image-20200427164803898.png)





![image-20200430160716452](DOM、BOM基础.assets/image-20200430160716452.png)









## 5.location 对象

### 5.1 什么是location对象

![image-20200427165037812](DOM、BOM基础.assets/image-20200427165037812.png)



### 5.2 URL

![image-20200427165122064](DOM、BOM基础.assets/image-20200427165122064.png)



### 5.3 location 对象的属性

![image-20200427165232451](DOM、BOM基础.assets/image-20200427165232451.png)



![image-20200430161526529](DOM、BOM基础.assets/image-20200430161526529.png)



### 案例：5s之后自动跳转页面

![image-20200427165337307](DOM、BOM基础.assets/image-20200427165337307.png)



![image-20200427165537445](DOM、BOM基础.assets/image-20200427165537445.png)





![image-20200430161738116](DOM、BOM基础.assets/image-20200430161738116.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            height: 20px;
            width: 2000px;
            line-height: 20px;
            font-size: 20px;
            margin: 50px auto;
        }
    </style>
</head>
<body>
    <div></div>
    <button>点击跳转</button>
</body>
<script>
    var div = document.querySelector('div');
    var btn = document.querySelector("button");
    btn.addEventListener('click',function(){
        var countTime = 3;
        var time  = window.setInterval(function(){
                    if(countTime == 0){
                    window.location.href="https://www.baidu.com/"
                    } else {
                        div.innerHTML = '还剩下'+countTime+'s跳转';
                        countTime--;
                    } 
        },1000)
    })
    
</script>
</html>
~~~



![image-20200430212049723](DOM、BOM基础.assets/image-20200430212049723.png)





### 案例：获取URL参数数据

![image-20200427165551174](DOM、BOM基础.assets/image-20200427165551174.png)



![image-20200427165650346](DOM、BOM基础.assets/image-20200427165650346.png)



![image-20200430162314301](DOM、BOM基础.assets/image-20200430162314301.png)



![image-20200430162626386](DOM、BOM基础.assets/image-20200430162626386.png)



~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="21_2_index.html">
        <input type="text" name='uname'/>
        <input type='submit'>
    </form>
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
</head>
<body>
    <div></div>
</body>
<script>
    var div = document.querySelector('div');
    var params  = window.location.search;
    console.log(params);
    var param  = params.substr(1).split("=")[1];
    div.innerHTML = '参数name:' + param;
</script>
</html>
~~~









### 5.4 location对象的方法

![image-20200427165749869](DOM、BOM基础.assets/image-20200427165749869.png)



![image-20200430163007813](DOM、BOM基础.assets/image-20200430163007813.png)











## 6. navigator对象

![image-20200427165925493](DOM、BOM基础.assets/image-20200427165925493.png)



## 7.history对象

![image-20200427170040206](DOM、BOM基础.assets/image-20200427170040206.png)



![image-20200427170127900](DOM、BOM基础.assets/image-20200427170127900.png)



![image-20200430163622283](DOM、BOM基础.assets/image-20200430163622283.png)