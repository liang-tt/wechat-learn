// components/book/book-grid/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: {
      type: Object
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
    detail() {
      const id= this.data.book.id;
      wx.navigateTo({
        url: `/pages/book/book-detail/book-detail?id=${id}`,
      })
    }
  }
})
