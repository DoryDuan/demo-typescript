"use strict";
// string 类型
var a = "HelloWorld";
console.log(a);
// number 类型
var age = 18;
var stature = 178.5;
console.log(age);
console.log(stature);
// boolean 类型
var b = true;
var c = false;
// enum 类型，值是多个并且是固定的
// enum REN{ nan , nv ,yao}
// console.log(REN.yao)  //返回了2，这是索引index，跟数组很想。
// 给这些枚举赋值，可以直接使用 = 来进行赋值
var REN;
(function (REN) {
    REN["nan"] = "\u7537";
    REN["nv"] = "\u5973";
    REN["yao"] = "\u5996";
})(REN || (REN = {}));
console.log(REN.yao); //返回了妖 这个字
// any 类型
var t = 10;
t = "jspang";
t = true;
console.log(t);
// undefined 类型，声明基本类型，但不赋值
var age1;
// console.log(age1)
// null 类型，代表引用类型为空
// 数组、元祖、void
