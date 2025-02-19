// You need to implement the Counter constructor function and its prototype methods

function Counter(count) {
    // Initialize count property
    this.count = 0
}

Counter.prototype.increment = function() {
  this.count += 1
}
Counter.prototype.decrement = function() {
  this.count -= 1
}