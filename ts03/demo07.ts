// 类
class Personx {
  name = "dory";
  getName() {
    return this.name;
  }
}

const personx = new Personx();
console.log(personx.getName());

// 类的继承
// 子类对父类的方法或属性重写
// 在子类里面，可以把super理解成父类，通过super调用父类的方法或属性
class Teachert extends Personx {
  getTeacherName() {
    return "t name";
  }
  getName() {
    return super.getName() + "duan";
  }
}
const teachert = new Teachert();
console.log(teachert.getName());
console.log(teachert.getTeacherName());
