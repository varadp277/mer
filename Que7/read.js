var fs = require("fs");

fs.readFile("input.txt","utf8", function(err,data){
    if(err){
        console.log("Err:", err.message);
        return;
    }
    console.log("Asynce read:" +data);
});

var data = fs.readFileSync("input.txt","utf8");
console.log("Sync read:" +data);

console.log("Program Ended")