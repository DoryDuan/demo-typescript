export class Header {
  constructor() {
    const ele = document.createElement("div");
    ele.innerText = "This is header";
    document.body.append(ele);
  }
}
export class Content {
  constructor() {
    const ele = document.createElement("div");
    ele.innerText = "This is content";
    document.body.append(ele);
  }
}
export class Footer {
  constructor() {
    const ele = document.createElement("div");
    ele.innerText = "This is footer";
    document.body.append(ele);
  }
}
