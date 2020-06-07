// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 事件捕获
  handleCaptureView1(e){
    console.log("handleCaptureView1",e);
    
  },
  handleCaptureView2(e){
    console.log("handleCaptureView2",e);
    
  },
  handleCaptureView3(e){
    console.log("handleCaptureView3",e);
  },
  // 事件冒泡
  handleBindView1(e){
    console.log("handleBindView1",e);
  },
  handleBindView2(e){
    console.log("handleBindView2",e);
  },
  handleBindView3(e){
    console.log("handleBindView3",e);
  },
  
  handFatherTap(e){
    console.log("父元素",e);
  },
  handSonTap(e){
    console.log("子元素",e);
  },
  onTouchStart(e){
    console.log('触摸开始手势',e)
 },
 onTouchMove(e){
    console.log('触摸移动手势',e)
 },
 onTouchEnd(e){
   console.log('触摸结束手势',e)
 },
 onTouchCancel(e){
     console.log('触摸取消手势',e)
 },
 onTap(e){
     console.log('轻点手势',e)
 },
 onLongPress(e){
     console.log('长按手势',e)
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