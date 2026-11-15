var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Home page. Now open user/Rohan?city=Pune");
})

app.get("/user/:name", function(req, res){
    console.log("1. Method:", req.method);

    console.log("2. url:", req.url);

    console.log("3. params:", req.params);

    console.log("4. Query:", req.query);

    console.log("5. hostname:", req.hostname)

    console.log("4. Host name:" + req.get("host"));

    res.send("Hello "+ req.params.name + " from " + req.query.city);

});

app.listen(3000, function(){
    console.log("Server running at http://localhost:3000/");
});

