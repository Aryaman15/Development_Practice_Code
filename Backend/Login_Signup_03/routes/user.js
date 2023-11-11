const express=require("express");
const router=express.Router();

//handler
const {login,signup}=require("../controller/Auth");
const{auth,isStudent,isAdmin}=require("../middleware/auth");


router.post("/login",login);
router.post("/signup",signup);

//protected routes
//jiske paas wo role hoga wo hi us routes ko access kar payenge

//testing route
router.get("/test",auth,(req,res)=>{
    res.json({
        sucess:true,
        message:"Welcome to the Protected route for TESTS"
    });
});


//Protected Route
router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        sucess:true,
        message:"Welcome to the protected route for Students",
    });
});

router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        sucess:true,
        message:"Welcome to the Protected Route for Admin",
    });
});

module.exports=router;