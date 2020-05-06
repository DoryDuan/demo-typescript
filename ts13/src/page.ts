interface Person {
  name: string;
  age: number;
  gender: string;
}

// 类型可以是固定的字符串
type Name = "name";
const a: Name = "name";

// keyof 遍历 Person，拿到 Person 的 key
// keyof 应用场景：根据 key 获取对象里面的每一项内容，需要推断出正确的类型的时候
class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}

const teacher = new Teacher({
  name: "dory",
  age: 18,
  gender: "female",
});
const test = teacher.getInfo("name");
console.log(test);
