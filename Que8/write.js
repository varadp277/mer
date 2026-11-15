var fs = require("fs");

fs.writeFile("output.txt","Hello, this is written by Node.js", function(err){

    if(err){
        console.log("Error:",err.message);
        return;
    }
    console.log("File written Successfully");

    fs.appendFile("output.txt","\nThis line is appended.",function(err){
        if(err){
            console.log("Error:", err.message);
            return;
        }
        console.log("Text appended Successfully");

        fs.readFile("output.txt","utf8", function(err, data){
            console.log("File contents:\n" +data);
        });
    });
});