// components/exposid/exposid.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    classicInfo:{
      type: Number,
      observer: function (newVal, oldVal, changedPath) {
        let index = newVal < 10 ? "0" + newVal : newVal;
        this.setData({
          index: "0" + newVal
        })  
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    index: '',   //期刊号
    year: 0,
    month: '',
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月',
      '十二月']
  },

  attached: function() {
    this.getDate()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 获取年月
     */
    getDate() {
      let date = new Date();
      let year = date.getFullYear();
      let monthIndex = date.getMonth();
      let month = this.data.months[monthIndex];
      this.setData({
        year: year,
        month: month
      })
    }
  }
})
