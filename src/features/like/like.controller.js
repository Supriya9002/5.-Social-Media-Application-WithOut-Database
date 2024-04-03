import LikeModel from "./like.model.js"
import ApplicationError from "./../../error-handler/application.Error.js"

export default class LikeController{
    
    allLikeSpecificPOST(req, res){
        const postID = req.params.postId;
        //const userID = req.userID;
        const result = LikeModel.totalLike(postID);
        if(!result){
            throw new ApplicationError ("Post id inValid", 404);
        }
        res.status(200).send({totalLike: result});
    }
    toggleLikeStatus(req, res){
        const postID = req.params.postId;
        const userID = req.userID; 
        console.log(postID, userID);
        const result = LikeModel.toggle(postID, userID);
        console.log(result);
        res.status(201).send(result);
    }
    
}
