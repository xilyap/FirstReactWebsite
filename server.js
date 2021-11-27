const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
const internal = require('stream');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database.db');
var articles = {};

const app = express();
const port = process.env.PORT || 8080;

let sql = 'SELECT Id, Title,Contents FROM Articles';

// sendFile will go here
app.use(express.json())

app.use('/content/articles', function (req, res, next) {
    console.log('Request Type:', req.method);
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        console.log(rows);
        //rows.forEach((row) => {
        //  console.log(row.Id+' '+row.Title+' '+row.Contents);
        //});
        res.send(rows)
      });
  });


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});
app.get('/logo192.png', function (req, res) {
    res.sendFile(path.join(__dirname, 'build/logo192.png'));
});
app.get('/favicon.ico', function (req, res) {
    res.sendFile(path.join(__dirname, 'build/favicon.ico'));
});
app.use(express.static(__dirname + '/build'));


app.listen(port);
console.log('Server started at http://localhost:' + port);