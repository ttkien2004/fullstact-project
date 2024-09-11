const todoModel = require('../models/todoModel');
const mongoose = require('mongoose');
// Get All todos
const getAll = async (req, res) => {
    try {
        const todoLists = await todoModel.find({}).sort({createdAt: -1})

        if (todoLists) {
            res.status(200).json({todoLists})
        }
    }catch {
        res.status(400).json({msg: 'Can not find todo-lists'})
    }
}
// Get one todo
const getOne = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.statusTypes.ObjectId.isValid(id)) {
        res.status(404).json({msg: `${id} is not valid`})
    }
    try {
        const todo = await todoModel.findById(id);

        res.status(200).json({todo})
    }catch {
        res.status(400).json({msg: `${_id} is not existed`})
    }
}
// Create a todo
// Update a todo
// Delete a todo
// Add todo lists
const addTodos = async (req, res) => {
    const docs = [
      {
        title: "Call Sam For payments",
        author: "Bob",
        status: { statusType: "DONE", color: "#28a745" },
      },
      {
        title: "Make payment to Bluedart",
        author: "Johnny",
        status: { statusType: "ON_PROGRESS", color: "#007bff" },
      },
      {
        title: "Office rent",
        author: "Samino",
        status: { statusType: "OUT_DATED", color: "#ffc107" },
      },
      {
        title: "Office grocery",
        author: "Tida",
        status: { statusType: "DONE", color: "#28a745" },
      },
      {
        title: "Ask for Lunch to Clients",
        author: "Office Admin",
        status: { statusType: "DONE", color: "#28a745" },
      },
      {
        title: "Client Meeting at 11 AM",
        author: "CEO",
        status: { statusType: "ON_PROGRESS", color: "#007bff" },
      },
      {
        title: "Client Meeting at 11 AM",
        author: "CEO",
        status: { statusType: "OUT_DATED", color: "#ffc107" },
      },
      {
        title: "Client Meeting at 11 AM",
        author: "CEO",
        status: { statusType: "ON_PROGRESS", color: "#007bff" },
      },
    ]
    try {
        const result = await todoModel.insertMany(docs, {ordered: true})

        res.status(200).json({result, msg: "Adding successfully"})
    }catch {
        res.status(400).json({msg: "Adding unsuccessfully!"})
    }
}

module.exports = {
    getAll,
    getOne,
    addTodos
}