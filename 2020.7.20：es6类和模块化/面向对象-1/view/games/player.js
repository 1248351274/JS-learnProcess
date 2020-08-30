import Yase from '../games/heroes/yase.js'

export default class Player{
    constructor(name){
        this.name = name
        this.heroes = [new Yase]
    }
    
}