import CommentModel from "./comment.model.js"
import ApplicationError from "./../../error-handler/application.Error.js"

export default class CommentController{

    //i create Extra funtion for see all comments
    allComment(req, res){
        const result = CommentModel.getAll();
        res.status(201).send(result);
    }
    commentSpecificPOST(req, res){
        const userID = req.userID;
        const postId = req.params.id;
        //console.log(userID, postId);
        const result = CommentModel.commentSpecific(userID, postId);
        //console.log(result);
        if(result.length == 0){
            throw new ApplicationError("0 Comments by users",401);
        }else{
            res.status(201).send(result);
        }
    }
    addCommentSpecificPOST(req, res){
        const userID = req.userID;
        const postId = req.params.id;
        const content = req.body.content;
        const result = CommentModel.addCommentSpecific(userID, postId, content);
        if(result){
            res.status(201).send(result);
        }
        else{
            throw new ApplicationError ("Invalid Request", 401)
            //res.status(401).send("Invalid Request");
        }
    }
    deleteComment(req, res){
        const userID = req.userID;
        const ID = req.params.id;
        const result = CommentModel.delete(userID, ID)
        if(!result){
            throw new ApplicationError ("Somthing You Wrong", 404)
            //res.status(404).send("Somthing You Wrong");
        }
        else{
            res.status(201).send(result);
        }
    }
    updateComment(req, res){
        const userID = req.userID;
        const ID = req.params.id;
        const content = req.body.content;
        console.log(userID, ID, content);
        const result = CommentModel.update(userID, ID, content)
        console.log(result);
        if(!result){
            throw new ApplicationError ("Somthing You Wrong", 404)
            //res.status(404).send("Somthing You Wrong");
        }
        else{
            res.status(201).send(result);
        }
    }
    //Additional Task
    paginationComments(req, res){
        const postID = req.params.postID;
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        const result = CommentModel.PaginationDisplay_All_Comments(postID, page, pageSize);
        if(!result){
            throw new ApplicationError("Invalid Post ID", 404);
        }else{
            res.status(200).send(result);
        }
    }
}