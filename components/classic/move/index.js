// components/classic/move/index.js
import {
  classicBeh
} from "../classic-beh.js"
Component({
  behaviors: [classicBeh],
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: Number,
      observer: function (newVal, oldVal, changedPath) {
        let img = "";
        switch (newVal) {
          case 100: img ="../images/movie@tag.png"; break;
          case 300: img = "../images/essay@tag.png"; break;
        };
        this.setData({
          img: img
        })
      }
    },
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    img: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
