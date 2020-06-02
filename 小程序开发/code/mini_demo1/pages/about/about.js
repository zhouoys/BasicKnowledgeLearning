// pages/about/about.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
      name:'李爱英',
      movies:['魔戒','哈利波特','绿里奇迹','天空之城'],
      personInfo:[{
        name:'silly',
        age:23,
        hobby:['baseball','food']
      },{
        name:'alice',
        age:24,
        hobby:['football','baseball']
      },{
        name:'smith',
        age:25,
        hobby:['piano','vilion']
      }],
      counter:9
  },
  add(){
    console.log('点击一下');
    this.setData({
      counter : this.data.counter+1
    })
    
  },
  reduce(){
    console.log('点击一下!!');
    this.setData({
      counter : this.data.counter-1
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