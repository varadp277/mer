var http = require("http");

http.createServer((req, res) =>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("<h1>Hello</h1>");
}).listen(8080);

console.log("Server running at http://localhost:8080/")