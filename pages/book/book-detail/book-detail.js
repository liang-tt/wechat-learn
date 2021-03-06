// pages/book/book-detail/book-detail.js
import {
  BookModel
} from '../../../models/book.js'
const bookModel = new BookModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    book: {},
    comments: [],  //短评
    posting: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id= options.id;
    this.getDeatil(id)
    this.getComments(id)
    this.setData({
      id: id
    })
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
 * 获取书籍详情
 */
  getDeatil(id) {
    bookModel.bookDetail(id)
      .then( res => {
        this.setData({
          book: res
        })
      })
  },

/**
 * 获取短评
 */
  getComments(id) {
    // const id = this.data.id;
    bookModel.getComments(id)
      .then(res => {
        console.log(res)
        this.setData({
          comments: res.comments
        })
      })
  },

  /**
   * 点击输入短评
   */
  fakePost() {
    this.setData({
      posting: true
    })
  },

  /**
   * 取消
   */
  cancelComment() {
    this.setData({
      posting: false
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})