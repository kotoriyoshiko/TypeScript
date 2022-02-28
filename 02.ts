let a:number

a=33

let b:string

b="hello"

//如果变量的声明和赋值是同时进行的，TS可以自动对变量进行检测
let c=false
//报错
c=true

//对函数参数和返回值声明类型
function sum(a:number,b:number):number{
    return a+b
}

let result=sum(123,4)




