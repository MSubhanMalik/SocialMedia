class AuthController{
    constructor(context){
        this.context = context;
    }

    async getA(){
        // throw new Error("Mothing")
        this.context.res.send("Done");
    }
}

export default AuthController;