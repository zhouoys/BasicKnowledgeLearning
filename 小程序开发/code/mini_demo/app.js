const TOKEN = 'token';
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    // console.log("app.js onLaunch");
    // 通过比较可以发现该方法只有发现栏小程序主入口情景才会触发
    // console.log(options.scene);//1001
    // 1.从缓存中取出token
    const token = wx.getStorageSync(TOKEN);
    // 2.对token进行检验
    if(token && token.length ){
      // 如果token存在且不为空串，则进行token校验，判断其是否超时
      this.check_token(token)
    } else {
      // token不存在，或者token存在但是其长度为0
      console.log('重新进行登录');
      this.login();
    }
  },
  check_token:function(token){
    console.log(token);
    wx.request({
      url:'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token:token
      },
      success:(res)=>{
        if(res.statusCode === 401){
          console.log('重新进行登录');
          this.login()
        }
      },
      fail:function(err){
        console.log(err)
        console.log('重新进行登录');
        this.login()
      }
    })
    

  },
  login:function(){
    wx.login({
      success: (res) => {
          // 1.获取code
          const code = res.code
          console.log('打印code:'+code);
          // 2.向自己的服务器发送请求
          wx.request({
              url: "http://123.207.32.32:3000/login",
              method: 'post',
              data: {
                  code:code
              },
              success: (res) =>{
               if(res.statusCode === 200){
                    //3.取出token
                    console.log("取出token:"+JSON.stringify(res))
                    const token = res.data.token
                    console.log(token);
                    //4.将token保存到全局变量中
                    this.globalDatas.token = token
                    //5.将token保存到本地storage中
                    wx.setStorageSync(TOKEN,token,function(res){
                      console.log('保存成功',res);
                    })
               } else if(res.statusCode === 404 ) {
                 console.log('请求路径错误');
               } else {
                 console.log('请求失败');
               }
              },
              fail: (err) => {
                console.log("获取token失败:" + JSON.stringify(err) );
              }
          })
      },
      fail: (err) => {
        console.log('login登录失败:'+error);
      }
  })
  },

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
    },
    token:''
  }
})
