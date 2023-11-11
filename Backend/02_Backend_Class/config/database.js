const mongoose=require("mongoose")

require("dotenv").config();

const dBConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)//return promise
    .then(()=>{console.log("DB CONNECTED")})
    .catch((error)=>{console.log("DB CONNECTION FAILED")
    console.log(error.message);
    process.exit(1)
    });
}

module.exports=dBConnect;
  