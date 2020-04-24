// ------- Imports -------//
var express = require("express");
var path = require('path');
var open = require('open');
var port = 3000;
///var baseUrl = 'http://localhost';
const bodyParser = require('body-parser');
const options = {
    inflate: true,
    limit: 1000,
    extended: true
};

//------- Create Express Application -------//
var app = express();

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded(options)

//------- Configuration -------//
app.use(jsonParser);
app.use(urlencodedParser);
// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
// })

//------- POST Functions -------//
app.post('/login', urlencodedParser, function (req, res) {
    res.send('welcome, ' + req.body.username)
})

app.post('/api/users', jsonParser, function (req, res) {
    res.send(req.body.username)
})

app.post("/postnewElement", function (req, res) {
    res.send(req.body);
});

//------- GET Functions -------//
// Home Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Average Calculation Page
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

// Start the web Server
app.listen(port, function (err) {
    app.emit('started');
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});