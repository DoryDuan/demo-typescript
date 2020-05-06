// 泛型 generic 泛指的类型
// 方法或者类在定义的时候用泛指的类型，用的时候再指定具体的类型
function join(first: string | number, second: string | number) {
  return `${first}${second}`;
}
join(1, "1");

// first,sencond 必须传同一种数据类型,这时候可以用到泛型
function join1<T>(first: T, second: T) {
  return `${first}${second}`;
}
join1<number>(1, 1);
join1("1", "1"); // TS 可以自动推断出泛型的类型

// 可以指定多个泛型
function join2<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join2<number, string>(1, "1");

// 泛型不仅可以用在参数，还可以用在返回值
function join3<T, P>(first: T, second: P): T {
  return first;
}
join3<number, string>(1, "1");

// 泛型数组
function map<T>(params: T[]) {
  return params;
}
map<string>(["123"]);

// 箭头函数中使用泛型
const func: <T>(param: T) => T = <T>(param: T) => {
  return param;
};
const func1 = <T>(param: T): T => {
  return param;
};
