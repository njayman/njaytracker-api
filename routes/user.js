//module inports
const express = require('express');
const router = express.Router();

//import models
const { tasks, steps } = require("../models/task")

router.get('/', (req, res) => {
    res.send('Router is working')
})

router.get('/tasks', async (req, res) => {
    try {
        const task = await tasks.find();
        res.send(task);
    } catch (e) {
        res.send(e.message);
    }
})

router.post('/addtasks', async (req, res) => {
    try {
        let message = "Success fully added task!"
        const task = new tasks(req.body);
        await task.save(err => {
            if (err) {
                res.send(err.message);
            } else {
                res.send(message)
            }
        })
    } catch (e) {
        res.send(e.message);
    }
})

router.delete('/deletetask/:id', async (req, res) => {
    try {
        await tasks.deleteOne({ _id: req.params.id }, (err) => {
            if (err) {
                res.send(err.message)
            } else {
                res.send("Successfully deleted task")
            }
        });
    } catch (e) {
        res.send(e.message);
    }
})

module.exports = router;