const {mysql} = require('../qcloud')

// module.exports = async (ctx) => {
//     const {bookid} = ctx.request.query
//
//     const comments = await mysql('comments')
//         .select('comments.*', 'cSessionInfo.user_info')
//         .join('cSessionInfo', 'comments.openid', 'cSessionInfo.open_id')
//         .where('bookid', bookid)
//
//     ctx.state.data = {
//         list: comments.map(v => {
//             const info = JSON.parse(v.user_info)
//             return Object.assign({}, v, {
//                 user_info: {
//                     name: info.nickName,
//                     image: info.avatarUrl
//                 }
//             })
//         })
//     }
// }
module.exports = async (ctx) => {
    const {bookid, openid} = ctx.request.query
    const mysqlSelect = mysql('comments')
                      .select('comments.*', 'cSessionInfo.user_info')
                      .join('cSessionInfo', 'comments.openid', 'cSessionInfo.open_id')
    let comments  = null
    if (bookid) {
      // 图书详情也的评论列表
      comments = await mysqlSelect.where('bookid', bookid)
    } else if (openid) {
      // 根据个人的opid筛选
      comments = await mysqlSelect.where('openid', openid)
    }
    ctx.state.data = {
      list: comments.map(v => {
        const info = JSON.parse(v.user_info)

        return Object.assign({}, v, {
          user_info: {
            name: info.nickName,
            image: info.avatarUrl
          }
        })
      })
    }
}
