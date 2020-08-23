// 在network.js里面封装
import {baseURL,timeout} from './config.js'
console.log(baseURL);
function request(options){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseURL + options.url,
            method:options.method || 'get',
            timeout:timeout || 3000,
            data:options.data || {},
            success: function(res){
                resolve(res.data);
            },
            fail:function(err){
                reject(err);
            }
            // 因为fail的值是一个回调函数，所以也可以直接写作 succss:resolve,fail:reject
        })
    })
}
export default request;