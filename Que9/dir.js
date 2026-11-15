var fs = require("fs");

fs.readdir(".",function(err, files){
    if(err){
        console.log("Error:",err.message);
        return;
    }
    console.log("File in directory (async):");
    files.forEach(function (file){
        console.log(file);
    });
});

var list = fs.readdirSync(".");
console.log("File in directory (sync):", list);