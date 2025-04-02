const fs = require("fs");

console.log("hello");

setImmediate(() => console.log("Set Timeout"), 0);
setImmediate(() => console.log("Set Immediate"));

fs.readFile("sample.txt", "utf-8", function (err, data) {
  setTimeout(() => console.log("Timeout inside fs"), 0);
  setImmediate(() => console.log("Immediate inside fs"));
});

console.log("bye");
