//app create 
const express=require("express");
const app=express();

//port find karna he
require("dotenv").config();
const PORT=process.env.PORT || 3000;

//middleware add karne h
app.use(express.json());
const fileupload=require("express-fileupload");
app.use(fileupload());

//db se connect krnah 
const db=require("./config/database");
db.connect();

//cloud se connect karna h

const cloudinary=require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//api route mount karna h
const Upload= require("./routes/FileUpload");
app.use("api/v1/upload",Upload); 
//is path ke baad aap upload wale handler ko attach kar sakhte hai

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`);
})
//activate server