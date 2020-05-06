import "reflect-metadata";
import { RequestHandler } from "express";
import router from "../router";

enum Methods {
  get = "get",
  post = "post",
}

// 通过 router.get(path, handler); 生成路由
export function controller(target: any) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    const method: Methods = Reflect.getMetadata(
      "method",
      target.prototype,
      key
    );
    const handler = target.prototype[key];
    const middlewire = Reflect.getMetadata("middlewire", target.prototype, key);
    if (path && method && handler) {
      if (middlewire) {
        router[method](path, middlewire, handler);
      } else {
        router[method](path, handler);
      }
    }
  }
}

// 中间件的类型：RequestHandler
export function use(middlewire: RequestHandler) {
  return function (target: any, key: string) {
    Reflect.defineMetadata("middlewire", middlewire, target, key);
  };
}

function getRequestDecorators(type: Methods) {
  return function get(path: string) {
    return function (target: any, key: string) {
      Reflect.defineMetadata("path", path, target, key);
      Reflect.defineMetadata("method", type, target, key);
    };
  };
}

// 直接传字符串 'get' 会报错，需要传 Methods.get
export const get = getRequestDecorators(Methods.get);
export const post = getRequestDecorators(Methods.post);
