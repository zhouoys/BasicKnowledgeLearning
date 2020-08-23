// pages/detail/detail.js
import {getDetail,GoodsBaseInfo,ShopInfo, getRecommends} from "../../network/net_detail.js"
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:"",
    bannersTopImage:[],
    goodBaseInfo:{},
    shopInfo:{},
    detailInfo:{},
    paramInfo:{},
    commentInfo:{},
    recommends:[]
  },
//-------------------------------------网络请求相关---------------------------------------
_getDetail(iid){
  getDetail(iid).then(res=>{
    const data = res.data.result;
    console.log(res);
    // 轮播图
    var topImages = data.itemInfo.topImages;
    this.setData({bannersTopImage:topImages});
    // 基本商品信息展示
    var iteminfo = data.itemInfo;
    var columns = data.columns;
    var services = data.shopInfo.services;
    var goodBaseInfo = new GoodsBaseInfo(iteminfo, columns, services);
    this.setData({goodBaseInfo:goodBaseInfo});
    //  店铺信息展示
    var baseShopInfo = data.shopInfo;
    var shopInfo = new ShopInfo(baseShopInfo);
    this.setData({shopInfo:shopInfo});
    //  商品详情
    var detailInfo = data.detailInfo;
    this.setData({
      detailInfo:detailInfo
    })
    // 商品基本信息与商品规格
    var paramInfo = {};
    paramInfo.info = data.itemParams.info.set;
    paramInfo.size = data.itemParams.rule.tables;
    this.setData({
      paramInfo:paramInfo
    })
    // 评论信息
    var commentInfo = data.rate.list;
    this.setData({
      commentInfo:commentInfo
    })
    // 推荐商品信息
  })
},
_getRecommends() {
  getRecommends().then(res => {
    console.log(res);
    this.setData({
      recommends: res.data.data.list
    })
  })
},
// 添加到购物车
handleAddCar:function(){
   // 1.获取商品对象
   const obj = {}
   obj.iid = this.data.iid;
   obj.imageURL = this.data.bannersTopImage[0];
   obj.title = this.data.goodBaseInfo.title;
   obj.desc = this.data.goodBaseInfo.desc;
   obj.price = this.data.goodBaseInfo.realPrice;
   // 2.加入到购物车列表
   app.addToCart(obj)
   // 3.加入成功提示
   wx.showToast({
     title: '加入购物车成功',
   })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("this.iid:" + options.iid);
    this.setData({iid:options.iid}) 
    this._getDetail(this.data.iid)
    // 3.请求推荐的数据
    this._getRecommends()  
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