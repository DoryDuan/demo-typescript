"use strict";
var age = 18;
var stature = 178.5;
console.log(age);
console.log(stature);
console.log('-------------');
var jspang = "技术胖 jspang.com";
console.log(jspang);
console.log('-------------');
var b = true;
var c = false;
var REN;
(function (REN) {
    REN[REN["nan"] = 0] = "nan";
    REN[REN["nv"] = 1] = "nv";
    REN[REN["yao"] = 2] = "yao";
})(REN || (REN = {}));
var r1 = REN.nv;
console.log(REN.yao); //返回了2，这是索引index，跟数组很想。
console.log(r1);
var RENGENDER;
(function (RENGENDER) {
    RENGENDER["nan"] = "\u7537";
    RENGENDER["nv"] = "\u5973";
    RENGENDER["yao"] = "\u5996";
})(RENGENDER || (RENGENDER = {}));
console.log(RENGENDER.yao); //返回了妖 这个字
console.log('-------------');
var t = 10;
t = 'js dd';
t = true;
console.log(t);
