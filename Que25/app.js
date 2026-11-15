var express = require("express");
var app = express();

var usersRouter = require("./users");

app.use("/users", usersRouter);

app.get("/", function(req, res){
    res.send("Main home page, Try /users, /users/list or /users/profile/Varad");
});

app.listen(3000, function(){
    console.log("Server running at http://localhost:3000/")
});