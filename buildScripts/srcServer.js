var express = require("express");
var path = require('path');
var open = require('open');
var port = 3000;
///var baseUrl = 'http://localhost';

var app = express();

// HOME Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Average Calculation
app.get("/average", function (req, res) {
    var grades = req.query.grades.split(",");
    if (grades.length == 0) {
        res.send("Add numbers in the query parameters")
    } else {
        book.reset();
        for (var i = 0; i < grades.length; i++) {
            book.addGrade(parseInt(grades[i]));;
        }
        res.send("Average is " + book.getAverage());
    }
});

// start the web server
app.listen(port, function (err) {
    app.emit('started');
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});