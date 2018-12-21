
import { ClassicModel } from "../../models/classic.js"
const classicModel = new ClassicModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classicInfo: {},   //期刊信息   
    likeInfo: {},
    isFirst: false,
    isLatest: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLatestClassic()
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
   * 获取最新期刊
   */
  getLatestClassic() {
    classicModel.getLastestClassic()
      .then(res => {
        classicModel.setLatest(res.index)
        // console.log(classicModel.isLatest(res.isIndex))
        let likeInfo = {
          art_id: res.id,  //点赞对象
          type: res.type,  //点赞类型
          favNums: res.fav_nums,   //点赞数
          likeStatus: res.like_status  //是否点赞
        }
        this.setData({
          classicInfo: res,
          likeInfo: likeInfo,
          isFirst: classicModel.isFirst(res.index),
          isLatest: classicModel.isLatest(res.index)
        })
      })
  },

  /**
   * 获取当前的下一期
   */
  next(e) {
    this._updateClassic("next");
  },

  /**
   * 下一期
   */
  previous(e) {
    this._updateClassic("previous");
  },

  _updateClassic(status) {
    let index = this.data.classicInfo.index;
    if (index == 1 && status == "previous") {
      return
    }
    if (classicModel.isLatest(index) && status == "next") {
      return
    }
    classicModel.getNextOrPrevious(index, status)
      .then(res => {
        let likeInfo = {
          art_id: res.id,  //点赞对象
          type: res.type,  //点赞类型
          favNums: res.fav_nums,   //点赞数
          likeStatus: res.like_status  //是否点赞
        }
        this.setData({
          classicInfo: res,
          likeInfo: likeInfo,
          isFirst: classicModel.isFirst(res.index),
          isLatest: classicModel.isLatest(res.index)
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})