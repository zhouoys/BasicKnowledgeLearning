import {request} from "../network/request.js"

//获取详情页信息
function getDetail(iid){
  return request({
    url:"/api/m3/detail",
    data:{
      iid
    }
  })
}
function getRecommends() {
  return request({
    url: '/api/m3/recommend'
  })
}
// 商品基本信息
class GoodsBaseInfo{
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.realPrice = itemInfo.lowNowPrice
    this.columns = columns
    this.services = services
  }
}
// 店铺基本信息
class ShopInfo{
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}
export {
  getDetail,
  GoodsBaseInfo,
  ShopInfo,
  getRecommends
}