// 通过装饰器对异常捕获进行封装
const userInfo: any = undefined;
function catchError(info: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch (e) {
        console.log(`${info} 存在问题`);
      }
    };
  };
}

class Test {
  @catchError("userInfo.name")
  getName() {
    return userInfo.name;
  }
  @catchError("userInfo.age")
  getAge() {
    return userInfo.age;
  }
}
const test = new Test();
test.getName();
