import S16610 from '../skills/s16610.js'
import S16620 from '../skills/s16620.js'
import S16630 from '../skills/s16630.js'
export default class Yasi{
    constructor(){
        this.name = "亚瑟",
        this.icon = '../sources/heroes/yase1'
        this.skill = [new S16610,new S16620,new S16630]
    }
}