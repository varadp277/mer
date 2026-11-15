var fs = require ("fs")

var data = "Node.js streams write data in chuncks."

var writerStream = fs.createWriteStream("output.txt");

writerStream.write(data, "utf8");
writerStream.write("\nThis is the second line.","utf8");

writerStream.end();

writerStream.on("finish", function(){
    console.log("Write Completed");
})

writerStream.on("errot", function(){
    console.log("Error:", err.message);
})

console.log("Program Ended")