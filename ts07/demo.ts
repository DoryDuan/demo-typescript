// 索引默认是从 0 开始的
// OFFLINE = 1，索引就会变成 1,2,3
enum Status {
  OFFLINE = 1,
  ONLINE,
  DELETE,
}

console.log(Status); //{ '1': 'OFFLINE','2': 'ONLINE','3': 'DELETE',OFFLINE: 1,ONLINE: 2,DELETE: 3 }
console.log(Status.DELETE); // 3,索引 index
console.log(Status[1]); // OFFLINE,索引对应的值

// 枚举属性赋值
enum Status1 {
  OFFLINE = "off",
  ONLINE = "on",
  DELETE = "del",
}
console.log(Status1); // { OFFLINE: 'off', ONLINE: 'on', DELETE: 'del' }
console.log(Status1.DELETE); // del,属性对应的值
console.log(Status1["del"]); // undefind

function getResult(status) {
  if (status === Status.OFFLINE) {
    return "offline";
  } else if (status === Status.ONLINE) {
    return "online";
  } else if (status === Status.DELETE) {
    return "delete";
  }
  return "error";
}
const result = getResult("1");
// console.log(result);
