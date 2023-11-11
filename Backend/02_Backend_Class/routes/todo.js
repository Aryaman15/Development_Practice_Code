 const express=require('express')
const router=express.Router();

//import controller
const{createTodo}=require("../controller/createTodo")

const{getTodo,getTodoById}=require("../controller/getTodo")

const{updateTodo}=require("../controller/updateTodo")

const {deleteTodo}=require("../controller/deleteTodo")
//define API routes
//creating  "create todo" route

//mapping the controller with request type
router.post("/createTodo",createTodo); // "/createTodo path is now mapped with behaviour createTodo"
router.get("/getTodos",getTodo); //getTodos here is used to call the route
router.get("/getTodos/:id",getTodoById)
router.put("/updateTodos/:id",updateTodo)
router.delete("/deleteTodo/:id",deleteTodo);
//You can pass the id like this 

module.exports=router;



