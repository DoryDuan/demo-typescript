// new (...args: any[]) => any 表示的一个构造函数，每个参数都是 any 类型，返回值为 any 类型
// T 表示可以被这种构造函数实例化出来，T 包含构造函数
function testDecorator4<T extends new (...args: any[]) => any>(constructor: T) {
  // 对构造函数进行扩展
  return class extends constructor {
    name = "duan";
    getName() {
      return this.name;
    }
  };
}
@testDecorator4
class Test4 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const test4 = new Test4("dory");
// test4.getName() //不能直接调用 getName
console.log((test4 as any).getName());

// 问题：怎么能使用 test4 直接调用 getName？
function testDecorator5() {
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    // 对构造函数进行扩展
    return class extends constructor {
      getName() {
        return this.name;
      }
    };
  };
}
// testDecorator5 当成函数来用，而不是当成装饰器来用
// testDecorator5() 返回的是一个装饰器，testDecorator5()(class{})调用装饰器来装饰 class
const Test5 = testDecorator5()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);
const test5 = new Test5("dory5");
console.log(test5.getName());
