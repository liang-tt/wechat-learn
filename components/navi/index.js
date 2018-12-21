// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    },
    isFirst: {
      type: Boolean
    },
    isLatest: {
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    leftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    rightSrc: 'images/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 下一期
     */
    onRight() {
      this.triggerEvent("next",{},{});
    },
    /**
     * 上一期
     */
    onLeft() {
      this.triggerEvent("previous", {}, {});
    }
  }
})
