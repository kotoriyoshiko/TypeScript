(function () {

    //定义接口
    interface myInter{
        name:string
        sayHello():void
    }

    //定义类使用接口。必须满足接口要求
    class myClass implements myInter{
        name:string
        constructor(name:string) {
            this.name=name
        }
        sayHello(){
            console.log("hello")
        }
    }
})()
