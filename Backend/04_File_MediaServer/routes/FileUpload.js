const express=require("express");
const router=express.Router();

const {localFileUpload }=require("../controller/fileUpload");//fetching all handler function from controller

//api route
router.post("/localFileUpload",localFileUpload);

module.exports=router;
