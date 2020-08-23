// components/z-tabControl/z-tabControl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabList:{
      type:Array,
      value:[]
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabControl:function(e){
      var index = e.currentTarget.dataset.index;
      this.setData({
        currentIndex:index
      })
      this.triggerEvent("handleTab",{index:index},{})
    }
  }
})
