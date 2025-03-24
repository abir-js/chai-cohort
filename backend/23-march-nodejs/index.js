const fs = require("fs");
const xyz = require('./math.js')

fs.writeFile("./test.txt", "hello world", () => {});

function __require(id){
    // agar id . se suru ho to dusre files main dhundo
    // agar normal ho to internal modules main dekho
        //agar nhi mila
            //node_modules main dekho

}

const {sum, sub} = require('./math.js')

console.log(sum(3, 5));

// console.log(math.add);
// console.log(math.sub);

// console.log(math.add(5, 3));
// console.log(math.sub(5, 3));