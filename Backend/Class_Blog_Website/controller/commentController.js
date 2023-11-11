//import model
const Post=require("../models/postModel");
const Comment=require("../models/commentModel");

//business logic
exports.createComment=async(req,res)=>{
    try{
          //fetch data from req body
        const{post,user,body}=req.body;
        const comment=new Comment({
            post,user,body
        });
        //save the new object into the database
        const saveComment=await comment.save();

        //post collection update
        //find the post by Id, add the new comment in the comment array

        const upadtedPost= await Post.findByIdAndUpdate(post,{$push:{comments:saveComment.id}},{new:true})
        .populate("comments")//populate the comments array with comments documents
        .exec();

        res.json({
            post:upadtedPost,
        })
    }
    catch(error){
        return res.status(500).json({
            error:"Error while creating comment",
        });
    }
}