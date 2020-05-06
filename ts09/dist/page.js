"use strict";
var Components;
(function (Components) {
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement("div");
            ele.innerText = "This is header";
            document.body.append(ele);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var ele = document.createElement("div");
            ele.innerText = "This is content";
            document.body.append(ele);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var ele = document.createElement("div");
            ele.innerText = "This is footer";
            document.body.append(ele);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
// namespace 好处：类似模块化开发方式，能尽可能少地声明全局变量
// 把一组相关的变量封装到一起，提供统一的暴露接口
// 命名空间的依赖声明,Home 命名空间 依赖 components.ts 文件
///<referemce path="./components.ts">
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        //export：暴露 Page
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
console.log(Home);
new Home.Page();
