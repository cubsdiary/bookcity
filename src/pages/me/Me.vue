<template>
  <div class="container">
    <div class="userinfo">
      <button class="bottom-img" plain="true" open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">
        <img class="imgs" :src="userInfo.avatarUrl" />
      </button>
      <button class="bottom-p" plain="true" open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">
        <p>{{userInfo.nickName}}</p>
      </button>
    </div>
    <div class="menu-bar">
      <ul class="menu-list">
        <li class="menu-li" @click="getBook">添加图书</li>
        <li class="menu-li">退出登录</li>
      </ul>
    </div>
  </div>
</template>

<script>
import config from '../../config'
import qcloud from 'wafer2-client-sdk'
import {showSuccess, post, showModal} from '../../util'
export default {
  data () {
    return {
      userInfo: {
        avatarUrl: '../../../static/img/unlogin.png',
        nickName: '点击登录'
      },
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }
  },
  onShow () {
    this.userInfo = wx.getStorageSync('__userinfo__') || this.userInfo
  },
  methods: {
    doLogin () {
      let user = wx.getStorageSync('__userinfo__')
      if (!user) {
        qcloud.setLoginUrl(config.login)
        qcloud.login({
          success: (res) => {
            showSuccess('登录成功', 'success')
            wx.setStorageSync('__userinfo__', res)
            this.userInfo = res
          },
          fail: (err) => {
            if (err) {
              showSuccess('登录失败', 'none')
            }
          }
        })
      }
    },
    getBook () {
      wx.scanCode({
        success: (res) => {
          if (res.result) {
            this.addBook(res.result)
          }
        },
        fail: (err) => {
          if (err) {
            showModal('失败', '二维码识别信息失败', false)
          }
        }
      })
    },
    async addBook (isbn) {
      const res = await post('/weapp/addbook', {
        isbn,
        openid: this.userInfo.openId
      })
      if (res && res.title) {
        showModal('添加成功', `《${res.title}》添加成功`)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .container{
    background-color: #f6f6f6;
    .userinfo{
      display: flex;
      flex-direction: column;
      padding: 0 30rpx;
      padding-top: 100rpx;
      text-align: center;
      background-color: #fa5559;
      .bottom-img{
        display: inline-block;
        color: #fff;
        border: 0;
        border-radius: 0;
        border-color: #fff;
        overflow: hidden;
        margin-bottom: 20rpx;
        padding: 0;
        line-height: 0;
        .imgs {
          width: 128rpx;
          height: 128rpx;
          border-radius: 128rpx;
          background-color: #fff;
        }
      }
      .bottom-p{
        display: inline-block;
        height: 30rpx;
        color: #fff;
        border: 0;
        border-radius: 0;
        border-color: #fff;
        overflow: hidden;
        margin-bottom: 20rpx;
        line-height: 30rpx;
        font-size: 26rpx;
        color: #fff;
      }
    }
    .menu-bar{
      background-color: #fff;
      overflow: hidden;
      .menu-list{
        margin-top: 10rpx;
        border-top: 1rpx solid #e7e7e7;
        .menu-li{
          padding: 0 30rpx;
          height: 70rpx;
          line-height: 70rpx;
          font-size: 24rpx;
          color: #666666;
          border-bottom: 1rpx solid #e7e7e7;
        }
      }
    }
  }
</style>
