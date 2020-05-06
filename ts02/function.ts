// 定义函数：声明函数名 searchXiaoJieJie
// 定义参数的数据类型
// 定义返回值的数据类型。没有返回值时，返回类型为 void
function searchXiaoJieJie(age:number):string{
    return '找到了'+age+'岁的小姐姐' 
}
var age:number = 18
var result:string = searchXiaoJieJie(age)
console.log(result)

// 函数的形参类型有三种

// 可选形参：可传可不传的参数，通过?标注
function searchXiaoJieJie2(age:number,stature?:string):string{

    let yy:string = ''
    yy = '找到了'+age+'岁'
    if(stature !=undefined){
        yy = yy + stature
    }
    return yy+'的小姐姐'

}
var result:string  =  searchXiaoJieJie2(22,'大长腿')
console.log(result)

// 默认形参：不传递参数时，给我们的一个默认值
function searchXiaoJieJie3(age:number=18,stature:string='大胸'):string{

    let yy:string = ''
    yy = '找到了'+age+'岁'
    if(stature !=undefined){
        yy = yy + stature
    }
    return yy+'的小姐姐'

}

var result:string  =  searchXiaoJieJie3()
console.log(result)

// 剩余形参：rest 参数，是一个数组，传递几个实参过来都可以直接存在形参的数组中
function searchXiaoJieJie4(...xuqiu:string[]):string{

    let  yy:string = '找到了'
    for (let i =0;i<xuqiu.length;i++){
        yy = yy + xuqiu[i]
        if(i<xuqiu.length){
            yy=yy+'、'
        }
    }
    yy=yy+'的小姐姐'
    return yy

}

var result:string  =  searchXiaoJieJie4('22岁','大长腿','瓜子脸','水蛇腰')
console.log(result)

// 定义函数的方法
// 函数声明
function add(n1:number,n2:number):number{
    return n1+n2
}
// 函数表达式
var add1 = function(n1:number,n2:number):number{
    return n1+n2
}

console.log(add1(1,4))

// 箭头函数
var add2 = (n1:number,n2:number):number=>{
    return n1+n2
}

console.log(add2(1,4))