import {request} from './request'
// 获取轮播图，推荐商品，本周流行的数据
function getHomeData(){
   return request({
      url:'/home/multidata',
   })
}
// 获取tabControl,商品信息数据
function getGoodsData(type,page){
   return request({
      url:'/api/m3/home/data',
      data:{
         page:page,
         type:type
      }
   })
}
export {
   getHomeData,
   getGoodsData
}