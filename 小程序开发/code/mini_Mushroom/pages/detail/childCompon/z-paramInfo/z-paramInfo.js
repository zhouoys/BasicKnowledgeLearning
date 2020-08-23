// pages/detail/childCompon/z-paramInfo/z-paramInfo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    paramInfo:{
      type:Object,
      value:{},
      observer:function(oldValue,newValue){
        console.log(oldValue,newValue);
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
