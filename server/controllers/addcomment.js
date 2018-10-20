const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
    const {phone, location, comment, bookid, openid} = ctx.request.body
    console.log(phone, location, comment, bookid, openid)
    try {
        await mysql('comments')
            .insert({phone, location, comment, bookid, openid})
        ctx.state.data = {
            msg: 'success'
        }
    } catch (e) {
        ctx.state = {
            code: -1,
            data: {
                msg: `评论失败：` + e.message
            }
        }
    }
}
