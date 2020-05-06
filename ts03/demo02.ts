// 基础类型：number,string,boolean,undefined,symbol,null,void
const count1: number = 100;

// 对象类型
// 自己定义一个对象
const teacher: {
  name: string;
  age: number;
} = { name: "dory", age: 18 };

// 数组
const numbers: number[] = [1, 3, 5];
const numbers1: Array<number> = [1, 3, 5];

// 类,dory是Person类的实例
class Person {}
const dory: Person = new Person();

// 函数
const getTotal = (n1: number, n2: number): number => {
  return 123;
};
// ()=>number表示函数返回数字类型的值，=后面是具体的函数实现
const getTotal1: () => number = () => {
  return 123;
};
