import "reflect-metadata";
import router from "../router";
import { RequestHandler } from "express";
import { Methods } from "./request";

// 通过 router.get(path, handler); 生成路由
export function controller(root: string) {
  return function (target: new (...args: any[]) => any) {
    for (let key in target.prototype) {
      const path: string = Reflect.getMetadata("path", target.prototype, key);
      const method: Methods = Reflect.getMetadata(
        "method",
        target.prototype,
        key
      );
      const handler = target.prototype[key];
      const middlewires: RequestHandler[] = Reflect.getMetadata(
        "middlewires",
        target.prototype,
        key
      );
      if (path && method) {
        const fullPath = root === "/" ? path : `${root}${path}`;
        if (middlewires && middlewires.length) {
          router[method](fullPath, ...middlewires, handler);
        } else {
          router[method](fullPath, handler);
        }
      }
    }
  };
}
