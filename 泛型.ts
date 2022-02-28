(function () {
    //类型不明确时使用变量来表示类型
   function fn<T>(a:T):T{
       return a
   }

   //传入number，泛型会自动变为number
   fn(3);
    //也可以手动指定泛型的类型为字符串
    fn<string>('haha')

    //泛型可同时指定多个
    function fn2<T,K>(a:T,b:K):K{
       return b
    }

    fn2<string,number>("1",2)

    //指定接口
    interface Inter{
        length:number
    }

    //泛型Z必须包含length
    function fn3<Z extends Inter>(a:Z):number{
        return a.length
    }

    fn3('123')

})()
