var fs = require("fs");

fs.writeFile("demo.txt", "Hello Node.js", function(err){
    if (err) throw err;
    console.log("1. writeFile: File Created");

    fs.readFile("demo.txt", "utf8", function(err, data) {
        if (err) throw err;
        console.log("2. readFile:" +data);

        fs.appendFile("demo.txt", "- appended text", function(err){
            if (err) throw err;
            console.log("3. appendFile: text appended");

            fs.rename("demo.txt","newdemo.txt", function(err){
                if (err) throw err;
                console.log("4. rename: demo.txt -> newdemo.txt");

                fs.unlink("newdemo.txt", function(err){
                    if (err) throw err;
                    console.log("5. unlink: newdemo.txt deleted");
                });
            });
        });
    });
});