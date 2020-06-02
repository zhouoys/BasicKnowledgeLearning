// pages/Mustache/Mustache.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'HELLO WORLD',
    age:19,
    active:true,
    time:new Date().toLocaleString(),
    isShow:true,
    score:15,
    movies:['哈利波特','指环王','三个火枪手','胭脂泪'],
    personInfo:[
      [1,2,3,4],
      ['one','two','three'],
      ['mondey','sunday','saturday']
    ]
  },
  switchover(){
    this.setData({
      isShow:!this.data.isShow
    })

  },
  changeCSS(){
    this.setData({
      active: !this.data.active
    })
  },
  handle(){
    this.setData({
      score:this.data.score + 10
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(()=>{
      this.setData({
        time:new Date().toLocaleString()
      })
    },1000)

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