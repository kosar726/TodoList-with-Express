const Todo = require("../model/todo");


exports.addTodo = async (req, res) => {
    if (!req.body.todo) return res.redirect("/");
    try {
        await Todo.create({ text: req.body.todo });
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

exports.deletedTodo = async (req, res) => {
    try {
        await Todo.findByIdAndRemove( req.params.id);
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

exports.completedTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        todo.completed = true;
        await todo.save();
        res.redirect("/"); 
    } catch (error) {
        console.log(error)
    }
}