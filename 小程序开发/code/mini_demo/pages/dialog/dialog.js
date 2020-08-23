// pages/dialog/dialog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onToastClick() {
    wx.showToast({
      title: '你好啊',
      duration: 3000,
      icon: 'loading',
      mask: true,
      success: function () {
        console.log("展示成功")
      },
      fail: function () {
        console.log("展示失败")
      },
      complete: function () {
        console.log('展示完成')
      }
    })
  },
  onModalClick(){
    wx.showModal({
        title:'我是标题',
        content: '我是内容，哈哈哈',
        showCancel:true,
        cancelText:'返回',
        cancelColor:'#ff8800',
        success:function(res){
            if(res.confirm){
                console.log("用户点击了确定")
            }
            if(res.cancel){
                console.log('用户点击了取消')
            }
         }
    })
},
  onLoadingClick() {
    wx.showLoading({
      title: '加载img',
      mask: true
    });
    setTimeout(() => {
      wx.hideLoading()
    }, 2000)
  },
  onActionSheetClick() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: '#ff000',
      success: function (res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})