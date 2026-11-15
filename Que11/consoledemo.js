console.log("1. log: Hello Node.js");

console.error("2. error: Something went Wrong");

console.warn("3. warn: This is a warning");

console.table([
    {id:1, name:"varad"},
    {id:2, name:"Rohit"},
]);

console.time("loopTimer")
for(var i=0; i<1000000; i++){}
console.timeEnd("loopTimer");