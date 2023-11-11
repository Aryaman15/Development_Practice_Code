const express= require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT || 5000;

app.use(express.json());
const SiteRoutes=require("./routes/ToSite")
app.use("/api/v1",SiteRoutes);

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