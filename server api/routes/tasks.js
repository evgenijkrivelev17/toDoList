var router = require('express').Router();
var Task = require('../models/task').model;
var TaskService = require('../services/taskSerrvice').TaskService;

router.get('/all', (req, res) => {
    TaskService.getAllTasks().then((resolve) => {
        res.jsonp(200, resolve);
    }).catch((error) => {
        res.jsonp(500, { Error: `${error}` });
    });
});

router.delete('/delete', (req, res) => {
    let Id = req.body.params.Id;
    if (Id != null) {
        TaskService.removeId(Id).then((_task) => {
            res.jsonp(200, _task);
        }).catch((error) => {
            res.jsonp(500, { name: `Some errors`, data: error });
        });
    }
});

router.post('/update', (req, res) => {
    let updateTask = req.body;
    TaskService.update(updateTask).then((resolve) => {
        res.jsonp(200, resolve);
    }).catch((error) => {
        res.jsonp(500, { name: `Some error`, data: error });
    });
});

router.post('/add', (req, res) => {
    let reqBody = req.body;
    TaskService.add(reqBody).then((result) => {
        if (result != null)
            res.jsonp(200, result);
    }, (error) => {
        res.jsonp(500, error);
    });
});

module.exports = router;