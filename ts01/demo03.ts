var age:number = 18
var stature:number = 178.5
console.log(age)
console.log(stature)
console.log('-------------')

var jspang:string = "技术胖 jspang.com"
console.log(jspang)
console.log('-------------')

var b:boolean = true
var c:boolean = false

enum REN{ nan , nv ,yao}
let r1:REN = REN.nv
console.log(REN.yao)  //返回了2，这是索引index，跟数组很想。
console.log(r1) 

enum RENGENDER{
    nan = '男',
    nv = '女',
    yao= '妖'
}
console.log(RENGENDER.yao)  //返回了妖 这个字
console.log('-------------')

var t:any = 10
t = 'js dd'
t = true
console.log(t)