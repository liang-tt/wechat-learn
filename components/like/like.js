// components/like/like.js
import {
  LikeModel
} from "../../models/like.js"
const likeModel = new LikeModel()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    likeInfo: {   //点赞信息
      type: Object,
      observer: function (newVal, oldVal, changedPath) {
        if (Object.keys(newVal).length > 0) {
          this.setData({
            likeStatus : newVal.likeStatus,
            favNums: newVal.favNums
          })
        }
      }
    },
    readOnly: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeImg: "images/like.png",
    notLike: "images/like@dis.png",
    likeStatus: false,
    favNums: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    likeClick(event) {
      if (this.data.readOnly){  
        return;
      }
      let likeInfo = this.data.likeInfo
      let likeStatus = 1-this.data.likeStatus;  //点赞是1，取消是0
      let favNums = likeStatus == 0 ? (this.data.favNums - 1) : (this.data.favNums + 1);
      this.setData({
        likeStatus: likeStatus,
        favNums: favNums
      });

      likeModel.like(likeStatus, likeInfo.art_id, likeInfo.type)
        .then(res => {

        })

    }
  }
})
