import express, { Request, Response, NextFunction } from "express";
// import router from "./router";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import "./controller/loginController";
import "./controller/crowllerController";
import router from "./router";

const app = express();

// 问题2：当使用中间件的时候，对 req 或者 res 做了修改之后，实际上类型并不能改变
// 解决方案：用类型融合的方法，新建一个 custom.d.ts 文件
// app.use((req: Request, res: Response, next: NextFunction) => {
//   req.teachName = "dell";
//   next();
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cookieSession({
    name: "session",
    keys: ["dory"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(router);

app.listen(7001, () => {
  console.log("serve is running at 7001");
});
