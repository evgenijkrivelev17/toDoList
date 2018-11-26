var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    Id: mongoose.Schema.ObjectId,
    Task: {
        type: String,
        require: true,
    },
    Description: {
        type: String
    },
    IsDone: {
        type: Boolean,
        default: false
    },
    TimeDone: {
        type: Date,
        default: Date.now
    }
});


module.exports.model = mongoose.model('task', TaskSchema);
