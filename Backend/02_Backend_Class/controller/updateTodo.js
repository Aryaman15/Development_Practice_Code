const Todo=require("../models/Todo")

exports.updateTodo=async(req,res)=>{
    try{
        //second way of fetching the id
        const {id}=req.params;
        const{title,description}=req.body //req is being sent from postman
        const todo=await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updateAt:Date.now()},
        )
        res.status(200).json({
            sucess:true,
            data:todo,
            message:"Updated Successfully",
        })
    }           
    catch(err){
        console.log(err);
        res.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:"Server Error",
        });
    }
}