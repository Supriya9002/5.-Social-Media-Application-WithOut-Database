
import UserModel from "./user.model.js";
import Jwt  from "jsonwebtoken";
//import PostModel from "./../post/post.model.js"
import ApplicationError from "./../../error-handler/application.Error.js"


export default class UserController{

    register(req, res){
        const {name, email, password} = req.body;
        const user = UserModel.add(name, email, password);
        //console.log(user);
        res.status(201).send(user);
    }
    login(req, res){
        const {email, password} = req.body;
        const result = UserModel.isValidLogin(email, password);
        if(!result){
            throw new ApplicationError("Invalid Email and Password", 404)
            //res.status(404).send("Invalid Email and Password");
        }else{
            const token = Jwt.sign({
                userID: result.id,
                userEmail: result.email
            },
            "W)zjE%90Cku#`]D",
            {
                expiresIn: "1h",
            }
        );
        console.log(result);
        res.status(201).send(token);
        }
    }
}