var net = require("net");

console.log("1. isIP:" +net.isIP("192.168.1.1"));

console.log("2. isIPv4:" +net.isIPv4("192.168.1.1"));

console.log("3. isIPv6:" +net.isIPv6("::1"));

var server = net.createServer( function(socket){
    console.log("Server: Client Connected");
    socket.write("Hello from server")

    socket.on("data", function(data) {
        console.log("data received:" +data.toString());
        socket.end();
    });
});

server.listen(8000, function(){
    console.log("4. createServer: server listening on port 8000");

    var client = net.createConnection({port:8000}, function(){
        console.log("5. createConnection: client connected to the server");
        client.write("Hello from client");
    });

    client.on("data", function(data){
        console.log("Client Received:" +data.toString());
    });

    client.on("end", function(){
        console.log("Client: disconnected");
        server.close();
    });
});