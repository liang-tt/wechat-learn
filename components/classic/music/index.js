
import {
  classicBeh
} from "../classic-beh.js";

const backgroundAudioManager = wx.getBackgroundAudioManager();

Component({
  behaviors: [classicBeh],
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    },
    src: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    pause: "../images/player@pause.png",
    play: "../images/player@play.png",
    isPlaying: false
  },

  lifetimes: {
    attached: function() {
      this.watchMonitor();
      this.judgeInitStatus()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击播放或暂停
     */
    onPlay(e) {
      let isPlaying = !this.data.isPlaying;
      this.setData({
        isPlaying: isPlaying
      });
      if (isPlaying) {
        backgroundAudioManager.src = this.data.src;
        backgroundAudioManager.title = this.data.title;
      } else {
        backgroundAudioManager.pause()
      }
    },

    /**
     * 监听播放器
     */
    watchMonitor() {
      backgroundAudioManager.onPlay(() => {
        this.setData({
          isPlaying: true
        });
      });
      backgroundAudioManager.onPause(() => {
        this.setData({
          isPlaying: false
        });
      });
      backgroundAudioManager.onStop(() => {
        this.setData({
          isPlaying: false
        });
      });
    },

    /**
     * 页面转换时判断图标
     */
    judgeInitStatus() {
      if (backgroundAudioManager.paused) {
        this.setData({
          isPlaying: false
        })
      }else {
        if (backgroundAudioManager.src == this.data.src) {
          this.setData({
            isPlaying: true
          })
        }
      }
    }
  }
})
