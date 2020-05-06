// 类的get,调用 person9.getName，不需要加()
// 类的 set，设置属性的时候会被调用
// get 和 set 可以用来保护私有变量
class Person9 {
  constructor(private _name: string) {}
  get name() {
    return this._name + " duan";
  }
  set name(name: string) {
    const realName = name.split(" ")[0];
    this._name = realName;
  }
}
const person9 = new Person9("dory");
console.log(person9.name);
person9.name = "Dory Duan";
console.log(person9.name);

// 单例模式: Demo 只能生成一个实例
// static 的属性和方法直接挂载在类上面，直接通过类来调用
// 如果静态方法包含this关键字，这个this指的是类，而不是实例
class Demo {
  private static instance: Demo;
  private constructor(public name: string) {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo("dory duan");
    }
    return this.instance;
  }
}
const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name);
console.log(demo2.name);
