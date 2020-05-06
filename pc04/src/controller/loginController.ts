import { Request, Response } from "express";
import { controller, get, post } from "../decorator";
import { getResponseData } from "../utils/util";

interface BodyRequest extends Request {
  body: {
    [propName: string]: string | undefined;
  };
}

@controller("/api")
export class LoginController {
  static isLogin(req: BodyRequest): boolean {
    return !!(req.session && req.session.login);
  }
  @get("/isLogin")
  isLogin(req: BodyRequest, res: Response): void {
    const isLogin = LoginController.isLogin(req);
    const result = getResponseData<responseResult.isLogin>(isLogin);
    res.json(result);
  }
  @post("/login")
  login(req: BodyRequest, res: Response): void {
    const { password, name } = req.body;
    const isLogin = LoginController.isLogin(req);
    if (isLogin) {
      res.json(getResponseData<responseResult.login>(true));
    } else {
      if (password === "123") {
        if (req.session) {
          req.session.login = true;
          res.json(getResponseData<responseResult.login>(true));
        }
      } else {
        res.json(getResponseData<responseResult.login>(false, "登录失败"));
      }
    }
  }
  @get("/logout")
  loginout(req: BodyRequest, res: Response): void {
    if (req.session) {
      req.session.login = false;
    }
    res.json(getResponseData<responseResult.logout>(true));
  }
}
