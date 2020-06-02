// pages/scene/scene.js

// 获取全局变量,getApp()获取app.js创建的全局对象
var app = getApp();
console.log(app.globalDatas.personInfo.name);
console.log(app.globalDatas.personInfo.hobby);
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  getUserDetail:function(datas){
    console.log(datas);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(' scene onLoad');
    wx.request({
      url: 'http://123.207.32.32:8000/api/m3/recommend',
      success:(res)=>{
        console.log(res); 
      }
    })
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

  },
  // 下拉刷新
  onPullDownRefresh(event){
    console.log('下拉刷新'+event);
  },
  //下拉加载更多
  onReachBottom(event){
    console.log('下拉加载更多'+event);
  },
  // 监听滚动
  onPageScroll(event){
    console.log('监听滚动'+event);
  }
})