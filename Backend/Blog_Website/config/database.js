const mongoose=require("mongoose");

require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("DATABASE CONNECTED")})
    .catch((error)=>{console.log("DB CONNECTION FAILED")
    console.log(error.message)
    process.exit(1)
    });
}
module.exports=dbConnect;