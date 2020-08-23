App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
  },
    /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
  },
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
  // 保存购物车的添加
  addToCart:function(obj){
    // 判断是否为重复的商品
    var  item= this.globalData.cartList.find(element =>{
        return element.iid === obj.iid
    })
    if(item){
      // 如果存在
      item.count += 1;
    } else {
      // 如果不存在
      obj.count = 1
      obj.checked = true
      this.globalData.cartList.push(obj)
    }
  },
  globalData:{
    cartList:[]
  }
})
