// count 是一个number类型的变量，具有 number 类型 所有的属性和方法
const count: number = 100;

// interface 可以理解为自定义类型
interface Point {
  x: number;
  y: number;
}
// point 是 Point 的静态类型，具备Point上所有的属性和方法
const point: Point = { x: 3, y: 4 };
