const Post=require("../models/likeModel")
const Like=require("../models/likeModel");

//like a post
exports.likePost=async(req,res)=>{
    try{
        const{post,user}=req.body;
        //object create 
        const like=new Like({
            post,user,
        });
        const savedLike=await like.save();

        //update the post collection
        const updatedPost=await Post.findByIdAndUpdate(post,{$push: {likes:savedLike._id}},{new:true});
        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        return res.status(400).json({
            error:"Error while Liking post",
        })
    }
}



//unlike a post
exports.unlikePost= async(req,res)=>{
    try{
        const{post,like}=req.body;
        //find and delete the like 
        const deleteLike=await Like.findOneAndDelete({post:post,_id:like});

        //update the post collection
        const updatedPost=await Post.findByIdAndDelete(post,{$pull:{likes: deleteLike._id}},{new:true});
        res.json({
            post:updatedPost,
        })
    }   
    catch(error){
        return res.status(400).json({
            error:"Error while UnLiking post",
        })
    }
}