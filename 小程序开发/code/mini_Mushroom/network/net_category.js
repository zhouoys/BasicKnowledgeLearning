import {request} from "./request"

// 获取父目录
function getCategory(){
  return request({
    url:"/api/m3/category"
  });
}
// 获取子目录
function getSubCategory(maitKey){
  return request({
    url:"/api/m3/subcategory",
    data:{
      maitKey
    }
  })
}
// 获取子目录商品详情
function getCategoryDetail(miniWallkey, type){
  return request({
    url:"/api/m3/subcategory/detail",
    data:{
      miniWallkey,type
    }
  })
}
export {
  getCategory,
  getSubCategory,
  getCategoryDetail
}