<template>
  <div class="libary">
    <Card :key="book.id" v-for="book in bookList" :data="book"></Card>
  </div>
</template>

<script>
import {get} from '@/util'
import Card from '@/components/Card'
export default {
  components: {
    Card
  },
  data () {
    return {
      bookList: []
    }
  },
  mounted () {
    this.getList()
  },
  onPullDownRefresh () {
    this.getList()
  },
  methods: {
    async getList () {
      wx.showNavigationBarLoading()
      const book = await get('/weapp/booklist')
      this.bookList = book.list
      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
    }
  }
}
</script>

<style>
</style>
