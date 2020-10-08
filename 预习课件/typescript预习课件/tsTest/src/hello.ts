let str:string = "hello"
let n:number = 1
let isOk:boolean = true

// let a:number= 10
// a = null
// let b = a.toFixed(1)
// console.log('111',b)

// 对象类型
let a:object = {
    x: 1,
    y: 2
}
//字面量标注
let user:{username:string, age:number} = {
    username: 'yan',
    age: 10
}

interface Person {
    username: string,
    age: number
}

let user1: Person = {
    username:'yan',
    age:18
}

class Person1 {
    constructor(public username: string,public age: number){

    }
}

let user2:Person1 = new Person1('yan',18)

// 包装对象
let b: string;
b = "1"
// b = new String("1")

let c: String;
//数组类型
// 第一种
let arr: Array<number> = [1,2,3]
// arr.push("kaike")
// 简单，第二种
let arr1: string[] = ["q","e","r"]
// arr1.push(233)

//元组类型
let arr3:[number,string] = [100,"345"]
arr3.push(200,"34")
// console.log('arr3',arr3)

// 枚举
enum HTTP_COOD {
    OK = 200,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED
}

function ab(h:string){

}



