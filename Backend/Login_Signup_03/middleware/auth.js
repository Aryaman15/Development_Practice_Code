//auth, isStudent, isAdmin

const jwt=require("jsonwebtoken");

require("dotenv").config();//to fetch the JWT_SECRET

//here three parameters are passed, req, res, and next 
//auth is checking the authencity of the user,fetching the user data
exports.auth=(req,res,next)=>{
    try{
        //extract JWT token
        const tocken=req.body.tocken;
        if(!tocken){
            return res.status(401).json({
                success:false,
                message:"Token Missing",
            });
        }
        //verify the token
        try{
            const decode=jwt.verify(tocken,process.env.JWT_SECRET); 
            console.log(decode);
            req.user=decode; //adding decoded tocken into request
        }
        catch(error){
            return res.status(401).json({
                sucess:false,
                message:"Tocken is invalid",
            });
        }
        //ab jayenge next middle warre ki taraf
        next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:"Something went wrong,while verifying the tocken",
        });
    }
}

exports.isStudent=(req,res,next)=>{
    try{
        if(req.user.role!="Student"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for student",
            })
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User Role is not matching",
        })
    }
}

exports.isAdmin=(req,res,next)=>{
    try{
        if(req.user.role!="Admin"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for admin",
            });
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User Role is not matching",
        })
    }
}