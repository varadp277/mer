var fs = require("fs");

var data ="";

var readerStream = fs.createReadStream("input.txt");
readerStream.setEncoding("utf8");

readerStream.on( "data", function(chunck){
    data += chunck;
});

readerStream.on("end", function(){
    console.log("Data read from stream");
    console.log(data);
});

readerStream.on("error", function(err){
    console.log("Error", err.message);
});

console.log("Program Ended");