"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import router from "./router";
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./controller/loginController");
require("./controller/crowllerController");
var router_1 = __importDefault(require("./router"));
var app = express_1.default();
// 问题2：当使用中间件的时候，对 req 或者 res 做了修改之后，实际上类型并不能改变
// 解决方案：用类型融合的方法，新建一个 custom.d.ts 文件
// app.use((req: Request, res: Response, next: NextFunction) => {
//   req.teachName = "dell";
//   next();
// });
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(cookie_session_1.default({
    name: "session",
    keys: ["dory"],
    maxAge: 24 * 60 * 60 * 1000,
}));
app.use(router_1.default);
app.listen(7001, function () {
    console.log("serve is running at 7001");
});
