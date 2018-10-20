<template>
  <div class="comment-list">
    <div class="page-title" v-if='comments.length'>
      评论
    </div>
    <div class="comment"
        v-for='comment in comments'
        :key='comment.id'
        @click="handleClick(comment)"
        >
      <div class="user">
        <div class="inline">

          <img :src="comment.user_info.image"
                class="avatar"
                mode='aspectFit'
            >
          {{comment.user_info.name}}
        </div>
        <div class="right">
          {{comment.location||'未知地点'}}
          <span class="text-primary">
            --
          </span>
          {{comment.phone||'未知型号'}}
        </div>
      </div>
      <div class="content">
        {{comment.comment}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      default: 'comment'
    }
  },
  methods: {
    handleClick (comment) {
      if (this.type === 'user') {
        wx.navigateTo({
          url: '/pages/detail/main?id=' + comment.bookid
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-list{
  background:#eee;
  font-size:14px;
  .page-title{
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
  }
  .comment{
    background: white;
    margin-bottom:10px;
    padding:5px 20px;
    .content{
      margin:10px 0;
    }
    .user{
      .right{
        padding: 5px 0px;
        float: right;
      }
      .inline{
        display: inline-block;
        padding:5px 0px;
        .avatar{
          width:20px;
          height:20px;
          border-radius: 50%;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
