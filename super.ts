(function (){
    //抽象类，只能用来做爸爸
    abstract class Animal{
       name:string
       age:number

        protected constructor(name:string, age:number) {
           this.name=name
           this.age=age
       }

       //抽象方法 只能定义在抽象类中，子类必须对抽象方法进行重写
       abstract sayHello():void

   }

   class Cat extends Animal{
       gender:string

       constructor(name:string,age:number,gender:string) {
           super(name,age);
           this.gender=gender
       }
       sayHello() {
           console.log("喵喵")
       }

   }

   const cat=new Cat("like",1,"sister")

    console.log(cat)
    console.log(cat.sayHello())
})()
