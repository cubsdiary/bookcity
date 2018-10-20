const {mysql} = require('../qcloud')

// module.exports = async (ctx) => {
//     const {page, limit} = ctx.request.query
//     const books = await mysql('books')
//         .select('books.*', 'cSessionInfo.user_info')
//         .join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id')
//         .limit(limit)
//         .offset(Number(page) * limit)
//         .orderBy('books.id', 'desc')
//     ctx.state.data = {
//         list: books.map(v => {
//             const info = JSON.parse(v.user_info)
//             return Object.assign({}, v, {
//                 user_info: {
//                     nickName: info.nickName
//                 }
//             })
//         })
//     }
// }
module.exports = async (ctx) => {
    const {page, openid, limit} = ctx.request.query
    const mysqlSelect = mysql('books')
                  .select('books.*', 'cSessionInfo.user_info')
                  .join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id')
                  .orderBy('books.id', 'desc')
    let books
    if(openid){
        // 根据opid过滤
        books = await mysqlSelect.where('books.openid', openid)
    }else{
        // 全部图书 分页
        books = await mysqlSelect.limit(limit).offset(Number(page) * limit)
    }
    // .orderBy('id','desc')
    ctx.state.data = {
        list: books.map(v => {
            const info = JSON.parse(v.user_info)
            return Object.assign({}, v, {
                user_info: {
                    nickName: info.nickName
                }
            })
        })
    }
}
