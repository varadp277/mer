var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Welcome! This response came from a GET request.");
});

app.get("/square", function(req, res){
    var num = Number(req.query.num);
    res.send("Square of " + num + " is " + num * num);
});

app.get("/greet/:name", function(req, res){
    res.send("Hello " + req.params.name + ", this is a GET request.");
});

app.listen(3000, function(){
    console.log("Server running at http://localhost:3000/");
    console.log("Try:  http://localhost:3000/greet/Varad");
    console.log("Try:  http://localhost:3000/square?num=5");
});