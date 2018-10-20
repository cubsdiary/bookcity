<template>
  <a :href="detailUrl">
    <div class="book-card">
      <div class="thumb" @click.stop="previewImg">
        <img :src="data.image"
          class="image"
          mode="aspectFit"
          alt=""
          />
      </div>
      <div class="detail">
        <div class="row">
          <div class="right">
            {{data.rate}}
            <Rate :value='data.rate'></Rate>
          </div>
          <div class="left">
            {{data.title}}
          </div>
        </div>
        <div class="row">
          <div class="right">
            浏览量：{{data.count}}
          </div>
          <div class="left">
            {{data.author}}
          </div>
        </div>
        <div class="row">
          <div class="right">
            {{data.publisher}}
          </div>
          <div class="left">
            {{data.user_info.nickName}}
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import Rate from '@/components/Rate'
export default {
  components: {
    Rate
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    detailUrl () {
      return '/pages/detail/main?id=' + this.data.id
    }
  },
  methods: {
    previewImg () {
      wx.previewImage({
        urls: [this.data.image],
        current: this.data.image
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .book-card{
    padding: 5px;
    overflow: hidden;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 24rpx;
    .thumb{
      width: 90px;
      height: 90px;
      float: left;
      margin: 0 auto;
      overflow: hidden;
      .image{
        max-width: 90px;
        max-height: 90px;
      }
    }
    .detail{
      margin-left: 100px;
      .row{
        line-height: 20px;
        margin-bottom: 3px;
      }
      .right{
        float: right;
      }
      .left{
        margin-right: 80px;
      }
    }
  }
</style>
