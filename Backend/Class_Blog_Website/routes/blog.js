const express=require("express")
const router=express.Router();

//import 
const {createComment}=require("../controller/commentController")
const {createPost}=require("../controller/postController");
const{likePost, unlikePost}=require("../controller/likeController");


//mapping
router.post("/comments/create",createComment)
router.post("/posts/create",createPost)
router.post("/likes/like",likePost);
router.post("/like/unlike",unlikePost)
module.exports=router;