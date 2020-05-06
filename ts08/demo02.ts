// 类中使用泛型
class DataManager {
  constructor(private data: string[] | number[]) {}
  getItem(index: number): string | number {
    return this.data[index];
  }
}
const data = new DataManager(["1"]);
const getItem = data.getItem(0);
console.log(getItem);

// 需求：除了字符串和数字数组，还需要其他类型的数据，需要写更长的联合类型，这样写起来很麻烦
// 解决方案：在类中使用泛型
class DataManager1<T> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}
const data1 = new DataManager1<number>([1]);
// T 除了可以指基本类型，还可以是 interface 定义的类型
interface Test {
  name: string;
}
const data11 = new DataManager1<Test>([{ name: "dory" }]);
// 需求：T 只能是 string 或者 number 类型
class DataManager11<T extends number | string> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}

// T 里面必须有 name 属性,使用 T 继承 {name:string}
interface Item {
  name: string;
}
class DataManager2<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name;
  }
}
// 泛型 T 的推断类型 指的是 { name: string,age:number }
const data2 = new DataManager1([{ name: "dory", age: 18 }]);
