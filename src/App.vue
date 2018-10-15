<script>
export default {
  data () {
    return {}
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      wx.getSetting({
        success (res) {
          wx.setStorageSync('setting', res.authSetting)
          console.log(res)
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
