// readonly限制属性只能读不能改
class Person10 {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const person10 = new Person10("DORY");

// abstract 抽象类,把类相关的共用性的东西抽离出来
// 抽象类只能被继承，不能被实例化
// 抽象类里面可以定义普通的属性和方法，也可以定义抽象的方法
abstract class Geo {
  width: number = 100;
  abstract getArea(): number;
}
// 子类继承抽象类，需要实现抽象类里面的抽象方法
class Circle extends Geo {
  getArea() {
    return 1234;
  }
}
class Square {}

// 接口是把对象相关的共用性的东西抽离出来
interface Person100 {
  name: string;
}
interface Teacher100 extends Person100 {
  teachingAge: number;
}
interface Student100 extends Person100 {
  age: number;
}
