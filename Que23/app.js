var express = require("express");
var app = express();

app.use(express.urlencoded({ extended:true}));

app.get("/", function(req,res){
    res.send(
        "<h2>POST Demo</h2>"+
        "<form method='POST' action='/submit'>"+
        "Name: <input type='text' name='name'><br><br>" +
        "City: <input type='text' name='city'><br><br>" +
        "<button type= 'submit'> Submit </button> " +
        "</form>"
    );
});

app.post("/submit", function(req, res){
    console.log("Received data:", req.body);
    res.send("Hello " + req.body.name + " from " + req.body.city + " (POST request)");
});

app.listen(3000, function(){
    console.log("Server running at http://localhost:3000/");
})