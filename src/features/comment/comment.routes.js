
import express from "express"
import CommentController from "./comment.controller.js"

const commentRoutes = express.Router();
const commentController = new CommentController();

commentRoutes.get("/all", commentController.allComment);
commentRoutes.get("/:id", commentController.commentSpecificPOST);
commentRoutes.post("/:id", commentController.addCommentSpecificPOST);
commentRoutes.delete("/:id", commentController.deleteComment);
commentRoutes.put("/:id", commentController.updateComment);
commentRoutes.get("/commentspagination/:postID", commentController.paginationComments);


export default commentRoutes;