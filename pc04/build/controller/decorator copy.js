"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var router_1 = __importDefault(require("../router"));
var Methods;
(function (Methods) {
    Methods["get"] = "get";
    Methods["post"] = "post";
})(Methods || (Methods = {}));
// 通过 router.get(path, handler); 生成路由
function controller(target) {
    for (var key in target.prototype) {
        var path = Reflect.getMetadata("path", target.prototype, key);
        var method = Reflect.getMetadata("method", target.prototype, key);
        var handler = target.prototype[key];
        var middlewire = Reflect.getMetadata("middlewire", target.prototype, key);
        if (path && method && handler) {
            if (middlewire) {
                router_1.default[method](path, middlewire, handler);
            }
            else {
                router_1.default[method](path, handler);
            }
        }
    }
}
exports.controller = controller;
// 中间件的类型：RequestHandler
function use(middlewire) {
    return function (target, key) {
        Reflect.defineMetadata("middlewire", middlewire, target, key);
    };
}
exports.use = use;
function getRequestDecorators(type) {
    return function get(path) {
        return function (target, key) {
            Reflect.defineMetadata("path", path, target, key);
            Reflect.defineMetadata("method", type, target, key);
        };
    };
}
// 直接传字符串 'get' 会报错，需要传 Methods.get
exports.get = getRequestDecorators(Methods.get);
exports.post = getRequestDecorators(Methods.post);
