
import { Get } from '../kkb/kkb'
export default class User {

    async index(ctx){
        ctx.body = "login"
    }

    @Get('/register')
    async register(ctx) {
        ctx.body = 'register';
    }

}