"use strict";
// 变量作用域
function zhengXing() {
    var yangzia = '刘德华';
    {
        var yangzib = '小沈阳';
        console.log('技术胖整形成了' + yangzib + '的样子');
    }
    console.log('技术胖整形成了' + yangzia + '的样子');
    console.log('技术胖整形成了' + yangzib + '的样子');
}
zhengXing();
