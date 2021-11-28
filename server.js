const express = require('express');
const path = require('path');
//var sqlite3 = require('sqlite3').verbose();

const DB = require('better-sqlite3-helper');
DB({
    path: './database.db', // this is the default
  })


function checkUserCredentials(username,password,goodRes){
    var request = 'SELECT Id, Username,Password FROM Users WHERE Username = \"'+username+'\" AND Password = \"'+password+'\"';
    console.log(request);
    var rows = DB().query('SELECT Id, Username,Password FROM Users WHERE Username=? AND Password =?',username,password);
     if(rows.length != 0){
            goodRes()
    }
        
      
}


var articles = {};

const app = express();
const port = process.env.PORT || 8080;

let sql = 'SELECT Id, Title,Contents FROM Articles';



// sendFile will go here
app.use(express.json())

app.use('/content/articles', function (req, res, next) {
    console.log('Request Type:', req.method);
    rows = DB().query(sql);
    res.send(rows.reverse())  
  });
  app.use('/auth', function (req, res, next) {
    function goodResAction(){
        res.send(req.body)
    };
    console.log('Auth Request Type:', req.method);
    console.log('Auth Request Body:', req.body);
    checkUserCredentials(req.body.name,req.body.pass,goodResAction);
  });


  
  app.use('/delete-article', function (req, res, next) {
    function goodResAction(){
        //console.log(insertRequest);
        DB().delete('Articles', {Id: req.body.articleId})
        res.send(req.body)         
    };
    console.log('Auth Request Type:', req.method);
    console.log('Auth Request Body:', req.body);
    checkUserCredentials(req.body.name,req.body.pass,goodResAction);
  });
  app.use('/post-article', function (req, res, next) {
    function goodResAction(){
        //console.log(insertRequest);
        DB().insert('Articles',{Title:req.body.title,Contents:req.body.article})
        res.sendStatus(500)         
    };
    console.log('Auth Request Type:', req.method);
    console.log('Auth Request Body:', req.body);
    checkUserCredentials(req.body.name,req.body.pass,goodResAction);
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