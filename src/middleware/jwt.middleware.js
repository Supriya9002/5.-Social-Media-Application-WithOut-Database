import Jwt  from "jsonwebtoken";

const JwtAuth = (req, res, next)=>{

    const token = req.headers["authorization"];
    //console.log(token);
    if(!token){
        res.status(401).send("Unauthorized");
    }
    try{
        const payload = Jwt.verify(token, "W)zjE%90Cku#`]D");
        console.log(payload);
        req.userID = payload.userID;
    }catch(err){
        console.log(err);
        res.status(401).send("Unauthorized");
    }
    next();
}

export default JwtAuth;