import PostModel from "./../post/post.model.js"
import UserModel from "./../user/user.model.js"

export default class LikeModel{
    constructor(id, userId, postId){
        this.id = id;
        this.userId = userId;
        this.postId = postId;
    }
    static totalLike(postID){
        const isValidPOSTid = PostModel.specificID(postID);
        if(!isValidPOSTid){
            return null;
        }
        const getPostLike = Likes.find((u)=> u.postId == postID);
        if(getPostLike){
            const userLikeArray = getPostLike.userId;
            return userLikeArray.length;
        }
        return null;
    }
    static toggle(postID, userID){
       const postResult = PostModel.getAll().find((u)=> u.id == postID); //example if, userID= 1; postID = 1
       if(!postResult){
        return "Post Id invalid"
       }
       const userResult = UserModel.getAll().find((u)=> u.id == userID);
       if(!userResult){
        return "User id invalid"
       }
       const getPostLike = Likes.find((u)=> u.postId == postID);
       console.log(getPostLike);
       const userLikeArray = getPostLike.userId;
       const userIDIndex = userLikeArray.findIndex((u)=> u == userID);
       console.log(userLikeArray, userIDIndex);
       if(userIDIndex != -1){
        userLikeArray.splice(userIDIndex, 1);
        const totalLike = userLikeArray.length;
        return {totalLike, toggle: "UnLike"};
       }
       else{
        userLikeArray.push(userID);
        const totalLike = userLikeArray.length;
        return {totalLike, toggle: "Like"};
       }
    }
}
var Likes = [
    new LikeModel(
        "1",
        [2,1,3,4,5,7],
        "1"
    ),new LikeModel(
        "2",
        [2,4,5],
        "3"
    ),new LikeModel(
        "3",
        [1,3,8],
        "5"
    ),new LikeModel(
        "4",
        [5,9,6],
        "6"
    ),new LikeModel(
        "5",
        [2,3],
        "7"
    ),new LikeModel(
        "6",
        [3],
        "4"
    )
]