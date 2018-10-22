<template>
  <div class="detail-container">
    <BookInfo :data="bookDetail"></BookInfo>
    <CommentList :comments="commentArr"></CommentList>
    <div class="comment" v-if="showAdd">
      <textarea v-model='comment'
                class='textarea'
                :maxlength='100'
                placeholder='请输入图书短评'></textarea>
      <div class='location'>
        地理位置：
        <switch color='#EA5A49' :checked='location' @change='getGeo'></switch>
        <span class='text-primary'>{{location}}</span>
      </div>
      <div class='phone'>
        手机型号：
        <switch color='#EA5A49' :checked='phone' @change='getPhone'></switch>
        <span class='text-primary'>{{phone}}</span>
      </div>
      <button class="btn" @click='addComment'>
        评论
      </button>
    </div>
    <div v-else class='text-footer'>
      未登录或者已经评论过啦
    </div>
    <button open-type="share" class="button">分享给好友</button>
  </div>
</template>

<script>
import {get, post, showModal} from '../../util'
import BookInfo from '@/components/BookInfo'
import CommentList from '@/components/CommentList'
const AK = 'pASGHnRCm7ToTo0sysmaqUST6DhVvUVC'
export default {
  components: {
    BookInfo,
    CommentList
  },
  data () {
    return {
      userinfo: {},
      bookId: null,
      bookDetail: {},
      phone: '',
      location: '',
      comment: '',
      commentArr: []
    }
  },
  mounted () {
    this.bookId = this.$root.$mp.query.id
    this.getDetail()
    this.getComments()
    const userinfo = wx.getStorageSync('__userinfo__')
    if (userinfo) {
      this.userinfo = userinfo
    }
  },
  computed: {
    showAdd () {
      // 没登录
      if (!this.userinfo.openId) {
        return false
      }
      // 评论页面查到有自己的openid
      let arr = this.commentArr.filter(v => {
        return v.openid === this.userinfo.openId
      })
      if (arr.length) {
        return false
      }
      return true
    }
  },
  methods: {
    async addComment () {
      if (!this.comment) {
        return
      }
      let data = {
        openid: this.userinfo.openId,
        bookid: this.bookId,
        comment: this.comment,
        location: this.location,
        phone: this.phone
      }
      try {
        await post('/weapp/addcomment', data)
        this.comment = ''
        this.getComments()
      } catch (e) {
        showModal('评论失败', e.message, false)
      }
    },
    async getDetail () {
      const info = await get('/weapp/bookdetail', {id: this.bookId})
      this.bookDetail = info
      wx.setNavigationBarTitle({
        title: info.title
      })
    },
    async getComments () {
      const comments = await get('/weapp/commentlist', {bookid: this.bookId})
      this.commentArr = comments.list
    },
    getGeo (e) {
      let url = 'https://api.map.baidu.com/geocoder/v2/'

      if (e.target.value) {
        wx.getLocation({
          success: geo => {
            wx.request({
              url,
              data: {
                ak: AK,
                location: `${geo.latitude},${geo.longitude}`,
                output: 'json'
              },
              success: res => {
                if (res.data.status === 0) {
                  this.location = res.data.result.addressComponent.city
                } else {
                  this.location = '未知地点'
                  // console.log('出错了')
                }
              }
            })
          }
        })
      } else {
        this.location = ''
      }
    },
    getPhone (e) {
      if (e.target.value) {
        const phoneInfo = wx.getSystemInfoSync()
        this.phone = phoneInfo.model
      } else {
        this.phone = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comment{
  margin-top:10px;
  .textarea{
    width:730rpx;
    height:200rpx;
    background:#eee;
    padding:10rpx;
  }
  .location{
    margin-top:10px;
    padding:5px 10px;
  }
  .phone{
    margin-top:10px;
    padding:5px 10px;

  }
}
.text-footer{
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
}
</style>
