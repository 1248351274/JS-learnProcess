import {Get, Post} from '../Kkb/Kkb';

// @Controller('/user')
// @Template('/template')
export default class User {

    
    @Get('/register')
    async register(ctx) {
        ctx.body = 'register';
    }

    @Get('/login')
    async login(ctx) {
        ctx.body = 'login';
    }

    @Post('/loginVerify')
    async loginVerify(ctx) {
        ctx.body = 'loginVerify';
    }

}