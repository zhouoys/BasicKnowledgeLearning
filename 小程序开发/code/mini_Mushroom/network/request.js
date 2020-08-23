import {baseURL,timeout} from './config.js'
function request(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseURL + options.url,
      timeout:options.timeout || timeout,
      method:options.method || 'get',
      data:options.data || {},
      success:resolve,
      fail:reject
    })
  })
}
export {
  request
}