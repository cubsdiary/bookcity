// 工具函数库

import config from './config'

export function get (url, data) {
  return request(url, 'GET', data)
}

export function post (url, data) {
  return request(url, 'POST', data)
}

function request (url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      url: config.host + url,
      success: (res) => {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          showModal('添加失败', res.data.data.msg, false)
          reject(res.data)
        }
      }
    })
  }).catch((err) => {
    if (err) {
      console.log(err)
    }
  })
}

export function showModal (title, content, showCancel) {
  wx.showModal({
    title: title,
    content: content,
    showCancel: showCancel
  })
}

export function showSuccess (text, type) {
  wx.showToast({
    title: text,
    icon: type
  })
}
