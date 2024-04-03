
export default class CommentModel{

    constructor(id, userId, postId, content){
        this.id = id;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }
    static getAll(){
        return comments;
    }
    static commentSpecific(userID, postID){
        return comments.filter((u)=> u.userId == userID && u.postId == postID);
    }
    static addCommentSpecific(userID, postID, content){
        const newCommernt = new CommentModel(comments.length + 1, userID, postID, content);
        comments.push(newCommernt);
        return newCommernt;
    }
    static delete(userID, ID){
        const deletePOSTIndex = comments.findIndex((u)=> u.userId == userID && u.id == ID);
        const deletePOST = comments.find((u)=> u.userId == userID && u.id == ID);
        if(deletePOSTIndex != -1){
            comments.splice(deletePOSTIndex, 1);
            return deletePOST;
        }else{
            return null;
        }
    }
    static update(userID, ID, content){
        const updatePOST = comments.find((u)=> u.userId == userID && u.id == ID);
        console.log(updatePOST);
        if(updatePOST){
            updatePOST.content = content;
            return updatePOST;
        }
        else{
            return null;
        }
    }
    static PaginationDisplay_All_Comments(postID, page=1, pageSize=10){
        if(!comments.find((u)=> u.postId == postID)){
            return undefined;
        }
        const postComment = comments.filter((u)=> u.postId == postID);
        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;
        const paginatedComments = postComment.slice(startIndex, endIndex);
        console.log(paginatedComments);
        return {
            comments: paginatedComments,
            currentPage: page,
            totalPages: Math.ceil(postComment.length / pageSize)
        }
    }
    
}

var comments = [
    new CommentModel(
        "1",
        "1",
        "1",
        "ভাই School জীবনে যদি আবার ফিরে যেতে পারতাম|"
    ),new CommentModel(
        "2",
        "2",
        "2",
        "ওহঃ!! কী লাগছে"
    ),new CommentModel(
        "3",
        "3",
        "3",
        "এক কথায় অনবদ্য।"
    ),new CommentModel(
        "4",
        "1",
        "1",
        "অসম্ভব ভাল ছবি"
    ),new CommentModel(
        "5",
        "2",
        "2",
        "ভাই আগের কথা মনে করিয়ে দিলি"
    ),new CommentModel(
        "6",
        "3",
        "3",
        "Omg কী দারুণ লাগছে তোদের কে একসঙ্গে"
    ),new CommentModel(
        "7",
        "1",
        "1",
        "Are Boss Valo to ??"
    ),new CommentModel(
        "8",
        "1",
        "1",
        "আরে ভালো আছিস টো ?"
    ),new CommentModel(
        "9",
        "2",
        "2",
        "আরে সুপ্রিয় এত দিন কোথায় ছিলি"
    ),new CommentModel(
        "10",
        "1",
        "1",
        "চল একদিন দীঘা থেকে ঘুরে আসি"
    ),
]