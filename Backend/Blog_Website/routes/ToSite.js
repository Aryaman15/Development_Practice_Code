const express=require('express')
const router=express.Router();

//this block variable name should be as same as files names
const{createPost}=require("../controllers/createPost")
const{getSite}=require("../controllers/getSite")
const{Likes}=require("../controllers/Likes");


router.post("/post",createPost);
router.get("/getpost",getSite);
router.get("/likeuser/:id",Likes);
module.exports=router;