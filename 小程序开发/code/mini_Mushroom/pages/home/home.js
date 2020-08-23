// pages/home/home.js
import {getHomeData,getGoodsData} from '../../network/net_home.js'
import {BACT_TO_TOP} from "../../common/store.js"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],
    recommends:[],
    tabList:['流行','新款','精选'],
    list:['pop','new','sell'],
    goods:{
      "pop":{"page":1,list:[]},
      "new":{"page":1,list:[]},
      "sell":{"page":1,list:[]}
    },
    currentType:'pop',
    showbacktop:false,
    topPosition:0,
    showTable:false,
    tableTop:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //-------------------------------------网络请求数据---------------------
  onLoad: function (options) {
    this._getHomeData()
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },
  //----------------------------------------自定义函数----------------------
  // 监听tab-control返回的事件
  handleTabChange:function(e){
      var index = e && e.detail.index;
      this.setData({
        currentType:this.data.list[index]
      })
  },
// 获取轮播图，推荐数据
  _getHomeData(){
    getHomeData().then(res=>{
      const banners = res.data.data.banner.list.map(item => {
        return item.image
      })
      this.setData({
        bannerList : banners
      }),
      this.setData({
        recommends:res.data.data.recommend.list
      })
    })
  },
  // 获取商品数据
  _getGoodsData(type){
    var page = this.data.goods[type].page;
    getGoodsData(type,page).then( res => {
      // 临时存放数据
      var list = res.data.data.list;
      var goods = this.data.goods;
      // 改变数据
      goods[type].list.push(...list);
      goods[type].page += 1;
      // 保存数据
      this.setData({goods})
    })
  },
// 下拉加载更多
loadMore(){
    this._getGoodsData(this.data.currentType)
  },
// 返回顶部
backtoTop(){
  this.setData({
    topPosition : 0
  })
},
handleScroll(e){
  // 获取当前滚动条滚动的位置
  // 点击回到顶部
  var scrollFlag = e.detail.scrollTop >= BACT_TO_TOP;
  if(scrollFlag != this.data.showbacktop){
    this.setData({
      showbacktop : scrollFlag
    })
  };
  // tab-control固定在顶部
  console.log(this.data.tableTop);
  var tableFlag = e.detail.scrollTop >= this.data.tableTop
  if(tableFlag != this.data.showTable){
    this.setData({
      showTable : tableFlag
    })
  }
},
// 利用图片加载完成事件来获取tab-control的高度
handleImageLoad(){
    setTimeout(()=>{
      wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
        this.data.tableTop = rect.top
      }).exec();      
    },2000)
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tableTop = rect.top
    }).exec();      
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tableTop = rect.top
    }).exec();      
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