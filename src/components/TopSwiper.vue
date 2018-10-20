<template>
  <div class="swiper">
    <swiper :indicator-dots="true"
            :indicator-color="'#ffffff'"
            :indicator-active-color="'#fa5559'"
            :autoplay="true"
            :interval="6000"
            :duration="1000"
            :circular="true">
      <block :key="imgindex" v-for="(arr, imgindex) in imgsUrl">
        <swiper-item class="swiper-item">
          <img
            class="swiper-img"
            mode="aspectFit"
            :key="book.id"
            v-for="book in arr"
            :src="book.image"
            @click="goBookDetail(book)"
            alt="">
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    imgsUrl () {
      let res = this.data
      return [res.slice(0, 3), res.slice(3, 6), res.slice(6)]
    }
  },
  methods: {
    goBookDetail (item) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + item.id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper{
    .swiper-item{
      display: flex;
      align-items: center;
      justify-content: center;
      .swiper-img{
        display: inline-block;
        width: 150px;
        height: 150px;
      }
    }
  }
</style>
