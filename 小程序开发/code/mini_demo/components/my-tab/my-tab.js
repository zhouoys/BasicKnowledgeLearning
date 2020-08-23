// components/my-tab/my-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabList:{
      type:Array,
      value:[],
      observer:function(newVal,oldVal){
        console.log(newVal);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0,
    counter: 10

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabChange(event){
      var index = event && event.currentTarget.dataset.tabindex
      this.setData({
        currentIndex : index
      })
      // 将点击的元素索引，以及标题发送给Page页面
      this.triggerEvent('itemClick',{index:index,title:this.properties.tabList[index]},{})
    },
    increment(num){
      this.setData({
        counter: this.data.counter + num
      })
    }
  }
})
