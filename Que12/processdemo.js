console.log("1. cwd:" +process.cwd());

console.log("2. uptime" + process.uptime() + "seconds");

console.log("3. memoryUsage:", process.memoryUsage());

process.nextTick(function(){
    console.log("4. nextTick: runs after the main code");
})

process.on("exit", function(code){
    console.log("5. exit: program ended with code" +code);
})

console.log("Platform:" +process.platform);
console.log("Node version:" +process.version);
console.log("Process id:" +process.pid);

console.log("End of main code");
