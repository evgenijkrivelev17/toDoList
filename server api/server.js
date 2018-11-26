var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var Promise = require('bluebird');
var app = express();
app.set("PORT", process.env.PORT || 4000);
app.set("URL", "localhost");

Promise.promisifyAll(mongoose);
mongoose.Promise = Promise;

mongoose.createConnection('mongodb://localhost:27017/testproject', { useNewUrlParser: true }).then((v) => {
    console.log(`Mongo db is working`);
}).catch((e) => {
    console.log(` Some error ${e}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.use('/tasks', require('./routes/tasks'));


app.use((req, res) => {
    res.status(404).send("Can't get this url");
});

app.use((err, req, res) => {
    res.status(err.status || 500);
    res.end(JSON.stringify({
        message: err.message,
        error: {}
    }));
});


app.listen(app.get('PORT'), 'localhost', function () {
    console.log(`Server is wroking`);
});