// const KoaRouter = require('koa-router');
// const KoaBody = require('koa-body');
// const KoaStaticCache = require('koa-static-cache');

import Koa from 'koa'
import KoaRouter from 'koa-router'
import KoaBody from 'koa-body'
import KoaStaticCache from 'koa-static-cache'
import MainControler from '../controllers/Main'
import glob from 'glob'
import path from 'path'

interface kkbConfig {
    port:number
}
const defaultConfigs = {
    port:8000,
}

export default class Kkb {

    private config:kkbConfig;
    private app:Koa;
    private router:KoaRouter;

    constructor(config:kkbConfig) {
        this.config = {
            ...defaultConfigs,
            ...config
        }
        this.app = new Koa()
        this.addRouter()
    }
    addRouter(){
        this.router = new KoaRouter()

        // let controlerMain = new MainControler()
        // this.router.get('/',controlerMain.index)
        try{
            let controllerPath = path.resolve(__dirname,'../controllers/**/*');
            
            let controllerFiles = glob.sync(controllerPath)

            controllerFiles.forEach(async controllerFile=>{
                const Controller = (await import(controllerFile)).default;
                const controller = new Controller();
                

            })
            
            this.app.use(this.router.routes())
        } catch(e){
            console.log(e);
            
        }

    }

    start() {
        this.app.listen(this.config.port, ()=>{
            console.log("http://localhost:8000");
            
        })
    }
}