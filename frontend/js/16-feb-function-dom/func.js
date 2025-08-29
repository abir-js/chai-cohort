Function.prototype.describe = function () {
  console.log(`Function name is ${this.name}`);
};

function greet(name) {
  return `Hello ${name}`;
}

// console.log(greet("Abir"))
// greet.describe()

greet("abir").describe;


// -----------------------------------------------
// First Class Function
function apppleOperation(a, b, operation) {
  return operation(a, b);
}

const result = apppleOperation(5, 4, (x, y) => x / y);



// -----------------------------------------------------

function createCounter() {
    let count = 0
    return function() {
        count++               // can access count
        return count
    }
}