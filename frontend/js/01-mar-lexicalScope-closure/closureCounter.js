function createCounter() {
  let count = 10;

  // Closure - Function binded by its lexical scope
  return function () {
    count++;
    return count;
  };
}

let f  = createCounter()
console.log(f());
console.log(f());
console.log(f());
let g  = createCounter()
console.log(g());
console.log(g());
console.log(g());