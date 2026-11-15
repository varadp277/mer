var express = require("express");
var app = express();

app.use(express.json());

var users = [
    {id: 101 , name:"Varad"},
    {id: 102, name:"Rohan"}
];

app.get("/users", function(req, res){
    res.json(users);
});

app.get("/", function(req, res){
    res.send(`
        <h2> PUT Demo </h2>
        User ID: <input id="id" value="101"> <br> <br>
        New name: <input id="name"> <br> <br>
        <button onclick="update()">Update (PUT) </button>
        <p id="result"></p>
        <script>
        function update(){
        var id = document.getElementById("id").value;
        var name= document.getElementById("name").value;
        fetch("/user/" + id, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: name})
        })
        .then( function(r) {return r.text(); })
        .then( function(t) {document.getElementById("result").innerText = t;});
        }
        </script>
        `);
});

app.put("/user/:id", function(req, res){
    var user = users.find(function (u){
        return u.id == req.params.id;
    });

    if(!user){
        return res.status(404).send("User not found");
    }

    user.name = req.body.name;
    console.log("Updated data:", users);
    res.send("User " + user.id + " updated to "+ user.name);
});

app.listen( 3000, function(){
    console.log("Server running at http://localhost:3000/")
});