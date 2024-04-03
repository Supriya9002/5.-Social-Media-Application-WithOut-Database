
import express from "express"
import PostController from "./post.controller.js";
import uplodeFile from "./../../middleware/file.upload.middleware.js"

const postRoutes = express.Router();
const postController = new PostController();


postRoutes.get("/savePostAsOthersUser/:postid", postController.savePostAsOthersUser);
postRoutes.get("/archivePostBYPostID/:postid", postController.archivePostBYPostID);
postRoutes.get("/sortByDate__AND__sortEngagementByLike", postController.sortByDate__AND__sortEngagementByLike);
postRoutes.get("/sortPostByEngagement", postController.sortPOSTEngagemen);
postRoutes.get("/sortPostByDate", postController.sortPostByDate);
postRoutes.get("/paginationPosts", postController.paginationPosts);
postRoutes.get("/filter", postController.filterPostBYCaption);
postRoutes.get("/all",postController.allPost);
postRoutes.get("/:id",postController.specificPostByID);
postRoutes.get("/",postController.usersBasedPOST);
postRoutes.post("/",uplodeFile.single("imageUrl") ,postController.addPost);
postRoutes.delete("/:id",postController.deletePOST);
postRoutes.put("/:id",uplodeFile.single("imageUrl") ,postController.updatePOST);
postRoutes.get("/bookmark/:id", postController.BookmarkPost);


export default postRoutes;