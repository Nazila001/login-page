"use strict";
exports.__esModule = true;
//var Users_1 = require("./dal/Users");
//var info_valid_1 = require("./valid/info-valid");
//var user_model_1 = require("./view/user-model");
{
    var login = function () {
        var name = document.getElementById('name')['value'];
        var pass = document.getElementById('name')['value'];
        if (new ValidUser().validUser(name, pass)) {
            var model = new UserModel();
            model.name = name;
            model.pass = pass;
            var user = new User().findUser(model);
            if (user != undefined) {
                alert("با موفقیت وارد شدید");
            }
        }
        else {
            alert("کاربر یافت نشد!");
        }
    };
    {
        alert("خطا اعتبارسنجی!");
    }
}
