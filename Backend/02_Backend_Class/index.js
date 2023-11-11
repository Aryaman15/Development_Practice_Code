//live server of server:use nodemon
// npm i nodemon
//change the script in package.json and then your live changes will reflect back in the server

//mainscript
const express=require("express");
const app=express();

//load config from env file
require("dotenv").config();
const PORT=process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes=require("./routes/todo");
//now ab in saare routes ko mkount karna hai 
//versioning work

app.use("/api/v1",todoRoutes);
//api/v1 directory ke baad todoRoutes append/add ho jayega
//basically used when multipme routes are there so we used to mount them as per the version

//START SERVER
app.listen(PORT,()=>{
    //default behaviour
    console.log(`Server started successfully at ${PORT}`);
})

//connect to the database
const dbConnect=require("./config/database");
dbConnect();


//defualt Route
app.get("/",(req,res)=>{
    res.send('<h1>This is Homepage baby</h1>')
})