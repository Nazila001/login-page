export class ValidUser {
    private name (name:string) {
        if (name !=undefined && name.length>=5 )
        return true
        else return false
    }

    private pass (pass:string) {
        if (pass !=undefined && pass.length>=5 )
        return true
        else return false
    }

    validUser(name:string , pass:string){
        return this.name(name) && this.pass(pass)
    }
}