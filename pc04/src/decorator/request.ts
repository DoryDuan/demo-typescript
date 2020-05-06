import "reflect-metadata";
import { CrowllerController, LoginController } from "../controller";

export enum Methods {
  get = "get",
  post = "post",
}

function getRequestDecorators(type: Methods) {
  return function (path: string) {
    return function (
      target: CrowllerController | LoginController,
      key: string
    ) {
      Reflect.defineMetadata("path", path, target, key);
      Reflect.defineMetadata("method", type, target, key);
    };
  };
}

// 直接传字符串 'get' 会报错，需要传 Methods.get
export const get = getRequestDecorators(Methods.get);
export const post = getRequestDecorators(Methods.post);
