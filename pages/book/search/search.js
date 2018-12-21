// pages/book/search/search.js
import {
  BookModel
} from "../../..//models/book.js"
const bookModel = new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    hotKeys: [],   //热门搜索
    historyKeys: [],   //历史搜索数据
    search: "",   //搜索字段
    isSearch: false,
    result: [],
    start: 0,
    total: 0,
    loadingCenter: false,
    loadingBottom: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      historyKeys: wx.getStorageSync("historySearch")
    });
    this.getHotKeyword()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

/**
 * 获取热门关键字
 */
  getHotKeyword () {
    bookModel.getHotKeyword()
      .then( res => {
        this.setData({
          hotKyes: res.hot
        })
      })
  },

  /**
   * 监听输入名称
   */
  inputKey (e) {
    this.setData({
      search: e.detail.search
    })
    this.confirm()
  },

/**
 * 点击热门搜索和历史搜索字段
 */
  selectKey (e) {
    let keyWord = e.detail.keyWord;
    this.setData({
      search: keyWord
    })
    this.selectComponent("#search").setSearch(keyWord);
    this.confirm();
  },

//搜索过的传入缓存
  setStorage() {
    let historySearch = wx.getStorageSync("historySearch");
    const keyWord = this.data.search;
    if (historySearch) {  //历史搜索已存在的情况
      historySearch.unshift(keyWord);
      let history = new Set(historySearch);
      wx.setStorageSync("historySearch", [...history]);
    } else {
      let history = [];
      history.push(keyWord);
      wx.setStorageSync("historySearch", history)
    }
  },

  confirm () {
    this.setStorage();
    this.setData({
      isSearch: true,
      start: 0
    })
    this.searchInit()
  },

//加载更多
  loadMore() {
    if (this.data.result.length == this.data.total){
      return
    }
    this.data.start = this.data.result.length;
    // wx.showLoading({
    //   title: '加载中',
    // })
    this.setData({
      loadingBottom:true
    })
    bookModel.searchBook(this.data.start, this.data.search)
      .then(res => {
        // wx.hideLoading();
        this.setData({
          loadingBottom: false
        })
        this.setData({
          result: [...this.data.result, ...res.books],
          total: res.total
        })

      })
  },

  searchInit() {
    // wx.showLoading({
    //   title: '加载中',
    // })
    this.setData({
      loadingCenter: true
    })
    bookModel.searchBook(this.data.start, this.data.search)
      .then(res => {
        // wx.hideLoading();
        this.setData({
          loadingCenter: false
        })
        this.setData({
          result:  res.books,
          total: res.total
        })
        
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})