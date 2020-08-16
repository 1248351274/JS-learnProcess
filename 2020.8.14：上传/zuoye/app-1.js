const koa = require('koa')
const koaRouter = require('koa-router')
const koaStaticCache = require('koa-static-cache')
const nunjucks = require('nunjucks')
const mysql2 = require('mysql2')

const server = new koa()
const router = new koaRouter()

// 静态资源处理
server.use(koaStaticCache('./public',{
    prefix:'/public',
    gzip:true,
    dynamic:true
}))
// 模板引擎
const tpl = new nunjucks.Environment(
    // FileSystemLoader => node 模板文件加载
    new nunjucks.FileSystemLoader('views',{
        watch: true,
        noCache: true
    })
)
// 数据链接不推荐使用use 中间件
let db
~async function(){
    db = await mysql2.createConnection({
        host:'127.0.0.1',
        port: 3306,
        user:'root',
        password:'root',
        database:'kkb_shop'
    })
}()

// MVC => 分层开发模式 model view  controller
//web server ： 用户发起请求 =》 分析用户请求，处理路由
                // =》处理数据（操作数据库，操作缓存）=》view（data+template）
                // =》response
// controller =>model =>view

router.get("/index",ctx=>{
    
    ctx.body = tpl.render('index.html')
})

router.get("/",ctx=>{
    ctx.body = '启动成功'
})

server.use(router.routes())


server.listen(8080,()=>{
    console.log('服务器启动成功：http://localhost:8080')
})