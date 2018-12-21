// components/book/search/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    search: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //失焦
    search(e) {
      if (!e.detail.value) {  //输入框为空
        return ;
      }
      this.triggerEvent("search",{
          search: e.detail.value
      },{});
    },

/**
 * 点击历史搜索和热门搜索的词
 */
    setSearch(keyWord) {
      this.setData({
        search: keyWord
      })
    },

    /**
     * 取消
     */
    cancel() {
      wx.navigateBack({
        delta: 1
      })
    }
  }
})
