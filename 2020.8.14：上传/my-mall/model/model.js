const mysql2 = require('mysql2')
// 数据链接不推荐使用use 中间件
let db =  mysql2.createConnection({
    host:'127.0.0.1',
    port: 3306,
    user:'root',
    password:'root',
    database:'kkb_shop'
})

module.exports = db