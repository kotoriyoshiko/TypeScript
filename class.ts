(function (){
class Animal{
    name:string
    age:number
    constructor(name:string,age:number) {
        this.name=name
        this.age=age
    }

    sayHello(){
        console.log("我在叫")
    }
}
//继承
class Cat extends Animal{
    sayHello() {
        console.log("喵喵喵")
    }
}

class Dog extends Animal{
    sayHello() {
        console.log("汪汪汪")
    }

}

const cat = new Cat("like", 1)
const dog = new Dog("little", 2)
    console.log(cat.name)
    console.log(cat.sayHello())
    console.log(dog.name)
    console.log(dog.sayHello())
})()
