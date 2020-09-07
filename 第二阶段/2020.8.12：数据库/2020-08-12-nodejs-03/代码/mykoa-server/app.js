const koa = require('koa');

const koaRouter = require('koa-router');

const mysql = require('mysql2/promise');

let connection;
~async function(){
    connection = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'yanqingTest'
    })
}()

// 创建server对象
const server = new koa();

const router = new koaRouter();

router.get('/',async ctx=>{
    // let username = ctx.query.username;
    // let age = ctx.query.age;
    // console.log(username,age)
    // await connection.execute('insert into `users` (`username`,`age`) values (?,?)',[username,age])
    console.log(connection)
    let [showDatas] = await connection.execute('SELECT * FROM `datas`');
    console.log(showDatas)
})

// 把router对象的routes中间件注册到Koa中
server.use(router.routes())

server.listen(8080,()=>{
    console.log('服务启动成功,http://locahost:8080')
})

// http://localhost:8080/?username=xiaoming&age=19
