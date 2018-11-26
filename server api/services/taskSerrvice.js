var Task = require('../models/task').model;

function taskService() {

    function addTask(_task) {
        let _newTask = new Task({
            Task: _task.Task,
            Description: _task.Description,
            IsDone: _task.IsDone
        });
        return new Promise((resolve, reject) => {
            _newTask.save().then((newTask) => {
                return resolve(newTask);
            }).cath((error) => {
                return reject(error);
            });
        });

    }

    function updateTask(_task) {
        return new Promise((resolve, reject) => {
            Task.findByIdAndUpdate(_task.Id, { _task }).then((result) => {
                return resolve(result);
            }).cath((error) => {
                return reject(error);
            });
        });
    }

    function deleteTask(_task) {
        return new Promise((resolve, reject) => {
            Task.findByIdAndDelete(_task.Id).then((document) => {
                if (document != null)
                    return resolve(document);
            }).catch((error) => {
                return reject(error);
            });
        });
    }

    function getAllTasks() {
        return new Promise((resolve, reject) => {
            Task.find({}).then((doc) => {
                if (doc.length == 0)
                    return reject(doc);
                else
                    return resolve(doc);
            }).cath((error) => {
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