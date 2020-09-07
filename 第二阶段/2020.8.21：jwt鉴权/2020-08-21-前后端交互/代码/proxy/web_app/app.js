const Koa = require('koa');
const KoaStaticCache = require('koa-static-cache');
// const KoaRouter = require('koa-router');
const proxy = require('koa-server-http-proxy');
// const upload = require('./middlewares/upload');

// const photos = require('./models/photos.js')

const app = new Koa();

app.use( proxy('/api',{
    target: "http://localhost:8081",
    pathRewrite: { '^/api': '' },
    // changeOrigin: true
}) )

app.use(KoaStaticCache('./static', {
    prefix: '/static',
    gzip: true,
    dynamic: true
}));

// const router = new KoaRouter();

// router.get('/getAll', async ctx => {
//     // 读数据库
//     let rs = await photos.getPhotos()
//     rs = rs.map( r => ({
//         // ...rs,
//         url: '/static/upload/' + r.img_name
//     }) );
//     ctx.body = rs;
// })

// app.use( router.routes() );

app.listen(8080,()=>{
    console.log("服务启动成功，请访问 http:localhost:8080");
});