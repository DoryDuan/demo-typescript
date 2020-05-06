import { Header, Content, Footer } from "./components";
export default class Page {
  //export：暴露 Page
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
