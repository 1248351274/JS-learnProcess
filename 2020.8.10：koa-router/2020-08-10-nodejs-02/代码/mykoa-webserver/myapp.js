const koa = require('koa');
const KoaRouter = require('koa-router');
const mydata = require('./mydata.json');


const server = new koa();

const router = new KoaRouter();

server.use( function(ctx, next) {
    console.log('有人访问了');

    next();
} );

router.get('/', ctx => {

    ctx.body = mydata
})

router.get('/getData', ctx => {

    ctx.body = mydata
})

let routerMiddleware = router.routes();

server.use( routerMiddleware );

server.listen(8080);

