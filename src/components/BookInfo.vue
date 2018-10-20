<template>
  <div class='bookinfo'>
    <div class="thumb">
      <img class='back'
        :src="data.image"
        mode='aspectFill'>
      <img class="img"
            :src="data.image"
            mode='aspectFit'
          >
      <div class="info">
        <div class="title">
          {{data.title}}
        </div>
        <div class="author">
          {{data.author}}
        </div>
      </div>
    </div>
    <div class="detail">
      <img :src="userInfo.image" class='avatar' mode='aspectFit'>
      {{userInfo.name}}
      <div class="right text-primary">
        {{data.rate}}分
        <Rate :value='data.rate'></Rate>
      </div>
    </div>
    <div class="detail">
      {{data.publisher}}
      <div class="right">
        {{data.price}}
      </div>
    </div>
    <div class="tags">
      <div class="badge" :key='tag' v-for='tag in data.tags'>{{tag}}</div>
    </div>
    <div class="summary">
      <p :key='i' v-for='(sum,i) in data.summary'>{{sum}}</p>
    </div>
  </div>
</template>

<script>
import Rate from '@/components/Rate'
export default {
  components: {
    Rate
  },
  props: ['data'],
  computed: {
    userInfo () {
      return this.data.user_info || {}
    }
  }
}
</script>

<style lang='scss'>
.bookinfo{
  font-size: 14px;

  .badge{
    display: inline-block;
    margin:5px;
    padding:5px;
    border-radius: 10px;
    border:1px #EA5A49 solid;
    color:#EA5A49;
  }
  .summary{
    padding:0 15px;
    margin-top:10px;
    p{
      text-indent: 2em;
      font-size:14px;
    }
  }
  .right{
    float: right;
  }
  .detail{
    padding:5px 10px;
    .avatar{
      width:20px;
      height:20px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
  .thumb{
    width:750rpx;
    height:500rpx;
    overflow:hidden;
    position: relative;
    .back{
      filter: blur(15px);
      width:100%;
    }
    .img{
      position: absolute;
      width:100%;
      height:300rpx;
      left:0;
      top:30rpx;
    }
    .info{
      color:white;
      position: absolute;
      width:100%;
      left:0;
      top:330rpx;
      text-align: center;
      .title{
        font-size:20px;
      }
      .author{
        font-size: 14px;
      }

    }
  }
}
</style>
