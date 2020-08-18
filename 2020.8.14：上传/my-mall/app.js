// 模块的加载默认的是同步的加载模式 require
const koa = require('koa')
const koaRouter = require('koa-router')
const koaStaticCache = require('koa-static-cache')
const koaBody = require('koa-body')
// const nunjucks = require('nunjucks')
// const mysql2 = require('mysql2')

// 控制器加载
const mainContraller = require('./controller/main.js')

const server = new koa()
const router = new koaRouter()

// 静态资源处理
server.use(koaStaticCache('./static',{
    prefix:'/static',
    gzip:true,
    dynamic:true
}))
// 模板引擎  libs=>tpl.js
// const tpl = new nunjucks.Environment(
//     // FileSystemLoader => node 模板文件加载
//     new nunjucks.FileSystemLoader('views',{
//         watch: true,
//         noCache: true
//     })
// )

// 数据链接不推荐使用use 中间件
// let db
// ~async function(){
//     db = await mysql2.createConnection({
//         host:'127.0.0.1',
//         port: 3306,
//         user:'root',
//         password:'root',
//         database:'kkb_shop'
//     })
// }()

// MVC => 分层开发模式 model view  controller
//web server ： 用户发起请求 =》 分析用户请求，处理路由
                // =》处理数据（操作数据库，操作缓存）=》view（data+template）
                // =》response
// controller =>model =>view


// router.get("/index",ctx=>{

//     ctx.body = tpl.render('index.html')
// })

server.use( koaBody({
    multipart: true,
    // 处理上传的二进制文件
    formidable: {
        // 保存路径
        uploadDir: __dirname + '/static/upload',
        // 保留后缀名
        keepExtensions: true
    }
}) )

router.get('/index',mainContraller.index)

router.get('/item/add',mainContraller.add)

router.post('/item/add',mainContraller.addPost)

router.get("/",ctx=>{
    ctx.body = '启动成功'
})

// router.post("/static/index.html",mainContraller.upload)

router.get('/upload',mainContraller.uploadPage)

router.post('/upload',mainContraller.upload)

server.use(router.routes())


server.listen(8080,()=>{
    console.log('服务器启动成功：http://localhost:8080')
})