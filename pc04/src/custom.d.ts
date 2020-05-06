// 模仿 express 的 .d.ts 类型描述文件来定义 Express 的类型
// TS 有类型融合机制，会把我们自定义的 Express 和 我们安装的类型定义文件 .d.ts 里面的 Express 进行融合
declare namespace Express {
  interface Request {
    teachName: string;
  }
}
