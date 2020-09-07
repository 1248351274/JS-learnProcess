const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaBody = require('koa-body');
const KoaStaticCache = require('koa-static-cache')

import mainCoutroler from './oldControlers/mainControler'

let app = new Koa()

let router = new KoaRouter()
/**
 * 为了维护的方便，同意的路由管理维护和注册
*/
router.get('/',mainCoutroler)

// router.get('/login',(ctx)=>{
//     ctx.body = "login"
// })

app.use(router.routes())

app.listen(8000,()=>{
    console.log("服务启动成功，请访问http:localhost:8000");
    
})