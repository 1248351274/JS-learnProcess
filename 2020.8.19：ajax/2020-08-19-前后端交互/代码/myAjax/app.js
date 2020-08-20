const koa = require('koa')
const koaRouter = require('koa-Router')
const koaStaticCache = require('koa-static-cache')

const koaBody = require('koa-Body')

let app = new koa()
app.use( koaStaticCache('public'), {
    prefix: '/public',
    gzip: true,
    dynamic: true
} )
let router = new koaRouter()

router.get('/',async ctx => {
    ctx.body = 'kaikeba'
})


app.use( router.routes() )
app.listen(8080,()=>{
    console.log('服务启动成功，可以访问,http:localhost:8080')
})