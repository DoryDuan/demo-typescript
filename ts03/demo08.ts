// public，protected，private 访问类型
// public 允许在类的内外被调用,默认是public
// private 允许在类内被调用
// protected 允许在类内及子类被调用
class Person8 {
  private name: string;
  public age = 18;
  protected sex = "female";
  constructor(name: string) {
    this.name = name;
  }
}
const person8 = new Person8("dory");
console.log(person8.age);
class Teacher8 extends Person8 {
  public sayBye() {
    this.sex;
  }
}

// constructor：在 new 实例的时候自动执行
class Person88 {
  // public name: string;
  constructor(public name: string) {
    //简化写法
    // this.name = name;
  }
}
// 在子类里面写了 constructor，必须调用 supper(),并把参数传过去
class Teacher88 extends Person88 {
  constructor(public age: number) {
    super("dory"); //调用父类构造器
  }
}
const teacher88 = new Teacher88(28);
