const { Todo } = require("../models");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({
      where: { userId: req.user.id },
      order: [["createdAt", "DESC"]],
    });
    res.json({ data: todos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    console.log("User ID:", req.user.id); // Add this line for debugging
    const todo = await Todo.create({
      title,
      description,
      status,
      userId: req.user.id,
    });
    res.status(201).json({ data: todo, message: "Todo created successfully" });
  } catch (error) {
    console.error("Create todo error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const todo = await Todo.findOne({
      where: { id, userId: req.user.id },
    });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    await todo.update({ title, description, status });
    res.json({ data: todo, message: "Todo updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({
      where: { id, userId: req.user.id },
    });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ data: todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({
      where: { id, userId: req.user.id },
    });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    await todo.destroy();
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
