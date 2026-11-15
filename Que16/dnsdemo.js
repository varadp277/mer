var dns = require("dns");

dns.lookup("google.com", function(err, address, family){
    if(err){
        console.log("Lookup error:", err.message);
    }
    console.log("1. lookup:" + address +"(IPv" + family +")" );
});

dns.resolve4("google.com", function(err, addresses){
    if (err){
        console.log("resolve4 error:", err.message);
        return;
    }
    console.log("2. resolve4:", addresses);
})

dns.reverse("8.8.8.8", function(err, hostnames){
    if(err){
        console.log("reverse errot:", err.message);
        return;
    }
    console.log("3. reverse:", hostnames);
})