var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.send("User home pages");
});

router.get("/list", function(req, res){
    res.send("List of User: Varad, Rohan, Rohit");
});

router.get("/profile/:name", function(req, res){
    res.send("Profile of " + req.params.name);
});

module.exports = router;