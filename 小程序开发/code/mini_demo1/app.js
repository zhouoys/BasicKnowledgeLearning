App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  // onLaunch: function (options) {
  //   console.log("app.js onLaunch");
  //   // 通过比较可以发现该方法只有发现栏小程序主入口情景才会触发
  //   console.log(options.scene);//1001
  // },

    /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  // onShow: function (options) {
  //   console.log("app.js onShow");
  //   console.log(options.scene);//1001 1005 1012 1007
  //   // 获取用户信息方式一，获取到用户信息，并且将信息传递到服务器中，该方法逐渐被废弃
  //   wx.getUserInfo({
  //     success:function(userInfo){
  //       console.log(userInfo);
  //     }
  //   })
  // },
  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("app.js onHide");
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  // 我是定义在全局的变量
  globalDatas:{
    personInfo:{
      name:'silly',
      age:13,
      hobby:['羽毛球','兵乓球']
    }
  }
})
