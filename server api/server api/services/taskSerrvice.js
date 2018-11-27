let Model = require('../models/task').model;

function taskService() {

    function addTask(_task) {
        var newTask = new Model({
            Task: _task.Task,
            Description: _task.Description,
            IsDone: _task.IsDone
        });
        return new Promise((resolve, reject) => {
            newTask.save().then((e) => {
                return resolve(e);
            }).catch((error) => {
                return reject(error);
            });
        });

    }

    function updateTask(_task) {
        return new Promise((resolve, reject) => {
            Model.findByIdAndUpdate(_task.Id,
                {
                    Task: _task.Task,
                    Description: _task.Description,
                    IsDone: _task.IsDone
                }, { new: true }).then((result) => {
                    return resolve(result);
                }).catch((error) => {
                    return reject(error);
                });
        });
    }

    function deleteTask(_task) {
        return new Promise((resolve, reject) => {
            Model.findByIdAndDelete(_task.Id).then((document) => {
                if (document != null)
                    return resolve(document);
            }).catch((error) => {
                return reject(error);
            });
        });
    }

    function getAllTasks() {
        return new Promise((resolve, reject) => {
            Model.find({}).then((doc) => {
                if (doc.length == 0)
                    return reject(doc);
                else {
                    return resolve(doc);
                }
            }).catch((error) => {
                return reject(error);
            });
        });
    }

    return {
        add: addTask,
        removeId: deleteTask,
        update: updateTask,
        getAllTasks: getAllTasks
    }
}

module.exports.TaskService = taskService();