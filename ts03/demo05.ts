// 数组
// TS 能推断出 arr 是一个 number 类型的数组
const arr = [1, 4, 7];

// 数组类型注解
const arr1: number[] = [1, 4, 7];

// 数组有两种类型的类型注解
const arr2: (number | string)[] = [1, "4", 7];

// 数组里面存储对象的类型注解
const arr3: { name: string; age: number }[] = [{ name: "dory", age: 18 }];
// type alias 类型别名
type User = { name: string; age: number };
const arr4: User[] = [{ name: "dory", age: 18 }];
// TS 不会要求组里面的每一项都是 Teacher 类的实例
// 一个对象，虽然不是 Teacher 的实例，但只要数据结构（属性）与 Teacher 保持一致就可以了
class Teacher {
  name: string;
  age: number;
  sayHello() {
    console.log("hello");
  }
}
const arr5: Teacher[] = [
  new Teacher(),
  {
    name: "dory",
    age: 18,
    sayHello: () => {
      console.log("hello");
    },
  },
];

// tuple 元祖
// 元祖类型:数组长度固定，每一个元素的类型也是固定的
const teacherInfo: [string, string, number] = ["dory", "female", 18];
// 应用场景：导出的 csv 文件的数据
const teacherList: [string, string, number][] = [
  ["dory", "female", 18],
  ["dory", "female", 18],
  ["dory", "female", 18],
];
