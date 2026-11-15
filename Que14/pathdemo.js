var path = require("path")

var filePath = "/home/user/docs/report.txt";

console.log("1. basename: " +path.basename(filePath));

console.log("2. dirname:" +path.dirname(filePath));

console.log("3. extname:" +path.extname(filePath));

console.log("4. join:" +path.join("home","user","docs","notes.txt"));

console.log("5. resolve:" +path.resolve("pathdemo.js"));

console.log("parse:", path.parse(filePath));