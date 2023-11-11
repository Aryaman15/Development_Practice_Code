const mongoose=require("mongoose");

require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log("DATABASE CONNECTED")})
    .catch((error)=>{
        console.log("DATABASE CONNECTION FAILED")
        process.exit(1) 
    });
}
module.exports=mongoose.connect();