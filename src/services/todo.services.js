const TodoModel = require('../models/todo.models');
const TodoService = {};

TodoService.getAllTodos = async () =>{
    return await TodoModel.find({});
};