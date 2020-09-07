const Koa = require('koa');
const KoaStaticCache = require('koa-static-cache');
const KoaRouter = require('koa-router');
const upload = require('./middlewares/upload');
const mysql = require('mysql2/promise');
const KoaBody = require('koa-body');
const jwt = require('jsonwebtoken');
const koajwt = require('koa-jwt'); // 该模块可让您在Koa（node.js）应用程序中使用JSON Web令牌对HTTP请求进行身份验证

const SECRET = 'my-token'; 

let db;

~async function() {
    db = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'kkb_shop'
    })
}()


const app = new Koa();

app.use(KoaStaticCache('./public', {
    prefix: '/public',
    gzip: true,
    dynamic: true
}));

app.use(async (ctx, next) => {
    console.log('ctx...',ctx)
    return next().catch((err) => {
        console.log('出错 catch', err,"+", err.status,'结束')
        if (err.status === 401) {
            console.log('err 401',err)
            ctx.status = 401;
            ctx.body = {
                code: 401,
                msg: err.message
            }
        } else {
            console.log('err err',err) 
            throw err;
        }
    })
});

app.use(koajwt({ secret: SECRET }).unless({
    // 登录接口不需要验证
    path: [/^\/login/]
}));

const router = new KoaRouter();


router.get('/', async ctx => {
    ctx.body = '开课吧';
})

router.post('/login', KoaBody({
    multipart: true
}), async ctx => {
    console.log('body', ctx.request.body);
    let {username, password} = ctx.request.body;

    if (!username || !password) {
        ctx.status = 400;
        return ctx.body = {
            code: 1,
            message: '参数错误'
        };
    }

    let [[rs]] = await db.query("select * from `users` where `username`=?", [
        username
    ]);

    if (!rs) {
        ctx.status = 404;
        return ctx.body = {
            code: 2,
            message: '用户不存在'
        };
    }

    // console.log('rs', rs.password != password);
    if (rs.password != password) {
        ctx.status = 404;
        return ctx.body = {
            code: 3,
            message: '密码错误'
        };
    }
    console.log('rs',rs)
    ctx.set('authorization', jwt.sign({
        id: rs.id,
        username: rs.username
    }, SECRET));

    ctx.body = {
        id: rs.id,
        username: rs.username
    }

});

router.get('/getPhotos', async ctx => {
    let payload = ctx.state.user
    console.log('getPhotos ctx.request',payload)
    let [rs] = await db.query("select * from `photos` where `user_id`=?", [
        payload.id
    ]);

    rs = rs.map( r => ({
        ...r,
        url: '/public/upload/' + r.img_name
    }) );
    console.log('getPhotos rs',rs)
    ctx.body = {
        code: 0,
        rs:rs
    };
});

router.post('/upload',  upload(), async ctx => {
    let payload = ctx.state.user
    console.log('ctx._user',ctx._user);
    let dot = ctx.request.files.file.path.lastIndexOf('\\');
    let filename = ctx.request.files.file.path.substring(dot + 1);

    let rs = await db.query("insert into `photos` (`img_name`, `user_id`) values (?, ?)", [
        filename,
        payload.id
    ]);
    // console.log(rs);

    ctx.body = {
        code: 0,
        url: '/public/upload/' + filename
    };
});

app.use( router.routes() );

app.listen(8081);



// function verify() {
//     return async (ctx, next) => {
//         let authorization = ctx.request.header.authorization;
//         console.log('authorization',authorization)
//         if (authorization == 'null') {
//             // console.log('123')
//             return ctx.body = {
//                 code: 1,
//                 message:'你还没有登录'
//             }
//         } else {
//             console.log('verify')
//             let user = jwt.verify(authorization.split(' ')[1], SECRET);
//             console.log('user',user);
//             if (!user) {
//                 return ctx.body = {
//                     code: 1,
//                     message:'你还没有登录'
//                 }
//             }
    
//             ctx._user = user;
//         }
    
//         await next();
//     }
// }