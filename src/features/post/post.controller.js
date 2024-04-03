import PostModel from "./post.model.js";
import ApplicationError from "./../../error-handler/application.Error.js"
export default class PostController{

    allPost(req, res){
        const posts = PostModel.getAll();
        res.status(200).send(posts);
    }
    addPost(req, res){
        const userID = req.userID;
        const {caption} = req.body;
        const imageUrl = req.file.filename;
        const result = PostModel.add(userID, caption, imageUrl);
        //console.log(result);
        res.status(201).send(result);
    }
    specificPostByID(req, res){
        const specificID = req.params.id;
        const result = PostModel.specificID(specificID);
        if(!result){
            throw new ApplicationError("Post not found this by specific-Id", 404);
            //res.status(404).send("Post not found this by specific-Id");
        }else{
            res.status(201).send(result);
        }
    }
    usersBasedPOST(req, res){
        const userID = req.userID;
        const result = PostModel.UserPOSTs(userID);
        if(!result){
            throw new ApplicationError("User Not create Any Post", 404);
            //res.status(201).send("User Not create Any Post");
        }
        else{
            res.status(201).send(result);
        }
    }
    deletePOST(req, res){
        const deleteID = req.params.id;
        const userID = req.userID;
        console.log(deleteID, userID);
        const result = PostModel.delete(deleteID, userID);
        if(!result){
            throw new ApplicationError("Invalid request for delete",404);
            //res.status(404).send("Invalid request for delete");
        }else{
            console.log(result);
            res.status(201).send(result);
        }
    }
    updatePOST(req, res){
        const userID = req.userID;
        const updateID = req.params.id;
        const {caption} = req.body;
        const imageUrl = req.file.filename;
        const result = PostModel.update(updateID, userID, caption, imageUrl);
        if(!result){
            throw new ApplicationError("Invalid Update Request", 404);
            //res.status(404).send("Invalid Update Request");
        }else{
            res.status(201).send(result);
        }
    }
    //Additional Task
    filterPostBYCaption(req, res){
        const caption = req.query.caption;
        const userID = req.userID;
        const result = PostModel.filter(caption);
        console.log(caption, userID, result);
        if(result){
            res.status(200).send(result);
        }else{
            throw new ApplicationError("No Post Avalaible", 404)
        }
    }
    BookmarkPost(req, res){
        const userID = req.userID;
        const postID = req.params.id;
        const result = PostModel.BookMark(userID, postID);
        if(!result){
            throw new ApplicationError("Invalid BookMark Request", 404);
        }else{
            res.status(201).send(result);
        }
    }
    paginationPosts(req, res){
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        const result = PostModel.PaginationDisplay_All_Posts(page, pageSize);
        console.log(result);
        res.status(200).send(result);
    }
    sortPostByDate(req, res){
        const result = PostModel.sortByDate();
        if(!result){
            throw new ApplicationError("No Post Avalable", 404);
        }else{
            res.status(200).send(result);
        }
    }
    sortPOSTEngagemen(req, res){
        const result = PostModel.sortEngagementByLike();
        //console.log("A lo result", result);
        if(!result){
            throw new ApplicationError("No Post Avalable", 404);
        }else{
            res.status(200).send(result);
        }
    }
    sortByDate__AND__sortEngagementByLike(req, res){
        const result = PostModel.sortByDate_AND_sortEngagementByLike();
        if(!result){
            throw new ApplicationError("No Post Avalable", 404);
        }else{
            res.status(200).send(result);
        }
    }
    savePostAsOthersUser(req, res){
        const postID = req.params.postid;
        //console.log(postID);
        const userID = req.userID;
        const result = PostModel.savePost(postID, userID);
        //console.log(result);
        if(!result){
            throw new ApplicationError("Something Wrong", 404);
        }
        res.status(201).send(result);
    }
    archivePostBYPostID(req, res){
        const postID = req.params.postid;
        const saveDraftUserID = req.userID;
        const result = PostModel.archivePost(postID, saveDraftUserID);
        console.log("a le bhai", postID, saveDraftUserID, "a le result", result);
        if(!result){
            throw new ApplicationError("Hare not found this postId", 404);
        }
        res.status(200).send(result);
    }
}