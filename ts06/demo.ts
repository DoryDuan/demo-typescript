interface Bird {
  fly: boolean;
  sing: () => {};
}
interface Dog {
  fly: boolean;
  bark: () => {};
}

//类型断言的方式做类型保护
function trainAanimal(animal: Bird | Dog) {
  if (animal.fly) {
    (animal as Bird).sing();
  } else {
    (animal as Dog).bark();
  }
}
//in 语法做类型保护
function trainAanimal1(animal: Bird | Dog) {
  if ("sing" in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}
// typeof 语法做类型保护
function add(n1: string | number, n2: string | number) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return `${n1}${n2}`;
  }
  return n1 + n2;
}
// instanceof 语法做类型保护
// interface 不能用 instanceof，class 才能用 instanceof
class NumberObj {
  count: number;
}
function add1(n1: object | NumberObj, n2: object | NumberObj) {
  if (n1 instanceof NumberObj && n2 instanceof NumberObj) {
    return n1.count + n1.count;
  } else {
    return 0;
  }
}
