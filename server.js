var express = require('express');
var cons = require('consolidate');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

var Task = require('./class/task');

app.engine('html', cons.pug);
app.set('view engine', 'html');
app.set('views', __dirname + '/views')


app.get('/', function (req, res) {
    res.render("index", {
        "name": "pug"
    });
});

app.get('/tasks', function (req, res) {
    // app.db.collection('task').findOne({}, function (err, doc) {
    //     res.render("index", {
    //         "task_array":doc
    //         //"name":doc.name
    //     });
    //     //console.log(doc);
    // });

    var query = { "name": '2em tache' };

    app.db.collection('task').find(query).toArray(function(err, task){
        console.log(task);
    });

    // var test = app.db.collection('task').find(query);
    // console.log(test);
});

app.get('*', function (req, res) {
    res.send("Page not found", 404);
});

MongoClient.connect('mongodb://localhost:27017/tp_tasks', function (err, db) {
    app.db = db;
    app.listen(8000);
    console.log("Express server started on 8000");
});

//app.listen(8000);