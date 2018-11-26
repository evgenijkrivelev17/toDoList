var router = require('express').Router();
var Task = require('../models/task').model;


router.get('/all', (req, res) => {
    Task.find({}).then((resolve) => {
        res.jsonp(200, resolve);
    }).catch((error) => {
        res.jsonp(500, { Error: `${error}` });
    });
});

router.delete('/delete', (req, res) => {
    let Id = req.body.params.Id;
    if (Id != null) {
        Task.findByIdAndRemove(Id).then((_task) => {
            res.jsonp(200, _task);
        }).catch((error) => {
            res.jsonp(500, { name: `Some errors`, data: error });
        });
    }
});

router.post('/update', (req, res) => {
    let updateTask = req.body;
    Task.findByIdAndUpdate(updateTask.Id, {
        Task: updateTask.Task,
        Description: updateTask.Description,
        IsDone: updateTask.IsDone,
    }).then((resolve) => {
        res.jsonp(200, resolve);
    }).catch((error) => {
        res.jsonp(500, { name: `Some error`, data: error });
    });
});

router.post('/add', (req, res) => {
    let reqBody = req.body;
    let newTask = new Task({
        Task: reqBody.Task,
        Description: reqBody.Description,
        IsDone: reqBody.IsDone
    });
    newTask.save().then((result) => {
        if (result != null)
            res.jsonp(200, result);
    }, (error) => {
        res.jsonp(500, error);
    });
});

module.exports = router;