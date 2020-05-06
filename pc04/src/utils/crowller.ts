// superagent 用来在node里面发请求获取数据
// 它是用js代码写的，TS引入JS识别不了
// 解决方案：ts -> .d.ts 翻译文件 -> js,安装翻译文件：cnpm install -D @types/superagent
import fs from "fs";
import path from "path";
import superagent from "superagent";

export interface Analyzer {
  analyze: (html: string, filePath: string) => string;
}

export default class Crowller {
  private filePath = path.resolve(__dirname, "../../data/course.json");
  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess();
  }
  private async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContent = this.analyzer.analyze(html, this.filePath);
    this.writeFile(fileContent);
  }
  private writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }

  private async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }
}
