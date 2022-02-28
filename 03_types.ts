//字面量
let a:10
//报错。只能等于10
a=11

let b:"male" | "female";

b="male"
b="female"


//any,任何类型。相当对TS关闭了类型检测
//尽量不用
let c:any //显式any
c=1
c=true

let z  //隐式any，不指定类型 默认是any
z=333
let s:string
//隐式any可以赋值给任意类型
s=z

//unknown 未知类型
let e:unknown
e='hello'
let f:string
//报错
f=e
//类型断言,两种写法
f=e as string
f=<string>e

//void 空值 返回的是空值
function S():void{
    console.log("haha")
}

//never 没有值,不能是任何值
function K():never{
    throw ("出错了")
}

//object

let l:{name:string,age:number}

l={name:'like',age:12}

//array

//字符串数组,数组只能是字符串
let g:string[]

g=['a','b','c',3]

//数字数组
let v:Array<number>
v=[1,2,3,4]

//tuple 元组 固定长度的数组,TS新增

let PP:[string,string]
//数组内只能包含两个字符串
PP=["1","2"]

//enum 枚举,TS新增
enum Gender{
    Male,
    Female
}
let i:{name:string,gender:Gender}

i={name:'哈哈',gender:Gender.Female}

console.log(i.gender)



//自定义类型别名
type myType=1|2|3|4

let KK:myType
//不符合myType规则
KK=9


//&同时满足

let j:{name:string}&{age:number}
//同时满足名字和年龄要求
j={name:'爱子',age:13}


