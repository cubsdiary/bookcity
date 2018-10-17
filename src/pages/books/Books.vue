<template>
  <div class="libary">
    <Card :key="book.id" v-for="book in bookList" :data="book"></Card>
    <p class="text-footer" v-if="!more">
      没有跟多数据
    </p>
  </div>
</template>

<script>
/*
  35 条数据
  每次加载10条
  1页 0-10
  2 10-20
  3 20-30
  4 30-40（5）
  page 当前第几页

  没有更多数据
  1. page = 0 不能显示这条提醒
  2 page > 0 数据长度< 10 ,停止触底加载
*/
import {get} from '@/util'
import Card from '@/components/Card'
export default {
  components: {
    Card
  },
  data () {
    return {
      bookList: [],
      page: 0,
      more: true,
      limit: 3
    }
  },
  mounted () {
    this.getList(true)
  },
  onPullDownRefresh () {
    this.getList(true)
  },
  onReachBottom () {
    if (!this.more) {
      return
    }
    this.page = this.page + 1
    this.getList(false)
  },
  methods: {
    async getList (init) {
      if (init) {
        this.more = true
        this.page = 0
      }
      wx.showNavigationBarLoading()
      const books = await get('/weapp/booklist', {page: this.page, limit: this.limit})
      if (books.list.length < this.limit && this.page > 0) {
        this.more = false
      }
      if (init) {
        this.bookList = books.list
        wx.stopPullDownRefresh()
      } else {
        this.bookList = this.bookList.concat(books.list)
      }
      wx.hideNavigationBarLoading()
    }
  }
}
</script>

<style lang="scss" scoped>
  .text-footer{
    text-align: center;
    font-size: 12px;
  }
</style>
