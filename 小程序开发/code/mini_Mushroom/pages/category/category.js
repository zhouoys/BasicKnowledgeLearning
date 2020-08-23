// pages/category/category.js
import {getCategory,getSubCategory,getCategoryDetail} from "../../network/net_category.js"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    categorys:[],
    currentIndex:0,
    subCategorys:[],
    subCategoryDetails:[]
  },
//--------------------网络请求数据------------------------------------------
// 请求所有的分类
_getCategory(){
  getCategory().then(res=>{
    console.log(res);
    var list = res.data.data.category.list
    this.setData({
      categorys:list
    })
    this._getSubCategory(this.data.currentIndex)
    this._getCategoryDetail(this.data.currentIndex)
  },err=>{
    console.log('请求失败',err);
  })
},
// 请求所有分类的子类
_getSubCategory(currentIndex){
  var obj = this.data.categorys[currentIndex]
  var maitKey = obj && obj.maitKey;
  getSubCategory(maitKey).then(res=>{
    console.log(res);
    var list = res.data.data.list
    this.setData({
      subCategorys:list
    })
  }).catch(err=>{
    console.log(err);
  })
},
// 查找分类的详情
_getCategoryDetail(currentIndex){
  var miniWallkey = this.data.categorys[currentIndex].miniWallkey;
  var type = "pop"
  getCategoryDetail(miniWallkey,type).then(res=>{
    console.log(res);
    var list = res.data
    this.setData({
      subCategoryDetails:list
    })
  },err=>{
  })
},
//------------------- 自定义事件--------------------------------------------------
// 处理menu返回的请求的反馈
handleTab(options){
  var currentIndex = options && options.detail.index;
  this.setData({
    currentIndex : currentIndex
  })
  this._getSubCategory(this.data.currentIndex)
  this._getCategoryDetail(this.data.currentIndex)
  // content返回顶部
  var comp = this.selectComponent("#scrolltop");
  comp.setData({
    topPosition:0
  })
  
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getCategory();
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