import { User } from "./dal/Users"; 
import { ValidUser } from "./valid/info-valid";
import { UserModel } from "./view/user-model";

{
    let login = () => {
        let name = document.getElementById('name')['value'];
        let pass = document.getElementById('name')['value'];
        if (new ValidUser().validUser(name, pass)){
            let model =  new UserModel();
            model.name = name;
            model.pass = pass;
            let user = new User().findUser(model);
            if (user != undefined){
                alert ("با موفقیت وارد شدید")
            }
        }
            else {
                alert ("کاربر یافت نشد!")
            }
        else {
            alert("خطا اعتبارسنجی!")
        }
    }
}