// namespace 好处：类似模块化开发方式，能尽可能少地声明全局变量
// 把一组相关的变量封装到一起，提供统一的暴露接口

// 命名空间的依赖声明,Home 命名空间 依赖 components.ts 文件
///<referemce path="./components.ts">

namespace Home {
  export class Page {
    //export：暴露 Page
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}
console.log(Home);
new Home.Page();
