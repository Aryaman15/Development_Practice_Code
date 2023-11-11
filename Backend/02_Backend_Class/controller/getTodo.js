// import the model
const Todo=require("../models/Todo")

exports.getTodo=async(req,res)=>{
    try{
        //fetch all todo items 
        const todos=await Todo.find({});//jitne bhi hai saare fetch karliye
        //this is the the line where you pass queries to mongoDB
        //response
        res.status(200).json({
            sucess:true,
            data:todos,
            message:"Entire Data is Fetched"
        });
    }
    catch(error){
        console.error(err);
        res.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:"SERVER ERROR",
        });
    }
}
//create,find1,findbyid, findbyiddelete->cheatsheet

exports.getTodoById=async(req,res)=>{
    try{
        //extract todo items basis on id - use find by id 
        const id=req.params.id; //go to parameter and get id
        const todo=await Todo.findById({_id:id})
        
        //data for given id is not found 
        if(!todo){
            return res.status(404).json()({
                sucess:false,
                message:"No Data Found with Given Id",
            })
        }
        //data for given id Found
        res.status(200).json({
            sucess:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })
    }
    catch(error){
        console.error(err);
        res.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:"SERVER ERROR",
        });
    }
}