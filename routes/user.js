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

router.post('/addtasks', (req, res) => {
    try {
        const task = new tasks(req.body);
        task.save()
        res.send('Success!')
    } catch (e) {
        res.send(e.message);
    }
})

module.exports = router;