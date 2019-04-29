var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors =require('cors');
app.use(bodyParser.urlencoded({extended:false}));
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs"
  });

  //순수 자바스크립트 &ajax
  app.get('/api/get',cors(),function(req,res) {
    con.connect((err)=>{
        if (err){
            console.log('request err!')
        }
        console.log("Connected!");
        var sql = "select name from member where id=1";
        con.query(sql, function (err, result) {
            if (err){
                console.log('request err!')
            }
          res.send(result[0].name);
        }); 
    })
});



app.post('/api/post', cors(),function(req, res){
    con.connect((err)=>{
        if (err){
            console.log('request err!')
        }
        console.log("Connected!");
        var sql = "select name from member where id=1";
        con.query(sql, function (err, result) {
            if (err){
                console.log('request err!')
            }
          res.send(result[0].name);
        }); 
    })
});

//  query &ajax
//AJAX GET METHOD
/*
app.get('/api/get',cors(),function(req,res) {
    var data = req.query.data;
    console.log('GET Parameter = ' + data);
    con.connect((err)=>{
        if (err){
            console.log('request err!')
        }
        console.log("Connected!");
        console.log(data);
        var id ={'id': req.query.data};
        console.log(id);
        var sql = "select name from member where id=?";
        con.query(sql, id, function (err, result) {
            if (err){
                console.log('request err!')
            }
            console.log(result[0].name);
          res.send({result:result[0].name});
        }); 
    })
});


//AJAX POST METHOD
app.post('/api/post', cors(),function(req, res){
  var data = req.body.data;
    console.log('POST Parameter = ' + data);
    con.connect((err)=>{
        if (err){
            console.log('request err!')
        }
        console.log("Connected!");
        var id ={'id': req.body.data};
        var sql = "select name from member where id=?";
        con.query(sql, id, function (err, result) {
            if (err){
                console.log('request err!')
            }
            console.log(result[0].name);
          res.send({result:result[0].name});
        }); 
    })
});
*/



app.listen(4300, function(){
    console.log('connected 4300 port');
});
