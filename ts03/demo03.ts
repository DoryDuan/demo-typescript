// type annotation 类型注解，我们告诉TS变量是什么类型
// type intference 类型推断,TS会自动地去尝试分析变量的类型

// 如果 TS 能自动分析变量类型，我们就什么都不需要做了
// 如果 TS 无法分析变量的类型，我们就需要使用类型注解

// 类型注解
// 如果变量定义的时候就赋值，类型推断可以推断出变量的类型
// 如果变量定义的时候没有赋值，类型推断就推断不出类型
let count2: number;
count2 = 100;

// 类型推断
let countInference = 123;
let obj = {
  name: "dory",
  age: 18,
};

// 没必要给 number4 和 number5 加类型注解
// TS 知道 number4 和 number5 不仅是一个数字，而且值都固定了
// total 也不需要类型注解，TS能推断出 total 是一个number类型
const number4 = 3;
const number5 = 4;
const total = number4 + number5;

// firstNumber,secondNumber都需要加类型注解，因为TS不能推断出他们的数据类型
// 给firstNumber,secondNumber加了类型注解以后，TS能推断出total1的类型
// 推断返回值的类型未必是我们想要的,返回值最好加上类型注解
function getTotal11(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}
const total1 = getTotal11(1, 2);

// 函数参数解构赋值的类型注解
function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}
const totalA = add({ first: 1, second: 2 });

// 基础类型：number,string,boolean,undefined,symbol,null,void
let count10: number;
count10 = 100;
let count9 = 100;

// any 可以改变变量的类型
let temp1: number | string = 123;
temp1 = "456";

// 对象类型
// 函数类型注解的两种方法
const fun1 = (str: string): number => {
  // 可以不写返回值类型，TS能推断出来
  return parseInt(str);
};
const fun2: (str: string) => number = (str) => {
  return parseInt(str);
};

// TS 能推断出 date 是 Date 类型
const date = new Date();

// TS不能推断出 JSON.parse返回的内容的数据类型
// 所以用 JSON.parse 等其他函数返回的内容赋值给变量，需要加类型注解
interface Person {
  name: string;
}
const rowData = '{"name":"dory"}';
const newData: Person = JSON.parse(rowData);
