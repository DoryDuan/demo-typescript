// es6 模块化
// module 定义模块，定义的模块名与引入的模块名要一致
declare module "jquery" {
  interface JqueryInterface {
    html: (html: string) => JqueryInterface;
  }
  // $ 是混合类型，既是函数，又是 namespace(对象)
  function $(readyFunc: () => void): void;
  function $(selector: string): JqueryInterface;
  namespace $ {
    namespace fn {
      class init {}
    }
  }
  // 外部要 import 的，一定要 export 出去
  export = $;
}
