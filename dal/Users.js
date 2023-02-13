"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
        this.lsvUser = [{ name: "sam", pass: "123" }, { name: "mary", pass: "123" }];
    }
    User.prototype.findUser = function (user) {
        return this.lsvUser.find(function (item) {
            return item.name == user.name && item.pass == user.pass;
        });
    };
    return User;
}());
exports.User = User;
