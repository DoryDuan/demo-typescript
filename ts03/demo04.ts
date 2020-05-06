// 函数可以推断返回值的类型，但返回的未必是我们想要的。所以函数返回值的类型最好写上
// 我们希望totalS 是number类型，但我们实际拿到的是string类型
function sum(n1: number, n2: number): number {
  // return n1 + n2 + "";
  return n1 + n2;
}
const totalS = sum(1, 2);

// 函数没有返回值，返回void
function sayHello() {
  console.log("hello");
}

// never 函数永远不可能执行到最后
//  throw new Error后面的代码不会去执行
function errorEmitter(): never {
  throw new Error("error");
  console.log(123);
}
// while(true){}后面的代码不会去执行
function whileTrue(): never {
  while (true) {}
  console.log(123);
}
