// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:['流行','新款','精选','潮流']
  },
  handleClick(event){
    console.log(event);
  },
  handleIncrement(){
    var tab_sel = this.selectComponent(".tab_increment");
    console.log(tab_sel);
    // tab_sel.setData({
    //   counter:tab_sel.data.counter + 20
    // })
    tab_sel.increment(50);
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