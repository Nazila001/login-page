"use strict";
exports.__esModule = true;
exports.ValidUser = void 0;
var ValidUser = /** @class */ (function () {
    function ValidUser() {
    }
    ValidUser.prototype.name = function (name) {
        if (name != undefined && name.length >= 5)
            return true;
        else
            return false;
    };
    ValidUser.prototype.pass = function (pass) {
        if (pass != undefined && pass.length >= 5)
            return true;
        else
            return false;
    };
    ValidUser.prototype.validUser = function (name, pass) {
        return this.name(name) && this.pass(pass);
    };
    return ValidUser;
}());
exports.ValidUser = ValidUser;
