const Koa = require('koa');
const KoaRouter = require('koa-router');
const KoaBody = require('koa-body');
const KoaStaticCache = require('koa-static-cache');

import MainController from './old-controllers/MainController'

const app = new Koa();

const router = new KoaRouter();

/**
 * 为了维护的方便，我们会把路由以及对应函数进行统一管理维护和注册
 * 
 * 这种方式统一的路由注册管理
 */
router.post('/commit', ctx => {
    ctx.body = 'hello commit';
});

app.use(router.routes());

app.listen(9000, () => {
    console.log(`服务启动成功：http://localhost:9000`);
    
});