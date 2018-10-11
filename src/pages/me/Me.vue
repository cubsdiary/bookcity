<template>
  <div class="container">
    <div class="userinfo">
      <img :src="userInfo.avatarUrl"></img>
      <p v-if>{{userInfo.nickName}}</p>
      <button class="bottom" plain="true" open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">获取用户信息</button>
    </div>
  </div>
</template>

<script>
import config from '../../config'
import qcloud from 'wafer2-client-sdk'

export default {
  data () {
    return {
      userInfo: {
        avatarUrl: '../../../static/img/unlogin.png',
        nickName: '点击登录'
      }
    }
  },
  created () {

    this.userInfo = wx.getStorageSync('__userinfo__') || {}
  },
  methods: {
    doLogin (e) {
      let user = wx.getStorageSync('__userinfo__')
      if (user) {
        console.log('一登录成功')
        return
      }
      qcloud.setLoginUrl(config.login)
      qcloud.login({
        success: function (userInfo) {
          wx.setStorageSync('__userinfo__', userInfo)
          console.log('登录成功', userInfo)
        },
        fail: function (err) {
          console.log('登录失败', err)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .container{
    .userinfo{
      padding: 0 30rpx;
      padding-top: 100rpx;
      text-align: center;
      background-color: #fa5559;
      img {
        width: 128rpx;
        height: 128rpx;
        border-radius: 128rpx;
      }
      p {
        height: 75rpx;
        line-height: 75rpx;
        font-size: 26rpx;
        color: #fff;
      }
      .bottom{
        height: 75rpx;
        font-size: 26rpx;
        color: #fff;
        border: 0;
        border-radius: 0;
        border-color: #fff;
      }
    }
  }
</style>
