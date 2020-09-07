/**
 * 
*/
import { Get } from '../kkb/kkb'

export default class Main {
    @Get('/')
    async index(ctx){
        ctx.body = "kaikeba"
    }

}