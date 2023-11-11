const mongoose=require("mongoose")

//route handler
const commentSchema=new mongoose.Schema({
    post:{
        //if you want to refer to a different object the best practice is to refer to its id
        type:mongoose.Schema.Types.ObjectId, //post will store the id
        ref:"Post",//reference to the post model
    },
    user:{
        type:String,
        required:true,
    }
});
module.exports=mongoose.model("Likes",commentSchema);