const express = require('express');
const TodoController = require("../controllers/todo.controllers.js");
const router =  express.Router();

router.get("/",(req,res)=> TodoController.getAllTodos())
export default router;