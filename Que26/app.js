var express = require("express");
var app = express();

app.use(function(req, res, next){
    console.log("Request received: " + req.method + " " + req.url);
    next();
});

app.use(express.json());

app.use("/admin", function(req, res, next){
    console.log("Admin area accessed");
    next();
})

app.get("/", function (req, res){
    res.send("Home page");
});

app.get("/admin", function(req, res){
    res.send("Admin page");
});

app.use(function(req, res){
    res.status(404).send("404: Page not found");
});

app.listen(3000, function(){
    console.log("Server runnig at http://localhost:3000/")
});