// 基本类型
// string 类型
var a:string = "HelloWorld"
console.log(a)

// number 类型
var age:number = 18
var stature:number = 178.5
console.log(age)
console.log(stature)

// boolean 类型
var b:boolean = true
var c:boolean = false

// enum 类型，值是多个并且是固定的
// enum REN{ nan , nv ,yao}
// console.log(REN.yao)  //返回了2，这是索引index，跟数组很想。
// 给这些枚举赋值，可以直接使用 = 来进行赋值
enum REN{
    nan = '男',
    nv = '女',
    yao= '妖'
}
console.log(REN.yao)  //返回了妖 这个字

// any 类型
var t:any =10 
t = "jspang"
t = true
console.log(t)

// undefined 类型，声明基本类型，但不赋值
var age1:number
// console.log(age1)

// null 类型，代表引用类型为空
