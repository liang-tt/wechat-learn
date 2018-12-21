
import {HTTP} from "../utils/http.js"

class ClassicModel extends HTTP {
  //获取z最新一期期刊
  getLastestClassic() {
    return this.request({
      url: "classic/latest"
    })
  }

  //获取上一期或下一期的期刊
  getNextOrPrevious(index, nextOrPrevious) {
    return this.request({
      url: `classic/${index}/${nextOrPrevious}`
    })
  }

  //判断是否是第一期
  isFirst(index) {
    return index == 1 ? true : false;
  }

  //判断是否是最新期
  isLatest(index) {
    return wx.getStorageSync("latest") == index;
  }

  //最新期缓存
  setLatest(index) {
    wx.setStorageSync("latest", index)
  }

}

export {ClassicModel}