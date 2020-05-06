// 定义全局变量
// declare var $: (param: () => void) => void;

// 定义全局函数,同一个函数名可以定义多次 - 函数重载
declare function $(readyFunc: () => void): void;
interface JqueryInterface {
  html: (html: string) => JqueryInterface;
}
declare function $(selector: string): JqueryInterface;
// namespace 定义对象
declare namespace $ {
  namespace fn {
    class init {}
  }
}

// 使用interface实现函数重载
// interface JQuery {
//   (readyFunc: () => void): void;
//   (selector: string): JqueryInterface;
// }
// declare var $: JQuery;
