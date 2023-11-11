const mongoose=require("mongoose");
const todoSchema=new mongoose.Schema(
    {  
        user:{
            type:String,
            required:true,
            maxLength:20,
        },
        
        likes:{
            type:String,
            required:true,
            maxLength:100,
        },
        unlikes:{
            type:String,
            required:true,
            maxLength:100,
        },
        comments:{
            type:String,
            required:false,
            maxLength:150,
        }
    }
);

module.exports=mongoose.model("Site",todoSchema);