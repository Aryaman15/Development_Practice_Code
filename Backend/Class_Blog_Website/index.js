const express= require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT || 6000;

app.use(express.json());

const blog =require("./routes/blog")

//mount
app.use("/api/v1",blog)
app.listen(PORT,()=>{
    console.log(`SERVER STARTED SUCCESSFULLY AT ${PORT}`);
})

//connect to the database
const dbConnect=require("./config/database");
dbConnect();

//defualt Route
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to The Network</h1>")
})