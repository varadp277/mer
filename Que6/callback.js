function greet(name, callback){
    console.log("Hello " +name)
    callback();
}

function done(){
    console.log("Callback function executed")
}

greet("Varad",done);

console.log("Start");

setTimeout( function () {
    console.log("Callback after 2 seconds");
},2000);

console.log("End");