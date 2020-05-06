import "reflect-metadata";
import { RequestHandler } from "express";
import { CrowllerController, LoginController } from "../controller";

// 中间件的类型：RequestHandler
export function use(middlewire: RequestHandler) {
  return function (target: CrowllerController | LoginController, key: string) {
    const originMiddlewire: RequestHandler[] =
      Reflect.getMetadata("middlewires", target, key) || [];
    Reflect.defineMetadata(
      "middlewires",
      [...originMiddlewire, middlewire],
      target,
      key
    );
  };
}
