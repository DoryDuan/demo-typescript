// interface接口 定义通用性的类型集合
// interface 和 type 的区别：interface 只能代表函数或对象，不能代表 基本类型 string
// 能用 interface 尽量用 interface
// ? 代表可选
// readonly 只读
// [propName:string]:any 表示除了 name 和 age 属性外，还有其他的属性。属性名的类型是字符串，属性值是any类型
// interface 还可以定义方法。例如定义 say 方法，它的返回值是一个 string 类型
// interface 和类型 是 TS 做语法校验的工具，并不会编译成 JS 代码
interface Person6 {
  name: string;
  readonly age?: number;
  [propName: string]: any;
  say(): string;
}

type Person66 = {
  name: string;
};

const getPersonName = (person: Person6): string => {
  return person.name;
};

const setPersonName = (person: Person6, name: string): void => {
  person.name = name;
};

const person = {
  name: "dory",
  sex: "female",
  hoby: "eat",
  say() {
    return "hhh";
  },
};
setPersonName(person, "hhh");

// 将对象直接传给 getPersonName 会进行强校验(传递的参数跟定义的参数要一模一样)
// 将一个对象变量传给 getPersonName 不会进行强校验(只要定义的参数有传递就可以了)
getPersonName({
  name: "dory",
  sex: "female",
  say() {
    return "hhh";
  },
});
getPersonName(person);

// 一个类应用一个接口,这个类必须具备这个接口的属性
class Users implements Person6 {
  name = "dory";
  say() {
    return "hello";
  }
}

// interface 继承
interface Teacher extends Person6 {
  teach(): string;
}

// interface 定义函数
// 定义函数 sayHi，接收 string 类型的参数，返回 string 类型的值
interface sayHi {
  (word: string): string;
}
const say: sayHi = (word: string) => {
  return word;
};
