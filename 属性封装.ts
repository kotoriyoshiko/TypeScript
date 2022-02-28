(function () {
   class Animal{
       //private私有属性，私有属性只能在类中进行访问。修改可通过类中添加方法
       //public公共属性，可以在任何地方访问
       //protected 受包含的属性，是只能在当前类和子类中访问
       private name:string
       private age:number
       constructor(name:string,age:number) {
           this.name=name
           this.age=age
       }

       //暴露出读方法
       get _name(){
           return this.name
       }

       //暴露出写方法
       set _name(value){
            this.name=value
       }
   }

   const cat = new Animal('like',1)

    //写
    cat._name='little'
    //读
    console.log(cat._name)
})()
