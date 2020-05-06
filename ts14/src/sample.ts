// 类的装饰器
// 装饰器本身是一个函数
// 接收的参数是一个构造函数
// 装饰器通过 @ 符号来使用
// 装饰器运行时机：类创建好之后，立即执行，对类进行装饰.
// 多个装饰器：从上到下收集，从下到上执行

function testDecorator(constructor: any) {
  constructor.prototype.getName = () => {
    console.log("dory");
  };
  console.log("test");
}
function testDecorator1(constructor: any) {
  constructor.prototype.getName = () => {
    console.log("dory1");
  };
  console.log("test1");
}

@testDecorator
@testDecorator1
class Test {}
const test = new Test();
// test.getName(); //不能直接调用 getName
(test as any).getName();

// 利用工厂函数返回装饰器
// 优点：可以传参
function testDecorator3(flag: boolean) {
  if (flag) {
    return function (constructor: any) {
      constructor.prototype.getName = () => {
        console.log("dory3");
      };
      console.log("test3");
    };
  } else {
    return function (constructor: any) {};
  }
}
@testDecorator3(true)
class Test3 {}
const test3 = new Test3();
(test3 as any).getName();
