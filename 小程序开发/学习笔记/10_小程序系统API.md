# 笔记

## 网络请求基本使用

**微信提供了专属的API接口，用于网络请求：<font color="red">wx:request(Object object)</font>**

| 属性         | 类型                 | 默认值 | 必填 | 说明                                                         |
| ------------ | -------------------- | ------ | ---- | ------------------------------------------------------------ |
| url          | string               |        | 是   | 开发者服务器接口地址                                         |
| data         | string/object/Buffer |        | 否   | 请求的参数                                                   |
| header       | Object               |        | 否   | 设置请求的header,header中不能设置Referer。Content-Type默认值为application/json |
| method       | string               | GET    | 否   | HTTP请求方法                                                 |
| dataType     | string               | json   | 否   | 返回的数据格式                                               |
| responseType | string               | text   | 否   | 响应的数据类型                                               |
| success      | function             |        | 否   | 接口调用成功的回调函数                                       |
| fail         | function             |        | 否   | 接口调用失败的回调函数                                       |
| complete     | function             |        | 否   | 接口调用结束的回调函数（调用成功，或者失败都会执行）         |



### 网络请求-代码演练

![image-20200605161942378](10_小程序系统API.assets/image-20200605161942378.png)



### 网络请求-请求封装

**目前我们采用的网络请求是非常古老的请求方式，我们将他封装成Promise的方式**

![image-20200605162354603](10_小程序系统API.assets/image-20200605162354603.png)



**配置域名**

![image-20200605210840979](10_小程序系统API.assets/image-20200605210840979.png)





![image-20200605211302419](10_小程序系统API.assets/image-20200605211302419.png)



![image-20200605211354345](10_小程序系统API.assets/image-20200605211354345.png)





![image-20200605212037646](10_小程序系统API.assets/image-20200605212037646.png)



![image-20200605212957122](10_小程序系统API.assets/image-20200605212957122.png)





![image-20200605213230637](10_小程序系统API.assets/image-20200605213230637.png)





![image-20200605213350744](10_小程序系统API.assets/image-20200605213350744.png)





## 展示弹窗

**小程序中展示弹窗有四种方式：<font color="red">showToast</font>、<font color="red">showModal</font>、<font color="red">showLoading</font>、<font color="red">showActionSheet</font>**



![image-20200605162646816](10_小程序系统API.assets/image-20200605162646816.png)





![image-20200605213804314](10_小程序系统API.assets/image-20200605213804314.png)





![image-20200605213931038](10_小程序系统API.assets/image-20200605213931038.png)





![image-20200605214049490](10_小程序系统API.assets/image-20200605214049490.png)





![image-20200605215904974](10_小程序系统API.assets/image-20200605215904974.png)



![image-20200605220015882](10_小程序系统API.assets/image-20200605220015882.png)





![image-20200605220102162](10_小程序系统API.assets/image-20200605220102162.png)





![image-20200605220200249](10_小程序系统API.assets/image-20200605220200249.png)



![image-20200605220701634](10_小程序系统API.assets/image-20200605220701634.png)



![image-20200605220833989](10_小程序系统API.assets/image-20200605220833989.png)



![image-20200605221041553](10_小程序系统API.assets/image-20200605221041553.png)





## 页面分享

**分享是小程序扩散的一种重要方式，小程序中有两种分享方式:**

+ 点击右上角的<font color="red">菜单</font>，之后点击转发
+ 点击某一个按钮，直接转发

**当我们转发给好友一个小程序时候，通常小程序中会显示一些信息**

+ 如何决定这些信息的展示呢？通过<font color="red">onShareAppMessage</font>

![image-20200605163202974](10_小程序系统API.assets/image-20200605163202974.png)



![image-20200605224134214](10_小程序系统API.assets/image-20200605224134214.png)





![image-20200605224400659](10_小程序系统API.assets/image-20200605224400659.png)





![image-20200605224519772](10_小程序系统API.assets/image-20200605224519772.png)







## 小程序的登录流程

