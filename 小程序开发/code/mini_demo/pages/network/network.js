// pages/network/network.js
import request from './http.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   * 测试网络请求
   */
  // 使用封装的request发出网络请求
  getHttp: function(){
    // request({
    //     url: "/login",
    //     data:{type : 'sell',page: 1}
    //     }).then(res => {
    //     	console.log(res)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    },
  onLoad: function (options) {
   this.getHttp();
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