const arr = [1, 2, 3, 4, 5];

if (!Array.prototype.myPush) {
  Array.prototype.myPush = function (...items) {
    // Use spread to capture all arguments as an array
    for (let i = 0; i < items.length; i++) {
      this[this.length] = items[i]; // Append each item
    }
    return this.length; // Return the new length
  };
}

console.log(arr.myPush(7, 8, 9)); //  8
console.log(arr); //  [1, 2, 3, 4, 5, 7, 8, 9]