**我们先来查看一下官方给出的小程序登录流程图：**

1. 调用wx.login获取code
2. 调用wx.request发送code到我们自己的服务器（我们自己的服务器会返回一个登录状态的标识，比如token）
3. 将登录状态的标识token进行存储，以便下次使用
4. 请求需要登录状态标识的接口时，携带token

![image-20200605163758179](10_小程序系统API.assets/image-20200605163758179.png)

![image-20200605232911125](10_小程序系统API.assets/image-20200605232911125.png)





![image-20200605233034610](10_小程序系统API.assets/image-20200605233034610.png)





![image-20200605233449336](10_小程序系统API.assets/image-20200605233449336.png)





![image-20200605233657153](10_小程序系统API.assets/image-20200605233657153.png)





![image-20200605233820969](10_小程序系统API.assets/image-20200605233820969.png)





![image-20200605234836612](10_小程序系统API.assets/image-20200605234836612.png)







### 小程序登录演练

![image-20200605163838707](10_小程序系统API.assets/image-20200605163838707.png)





![image-20200605235600687](10_小程序系统API.assets/image-20200605235600687.png)



![image-20200605235713366](10_小程序系统API.assets/image-20200605235713366.png)



![image-20200605235859835](10_小程序系统API.assets/image-20200605235859835.png)





![image-20200605235938982](10_小程序系统API.assets/image-20200605235938982.png)



![image-20200606000436703](10_小程序系统API.assets/image-20200606000436703.png)





![image-20200606000348212](10_小程序系统API.assets/image-20200606000348212.png)





![image-20200606000321254](10_小程序系统API.assets/image-20200606000321254.png)





![image-20200606000553454](10_小程序系统API.assets/image-20200606000553454.png)





![image-20200606000816744](10_小程序系统API.assets/image-20200606000816744.png)





![image-20200606001023689](10_小程序系统API.assets/image-20200606001023689.png)







![image-20200606205236524](10_小程序系统API.assets/image-20200606205236524.png)



![image-20200606205335301](10_小程序系统API.assets/image-20200606205335301.png)





![image-20200606205817818](10_小程序系统API.assets/image-20200606205817818.png)





![image-20200606205943612](10_小程序系统API.assets/image-20200606205943612.png)



![image-20200606210141308](10_小程序系统API.assets/image-20200606210141308.png)





![image-20200606210336514](10_小程序系统API.assets/image-20200606210336514.png)





![image-20200606210556223](10_小程序系统API.assets/image-20200606210556223.png)





![image-20200606210655843](10_小程序系统API.assets/image-20200606210655843.png)







![image-20200606210905257](10_小程序系统API.assets/image-20200606210905257.png)





![image-20200606211118508](10_小程序系统API.assets/image-20200606211118508.png)





![image-20200606211209431](10_小程序系统API.assets/image-20200606211209431.png)







## 界面跳转

**界面的跳转有两种方式：<font color="red">通过navigator组件</font>和<font color="red">通过wx的API跳转</font>**

navigator组件主要就是用于界面的跳转的:

| 属性      | 类型   | 默认值   | 必填 | 说明                                                         |
| --------- | ------ | -------- | ---- | ------------------------------------------------------------ |
| target    | string | self     | 否   | 在哪个目标上发生跳转，默认当前小程序                         |
| url       | string |          | 否   | 当前小程序内的跳转链接                                       |
| open-type | string | navigate | 否   | 跳转方式                                                     |
| delta     | number | 1        | 否   | 当open-type为<font color="red">navigateBack</font>时有效，表示回退的层数 |



![image-20200606211718271](10_小程序系统API.assets/image-20200606211718271.png)







### open-type的取值

| 值           | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| navigate     | 对应<font color="red">wx.navigateTo</font>或 <font color="red">wx.navigateToMiniProgram</font>的功能 |
| redirect     | 对应<font color="red">wx.redirectTo</font>的功能             |
| switchTab    | 对应<font color="red">wx.switchTab</font>的功能              |
| reLaunch     | 对应<font color="red">wx.reLaunch</font>的功能               |
| navigateBack | 对应<font color="red">wx.navigateBack</font>的功能           |
| exit         | 退出小程序，target="miniProgram"时生效                       |

