import AuthController from "../Controllers/AuthController.js";

const routes = [{
    path: "/", 
    method: "get",
    func: "getA", 
    controller: AuthController, 
    handleFiles: false,
}]

export default routes;