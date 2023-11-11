const mongoose=require("mongoose");
const todoSchema=  new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,//chahihye hi chahiye
            maxLength:50,
        },
        description:{
            type:String,
            required:false,
            maxLength:50,
        }, 
        createAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports=mongoose.model("Todo",todoSchema);