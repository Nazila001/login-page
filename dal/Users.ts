import { UserModel } from "../view/user-model";

export class User {
    lsvUser : UserModel[] = [{name:"sam", pass:"123"},{name:"mary", pass:"123"}] 
    findUser(user:UserModel){
        return this.lsvUser.find(item=>{
            return item.name==user.name && item.pass==user.pass
        })
    }
}