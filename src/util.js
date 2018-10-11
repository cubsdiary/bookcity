// 工具函数库

import config from './config'

export function get (url) {
  return new Promise((reslove, reject) => {
    wx.request({
      url: config.host + url,
      success: (res) => {
        if (res.data.code === 0) {
          reslove(res.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}

export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}
