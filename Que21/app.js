var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send(
        "<h2> Response object demo </h2>" +
        "<a href='/send'>1. res.send </a><br>" +
        "<a href='/json'>2. res.json</a><br>" +
        "<a href='/status'>3. res.status</a><br>" +
        "<a href='redirect'>4. res.redirect</a><br>" +
        "<a href= '/set'> 5. res.set </a>"
    );
});

app.get("/send", function(req, res){
    res.send("<h1> Hello from res.send </h1>");
});

app.get("/json", function(req, res){
    res.json({name: "Varad", city:"Kolhapur"});
});

app.get("/status", function(req, res){
    res.status(404).send("Custon 404: Page not found");
});

app.get("/redirect", function(req, res){
    res.redirect("/send");
});

app.get("/set", function(req, res){
    res.set("X-Custom-Header","Hello");
    res.send("A custom header was set. Check it in Chrome Devtools, Network tabs");
});

app.listen(3000, function(){
    console.log("Server running at http://localhost:3000/");
})