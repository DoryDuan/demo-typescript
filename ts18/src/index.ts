import "reflect-metadata";

// 方法的装饰器优先于类的装饰器

function showData(target: typeof User) {
  for (let key in target.prototype) {
    const data = Reflect.getMetadata("data", target.prototype, key);
    console.log("calss", data);
  }
}

function setData(msg: string) {
  return function (target: User, key: string) {
    console.log("methods", msg);
    Reflect.defineMetadata("data", msg, target, key);
  };
}

@showData
class User {
  @Reflect.metadata("data", "name")
  getName() {}
  @setData("test")
  getAge() {}
}
