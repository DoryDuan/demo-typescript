import "reflect-metadata";

// 在对象上面定义元数据。元数据：挂载在对象上面，不能直接拿到
const user = {
  name: "dell",
};
// 参数：属性，属性值，挂载的对象
Reflect.defineMetadata("data", "test", user);
console.log(user);
console.log(Reflect.getMetadata("data", user));

// 在类上面定义元数据,类上面默认提供了装饰器来定义元数据
// 类的属性或者方法上面也可以定义元数据
@Reflect.metadata("data", "test1")
class User {
  @Reflect.metadata("data2", "test2")
  name = "dory";
  @Reflect.metadata("data3", "test3")
  getName() {}
}
// getMetadata 参数：属性名，对象/类
console.log(Reflect.getMetadata("data", User));
console.log(Reflect.getMetadata("data2", User.prototype, "name"));
console.log(Reflect.getMetadata("data3", User.prototype, "getName"));
console.log(Reflect.hasMetadata("data3", User.prototype, "getName"));
console.log(Reflect.getMetadataKeys(User.prototype, "getName"));
