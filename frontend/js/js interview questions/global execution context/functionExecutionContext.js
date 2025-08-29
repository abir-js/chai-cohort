console.log("Global Execution Context Starts");

var globalVariable = "I am a global variable";

function globalFunction() {
  console.log("Inside global function");
}

console.log(globalVariable);
globalFunction();

console.log("Global Execution Context Ends");
