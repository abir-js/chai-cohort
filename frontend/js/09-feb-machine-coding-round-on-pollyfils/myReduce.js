const arr = [1, 2, 3, 4, 5];

// Define myReduce function
// input  - callback function (userFn), optional initialValue
// process - applies reducer function on each element, accumulating result
// output  - single accumulated value

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (userFn, initialValue) {
    let accumulator, startIndex;

    if (initialValue !== undefined) {
      accumulator = initialValue;
      startIndex = 0; // Start iteration from index 0
    } else {
      accumulator = this[0];
      startIndex = 1; 
    }

    for (let i = startIndex; i < this.length; i++) {
      accumulator = userFn(accumulator, this[i], i, this);
    }
    return accumulator; 
  };
}

let val = arr.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
val = arr.myReduce((accumulator, currentVal) => accumulator + currentVal, 0);

console.log(val);
