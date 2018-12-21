// components/book/search-key/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    },
    keyList: {
      type: Array
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
    selectkey(e) {
      const keyWord = e.currentTarget.dataset.keyWord;
      let historySearch = wx.getStorageSync("historySearch");
      if (historySearch){  //历史搜索已存在的情况
        historySearch.unshift(keyWord);
        let history = new Set(historySearch);
        wx.setStorageSync("historySearch", [...history]);
      }else {
        let history = [];
        history.push(keyWord);
        wx.setStorageSync("historySearch", history)
      }
      this.triggerEvent("seletkey", {
        keyWord: keyWord
      },{})
    }
  }
})
