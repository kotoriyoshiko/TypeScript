var a;
a = 33;
var b;
b = "hello";
//如果变量的声明和赋值是同时进行的，TS可以自动对变量进行检测
var c = false;
//报错
c = true;
function sum(a, b) {
    return a + b;
}
sum(123, 4);
