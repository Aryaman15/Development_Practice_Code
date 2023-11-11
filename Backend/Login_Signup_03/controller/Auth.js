const bcrypt=require("bcrypt");
const User= require("../models/user");
const jwt=require("jsonwebtoken"); 

require("dotenv").config();//to fetch the secret key from dotenv
//singup route handler
exports.signup=async(req,res)=>{
    try{
        //get data
        const {name,email,password,role}=req.body;
        //check if user already exist
        const exisitingUser=await User.findOne({email});
        if(exisitingUser){
            //valid entry already exist
            return res.status(400).json({
                sucess:false,
                message:"User Already Exist",
            });
        }
        //password secure karo

        let hashedPassword;
        try{
            hashedPassword=await bcrypt.hash(password,10)
        }
        catch(err){
            return res.status(500).json({
                sucess:false,
                message:"ERROR IN HASHING PASSWORD",
            });
        }

        //create entry for user
        const user=await User.create({
            name,email,password:hashedPassword,role //ye charo chize store ho jayengi
        })

        return res.status(200).json({
            success:true,
            message:"USER CREATED SUCCESSFULLY",
        });

    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            messsage:"USER CANN'T BE REGISTERED PLEASE TRY AGAIN",
        });
    }
}


//login
exports.login=async(req,res)=>{
    try{
        //fetch(
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                sucess:fail,
                message:"FILL ALL THE DETAILS CAREFULLY",
            });
        }
        let user=await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success:fail,
                message:"User is not registered",
            })
        }
        //verify password and generate a JWT token
        const payload={
            email:user.email,
            id:user._id,
            role:user.role
        };
        if(await bcrypt.compare(password,user.password)){
            //password match
            let tocken=jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h",
            });
            user=user.toObject();
            user.tocken=tocken; //created a field tocken in user
            user.password=undefined; //this password is removed from user not from the database

            const options={
                expires: new Date(Date.now()+3*24*60*60*1000),//abhi se 3 din tk
                httpOnly:true,
            }
            res.cookie("babbarCookie",tocken,options).status(200).json({
                success:true,
                tocken,
                user,
                message:"User Logged in successfully"
            })

        }
        else{
            return res.status(403).json({
                success:false,
                message:"Password Incorrect",
            })
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login Failure",
        })
    }
}