const express = require('express')
const {getAll, getOne, addTodos} = require('../controllers/todoController')
const router = express.Router()

// Get all
router.get('/getAll', getAll)
// Get one
router.get('/getOne/:id', getOne)
// Create new todo
router.post('/create')
// Delete a todo
router.delete('/delete/:id')
// Update a todo
router.patch('update/:id')
// Add multiple todos
router.post('/addMany', addTodos)

module.exports = router