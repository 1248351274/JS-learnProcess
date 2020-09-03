// const Koa = require('koa')
// const KoaRouter = require('koa-router')
// const KoaBody = require('koa-body');
// const KoaStaticCache = require('koa-static-cache')

// import mainCoutroler from './oldControlers/mainControler'

// let app = new Koa()


// app.listen(8000,()=>{
//     console.log("服务启动成功，请访问http:localhost:8000");
    
// })

import Kkb from './kkb/kkb';

const app = new Kkb({
    port:8000
})

app.start();