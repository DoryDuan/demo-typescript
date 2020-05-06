var getPersonName = function (person) {
    return person.name;
};
var setPersonName = function (person, name) {
    person.name = name;
};
var person = {
    name: "dory",
    sex: "female",
    say: function () {
        return "hhh";
    }
};
setPersonName(person, "hhh");
// 将对象直接传给 getPersonName 会进行强校验(传递的参数跟定义的参数要一模一样)
// 将一个对象变量传给 getPersonName 不会进行强校验(只要定义的参数有传递就可以了)
getPersonName({
    name: "dory",
    sex: "female",
    say: function () {
        return "hhh";
    }
});
getPersonName(person);
// 一个类应用一个接口,这个类必须具备这个接口的属性
var Users = /** @class */ (function () {
    function Users() {
        this.name = "dory";
    }
    Users.prototype.say = function () {
        return "hello";
    };
    return Users;
}());
var say = function (word) {
    return word;
};
