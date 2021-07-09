const TodoServices = require("../services/todo.services.js");
const TodoControllers = {};
TodoControllers.getAllTodos = async (req,res)=>{
    try{
        const todo = await TodoServices.getAllTodos();
        res.status(200).json({
            todos: todos,
        });
    }
    catch(error){
        res.status(400);
    }
};


export default TodoControllers;