const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");
const authMiddleware = require("../middleware/auth.middleware");

// Apply auth middleware to all todo routes
router.use(authMiddleware);

// Get all todos
router.get('/', todoController.getAllTodos);

// Create a new todo
router.post('/', todoController.createTodo);

// Update a todo
router.put('/:id', todoController.updateTodo);

// Get a specific todo
router.get('/:id', todoController.getTodo);

// Delete a todo
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
