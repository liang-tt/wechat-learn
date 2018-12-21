
import {config} from "config.js";

class HTTP {
  request({url, data = {}, method='get'}) {
    return new Promise((resolve,reject) => {
      this._request(url,resolve,reject,data,method)
    })
  };

  _request(url, resolve, reject, data ={}, method="get") {
    wx.request({
      url: config.baseUrl + url,
      data: data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      method: method,
      success: function (res) {
        const code = res.statusCode.toString();
        if (code.startsWith("2")) {
          resolve(res.data)
        }else {
          reject();
          const error_code = res.data.error_code;
          this._showError(code)
        }
        
       },
      fail: function (err) {
        reject();
        this._showError(1)
       },
    })
  };

  _showError(errCode) {
    const tips = {
      1: '抱歉，出现了一个错误',
      1005: 'appkey无效，请前往www.7yue.pro申请',
      3000: '期刊不存在'
    };
    let code = !errCode ? 1 : errCode;
    wx.showToast({
      title: tips[code]
    })
  }
}

export {
  HTTP
}