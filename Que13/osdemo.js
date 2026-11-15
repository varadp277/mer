var os = require("os");

console.log("1. Plarform: "+os.platform());

console.log("2. arch:"+os.arch())

console.log("3. totalmem:" +os.totalmem() +"bytes");

console.log("4. freemon:" +os.freemem() +"bytes");

console.log("5. cpus:" +os.cpus().length +"cores");

console.log("Hostname:"+os.hostname());
console.log("Home directory" +os.homedir());
console.log("Uptime: " +os.uptime() +" seconds")