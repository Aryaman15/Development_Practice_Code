const Todo=require('../models/Todo');

//define route handler
//we don't want ki or whole code wait for the api to be fetched 
//therefore using async to allow it execute in parallel

//To avoid the blockage of main thread use async for all database interactions
exports.createTodo=async(req,res)=>{
    try{
        //extract title and description from request and body
        //destructor
        const {title,description}=req.body;
        //create a new Todo object and insert in the DB
        const response=await Todo.create({title,description});//create is used to insert in the DB
        //send a json response with a success flag
        res.status(200).json( ///setting the response status and send the following details to the response
            {
                sucess:true,
                data:response,
                message:"Entry Created Successfully"
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}