define("components", ["require", "exports"], function (require, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  var Header = /** @class */ (function () {
    function Header() {
      var ele = document.createElement("div");
      ele.innerText = "This is header";
      document.body.append(ele);
    }
    return Header;
  })();
  exports.Header = Header;
  var Content = /** @class */ (function () {
    function Content() {
      var ele = document.createElement("div");
      ele.innerText = "This is content";
      document.body.append(ele);
    }
    return Content;
  })();
  exports.Content = Content;
  var Footer = /** @class */ (function () {
    function Footer() {
      var ele = document.createElement("div");
      ele.innerText = "This is footer";
      document.body.append(ele);
    }
    return Footer;
  })();
  exports.Footer = Footer;
});
define("page", ["require", "exports", "components"], function (
  require,
  exports,
  components_1
) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true }); //exports表示要导出的模块
  var Page = /** @class */ (function () {
    //export：暴露 Page
    function Page() {
      new components_1.Header();
      new components_1.Content();
      new components_1.Footer();
    }
    return Page;
  })();
  exports.default = Page;
});
