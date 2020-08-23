// pages/category/childCompon/z-menu/z-menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menus:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex : 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleMenuTab(options){
      console.log(options);
      var index = options && options.currentTarget.dataset.index
      this.setData({
        currentIndex:index
      })
      this.triggerEvent('handlemenuTab',{index},{})
    }
  }
})
