<script>
export default {
  data () {
    return {
      mini: 'fuck'
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      wx.getSetting({
        success (res) {
          wx.setStorageSync('setting', res.authSetting)
        },
        fail (err) {
          console.log(err + 'err')
        }
      })
    }
  }
}
</script>

<style>
</style>