**<font color="red">redirect：</font>**关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到tabber页面，并且不能返回。（不是一个压栈）

**<font color="red">switchTab：</font>**跳转到tabBar页面，并关闭其他所有的非tabBar页面。（需要在tabBar中定义的）

**<font color="red">reLaunch：</font>**关闭所有的页面，打开应用中的某个页面。（直接展示某个页面，并且可以跳转到tabBar页面）



![image-20200606212110599](10_小程序系统API.assets/image-20200606212110599.png)





![image-20200606225407888](10_小程序系统API.assets/image-20200606225407888.png)



![image-20200606225554161](10_小程序系统API.assets/image-20200606225554161.png)





![image-20200606225726777](10_小程序系统API.assets/image-20200606225726777.png)





![image-20200606230426407](10_小程序系统API.assets/image-20200606230426407.png)











## 导航返回

**导航返回有两个属性来起作用**

+ open-type：navigateBack（表示该navigator组件用于返回）

+ delta:返回的层级（指定返回的层级，open-type必须是navigateBack才生效）

  ~~~html
  <!--返回上一级-->
  <navigator open-type="navigateBack">
  返回上一级
  </navigator>
  ~~~



![image-20200606230627346](10_小程序系统API.assets/image-20200606230627346.png)





![image-20200606230910601](10_小程序系统API.assets/image-20200606230910601.png)





## 数据传递

### 传递方式分析

**如何在界面跳转过程中我们需要相互传递一些数据，应该如何完成呢？**

1. 首页 -->详情页：使用URL中的query字段

2. 详情页-->首页：在详情页内部拿到首页的页面对象，直接修改数据

   ![image-20200605172010811](10_小程序系统API.assets/image-20200605172010811.png)
   
   

![image-20200606231155431](10_小程序系统API.assets/image-20200606231155431.png)





![image-20200606231317608](10_小程序系统API.assets/image-20200606231317608.png)



![image-20200606231518110](10_小程序系统API.assets/image-20200606231518110.png)



![image-20200606231718472](10_小程序系统API.assets/image-20200606231718472.png)



![image-20200606231815818](10_小程序系统API.assets/image-20200606231815818.png)







### 传递过程

1. 首页 - > 详情页

   通过修改URL传递参数

2. 详情页 - > 首页

    返回时携带数据有两个问题需要考虑

   + 问题一：在什么地方修改数据
     + 如果你是监听按钮或者navigator的点击来返回时，可以通过bindtap来映射到某个函数，在函数中完成
     + 但是这种方式不能监听左上角返回按钮的点击
     + 所以我们选择在onUnload中修改数据
   + 问题二：如何修改数据
     + 小程序并没有提供直接修改数据的方法
     + 但是可以通过getCurrentPages来获取所有的页面，然后使用页面对象的setData({})函数来修改。

### 代码演练

![image-20200605173104613](10_小程序系统API.assets/image-20200605173104613.png)



### 代码的跳转和返回

**很多情况下，我们并不喜欢使用navigator组件来进行跳转**

+ 可能我们希望用户点击了某个button或者view时，对该button或者view进行监听
+ 之后，通过相关的代码逻辑实现跳转

**对此，微信也提供了对应的API接口**

+ wx.navigateTo(url,[])

+ wx.navigateBack([delta])

  ![image-20200605173450798](10_小程序系统API.assets/image-20200605173450798.png)



![image-20200606231946086](10_小程序系统API.assets/image-20200606231946086.png)





![image-20200606232225415](10_小程序系统API.assets/image-20200606232225415.png)







![image-20200606232321676](10_小程序系统API.assets/image-20200606232321676.png)





![image-20200606232633358](10_小程序系统API.assets/image-20200606232633358.png)