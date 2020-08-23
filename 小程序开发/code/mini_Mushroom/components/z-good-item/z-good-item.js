// components/z-good-item/z-good-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodItem:{
      type:Object,
      value:{}
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
    handlegoto(){
      var iid  = this.data.goodItem && this.data.goodItem.iid
      var url = "/pages/detail/detail?iid="+iid
      wx.navigateTo({
        url: url,
      })
    }
  }
})
