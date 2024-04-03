
import LikeModel from "./../like/like.model.js"

export default class PostModel{
    constructor(id, userId, caption, imageUrl){
        this.id = id;
        this.userId = userId;
        this.caption = caption;
        this.imageUrl = imageUrl;
        this.createdAt = new Date();
    }
    static getAll(){
        return posts;
    }
    static add(userId, caption, imageUrl){
        const newPost = new PostModel(posts.length + 1, userId, caption, imageUrl);
        posts.push(newPost);
        return newPost;
    }
    static specificID(id){
        return posts.find((u)=> u.id == id);
    }
    static UserPOSTs(userID){
        return posts.filter((u)=> u.userId == userID);
    }
    static delete(deleteID, userID){
        const deleteINDEX = posts.findIndex((u)=> u.id == deleteID && u.userId == userID);
        const deletepost = posts.find((u)=> u.id == deleteID && u.userId == userID)
        if(deleteINDEX != -1){
            posts.splice(deleteINDEX, 1);
            return deletepost;
        }else{
            return null;
        }
    }
    static update(id, userID, NEWcaption, NEWimageUrl){
        const updatePost = posts.find((u)=> u.userId == userID && u.id == id);
        if(updatePost){
            updatePost.caption = NEWcaption;
            updatePost.imageUrl = NEWimageUrl;
            return updatePost;
        }
        else{
            return undefined;
        }
    }
    static getpostID(userID){
        return posts.find((u)=>u.userId == userID);
    }
    //Model for Additional Task
    static filter(Givencaption){
        return posts.filter((post)=> post.caption.toLowerCase().includes(Givencaption.toLowerCase()));
    }
    static BookMark(userID, postID){
        const postResult = posts.find((u)=> u.id == postID);
        if(postResult){
            postResult.BookMarkBy = postResult.BookMarkBy || [];
            if(!postResult.BookMarkBy.includes(userID)){
                postResult.BookMarkBy.push(userID);
            }
            return postResult;
        }
        return undefined;
    }
    static PaginationDisplay_All_Posts(page=1, pageSize=10){
        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;
        const paginatedPosts = posts.slice(startIndex, endIndex);
        console.log(paginatedPosts);
        return {
            comments: paginatedPosts,
            currentPage: page,
            totalPages: Math.ceil(posts.length / pageSize)
        }
    }
    static sortByDate(){
        return posts.sort((a,b)=> b.createdAt - a.createdAt);
    }
    static sortEngagementByLike(){
        return posts.sort((a,b)=> LikeModel.totalLike(b.id) - LikeModel.totalLike(a.id))
            //console.log("Supriya a dekh", LikeModel.totalLike(b.id), LikeModel.totalLike(a.id));
    }
    static sortByDate_AND_sortEngagementByLike(){
        return posts.sort((a,b)=> (b.createdAt - a.createdAt) - (LikeModel.totalLike(b.id) - LikeModel.totalLike(a.id)));
    }
    static savePost(postID, userID){
        const save_post = posts.find((u)=> u.id == postID);
        if(!save_post){
            return null;
        }else{
            if(!save_post.saveDraftUserID){
                save_post.saveDraftUserID = userID;
                SavePost.push(save_post);
                //console.log(save_post);
                console.log("a lo savePost list")
                console.log(SavePost)
                return save_post;
            }
        }
    }
    static archivePost(postID, saveDraftUserID){
        const archive = SavePost.find((u)=> u.id == postID && u.saveDraftUserID == saveDraftUserID);
        console.log("Achived", archive)
        if(!archive){
            return null;
        }
        console.log("A LO SavePost", SavePost);
        return archive;
    }

}
var SavePost = [];       

var posts = [
    new PostModel(
        "1",
        "1",
        "Friendship-Party 2022",
        "IMG_20201113_165205.jpg"
    ),new PostModel(
        "2",
        "2",
        "Collage Life Photo",
        "IMG_20201113_165205.jpg"
    ),new PostModel(
        "3",
        "3",
        "Dargiling 2022",
        "IMG_20201113_165205.jpg"
    ),new PostModel(
        "4",
        "1",
        "Childwood Photo",
        "IMG_20201113_165205.jpg"
    ),new PostModel(
        "5",
        "2",
        "With My Life-Patner",
        "IMG_20201113_165205.jpg"
    ),new PostModel(
        "6",
        "3",
        "My Birthday Celebration",
        "IMG_20201113_165205.jpg"
    ),new PostModel(
        "7",
        "1",
        "School Life Last Photo",
        "IMG_20201113_165205.jpg",
    ),
]