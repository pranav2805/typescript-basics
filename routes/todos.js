"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'New todo added', todo: newTodo, todos: todos });
});
router.put('/todo/:id', (req, res, next) => {
    const tid = req.params.id;
    const index = todos.findIndex(todoItem => todoItem.id === tid);
    if (index >= 0) {
        todos[index] = { id: todos[index].id, text: req.body.text };
        return res.status(201).json({ message: 'Todo has been updated!', todos: todos });
    }
    return res.status(404).json({ message: 'Todo item not found!!' });
});
router.post('/deleteTodo', (req, res, next) => {
    const tid = req.body.id;
    todos = todos.filter(todoItem => todoItem.id !== tid);
    res.status(200).json({ message: 'Todo deleted!!', todo: todos });
});
exports.default = router;
