const Koa = require('koa');
const KoaStaticCache = require('koa-static-cache');
const KoaRouter = require('koa-router');
const upload = require('./middlewares/upload');

const photos = require('./models/photos.js')

const app = new Koa();

app.use(KoaStaticCache('./static', {
    prefix: '/static',
    gzip: true,
    dynamic: true
}));

const router = new KoaRouter();

router.get('/getAll', async ctx => {
    // 读数据库
    let rs = await photos.getPhotos()
    rs = rs.map( r => ({
        // ...rs,
        url: '/static/upload/' + r.img_name
    }) );
    ctx.body = rs;
})

router.get('/', async ctx => {

    ctx.body = '请求成功';
})

router.post('/upload', upload(), async ctx => {
    // 截取文件名
    let dot = ctx.request.files.file.path.lastIndexOf('\\');
    let filename = ctx.request.files.file.path.substring(dot + 1);
    // 保存到数据库
    photos.addPhoto(filename)
    console.log("filename",filename)
    ctx.body = {
        url: '/static/upload/' + filename
    };
});

app.use( router.routes() );

app.listen(8081,()=>{
    console.log("服务启动成功，请访问 http:localhost:8081");
});