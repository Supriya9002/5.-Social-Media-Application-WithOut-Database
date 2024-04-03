import express from "express"
import userRoutes from "./src/features/user/user.routes.js"
import bodyParser from "body-parser";
import JwtAuth from "./src/middleware/jwt.middleware.js";
import postRoutes from "./src/features/post/post.routes.js"
import commentRoutes from "./src/features/comment/comment.routes.js"
import likeRoutes from "./src/features/like/like.routes.js"
import loggerMiddleware from "./src/middleware/logger.middleware.js"
import ApplicationError from "./src/error-handler/application.Error.js"
//server
const server = express();

//All middleware's
server.use(bodyParser.json());
server.use(loggerMiddleware);

//All APIs
server.use("/api", userRoutes);
server.use("/api/posts",JwtAuth, postRoutes);
server.use("/api/comments",JwtAuth ,commentRoutes);
server.use("/api/likes",JwtAuth, likeRoutes);
server.get("/", (req, res)=>{
    res.send("Social Media Application App");
})
server.use((err, req, res, next)=>{ //Application-Level-error
    //console.log(err); 
    if (err instanceof ApplicationError){
      return res.status(err.code).send(err.message);
    }
    res.status(500).send('Something went wrong, please try later');
});
server.use((req, res)=>{ //for any invalid API request
    res.status(404).json("API not found "); //Please check our documentation for more information at localhost:3200/api-docs
});

//port
server.listen(9000,()=>{
    console.log("Server Running in Port 9000");
})