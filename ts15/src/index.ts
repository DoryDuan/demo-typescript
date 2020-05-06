// 类的方法装饰器
// 普通方法，target 对应的是类的 prototype,key 对应是方法的 key,descriptor 对应的是方法的描述
// 静态方法，target 对应的是类的 构造函数
function getNameDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  descriptor.writable = false;
  descriptor.value = () => {
    return "222";
  };
}
class Test {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecorator
  getName() {
    return this.name;
  }
}
const test = new Test("dory");
console.log(test.getName());

// 类的访问装饰器
// 参数和方法装饰器是一模一样的
// get 和 set 上面只能有一个能加装饰器，两个都加会报错
function visitDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  // descriptor.writable = false;
}
class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  @visitDecorator
  set name(name: string) {
    this._name = name;
  }
}
const person = new Person("dory");
person.name = "test";
console.log(person.name);

// 类的属性装饰器
// 只有两个参数，没有 descriptor 参数
// 属性装饰器返回的 descriptor 会替换属性原始的 descriptor
function proDecorator(target: any, key: string): any {
  console.log(target, key);
  // const descriptor: PropertyDescriptor = {
  //   writable: false,
  // };
  // return descriptor;
}
class Pro {
  @proDecorator
  name = "dory";
}
const pro = new Pro();
// pro.name = "new dory";
console.log(pro.name);

// 在装饰器里面修改的不是实例上的name，而是原型上的name
function proDecorator1(target: any, key: string): any {
  console.log(target, key);
  target[key] = "lee";
}
class Pro1 {
  @proDecorator1
  name = "dory";
}
const pro1 = new Pro1();
console.log(pro1.name);
console.log((pro1 as any).__proto__.name);

// 参数装饰器
// 三个参数：原型、方法名、参数所在的位置
function paramDecorator(target: any, key: string, paramIndex: number): any {
  console.log(target, key, paramIndex);
}
class paramClass {
  getInfo(@paramDecorator name: string, age: number) {
    console.log(name, age);
  }
}
const param = new paramClass();
param.getInfo("dory", 18);
