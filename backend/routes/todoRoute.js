const express = require('express')
const {getAll, getOne, addTodos, updateTodo, createTodo, deleteTodo} = require('../controllers/todoController')
const router = express.Router()

// Get all
router.get('/getAll', getAll)
// Get one
router.get('/getOne/:id', getOne)
// Create new todo
router.post('/create', createTodo)
// Delete a todo
router.delete('/delete/:id', deleteTodo)
// Update a todo
router.patch('/update/:id', updateTodo)
// Add multiple todos
router.post('/addMany', addTodos)

module.exports = router