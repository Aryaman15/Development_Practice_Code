//Server Instantiate
const express=require('express')
const app=express();

//parsing: conversion of data from one form to another, data lena ek jgh se

//using body parser to destruct the elements
//used to parse req.body in express->PUT OR POST
const bodyparser=require('body-parser')

app.use(bodyparser.json());
//specifically parse JSON data and add it to the request Body object


//3000 is the port number
//activate the server on 3000 port
app.listen(3000,()=>{
    console.log("Server started at port no.3000")
})
//to run the server node server.js
//press allow


//create our own route using get
// get(path,(request,response))
// '/'=>homepage

//Routes
app.get('/',(request,response)=>{
    response.send("hello jee");
})

//jaise hi iss path par ayenge then hello jee send kardenge

//jb bhi / is route pr aoge, i.e homepage pr aoge then hello jee response milega



//creating post request
// .post(path,behavior)
//here we are creating an api request on our local server 
//localhost:3000 in this at the route /api/cars we are submiting the newdata

// app.post('/api/cars',(request,response)=>{
//     const {name,brand}=request.body; //destructuring
//     console.log(name);
//     console.log(brand);
//     response.send("Car submitted successfully");
// })
// how to verify the post result 

//mongoDB
//mongoose connect express js and mongoDB
//express framework->make it easy to work with node js


//mongoose
//schema->define the structure
//first create schema-> model where  asign the model
//using model we do CRUD operations


//setting up the mongoose
//Connecting the mongoose
const mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/youtube')
//if connection is created then
.then(()=>{console.log('Connection Successful')})
.catch((error)=>{console.log('Recieved Error')})
//if not then catch the error