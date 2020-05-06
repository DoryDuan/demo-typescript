import fs from "fs";
import path from "path";
import { Request, Response, NextFunction } from "express";
import { controller, get, use } from "../decorator";
import { getResponseData } from "../utils/util";
import Crowller from "../utils/crowller";
import Analyzer from "../utils/analyzer";

interface BodyRequest extends Request {
  body: {
    [propName: string]: string | undefined;
  };
}

// isLogin 应该是 boolean 类型，加两个 ! 转成 boolean 类型
const checkLogin = (req: Request, res: Response, next: NextFunction): void => {
  console.log("checkLogin middleware");
  const isLogin = !!(req.session && req.session.login);
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null, "请先登录"));
  }
};

const test = (req: Request, res: Response, next: NextFunction): void => {
  console.log("test middleware");
  next();
};

@controller("/api")
export class CrowllerController {
  @get("/getData")
  @use(checkLogin)
  // @use(test)
  getData(req: BodyRequest, res: Response): void {
    const secret = "x3b174jsx";
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;

    const analyzer = Analyzer.getInstance();
    new Crowller(url, analyzer);
    res.json(getResponseData<responseResult.getData>(true));
  }
  @get("/showData")
  @use(checkLogin)
  @use(test)
  showData(req: BodyRequest, res: Response): void {
    try {
      const filePosition = path.resolve(__dirname, "../../data/course.json");
      const result = fs.readFileSync(filePosition, "utf-8");
      res.json(getResponseData<responseResult.showData>(JSON.parse(result)));
    } catch (e) {
      res.json(getResponseData<responseResult.showData>(false, "数据不存在"));
    }
  }
}
