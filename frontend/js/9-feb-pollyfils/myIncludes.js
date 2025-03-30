const arr = [1, 2, 3, 4, 5];

// Signature
// input - search element, startIndex(index from where searching should start)
// Functionality: Searches for `searchElement` in the given array.
// - If found, returns true.
// - If not found, returns false.
// - If `startIndex` is negative:
//      - Convert it to `array.length + startIndex`.
//      - Example: If `arr.length = 4` and `startIndex = -10`, then sum = -6.
//      - If sum < 0, start searching from index 0.
//      - Otherwise, start searching from the calculated sum index.
// - If `startIndex >= 0`, start searching from `startIndex` directly.

if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement, fromIndex = 0) {
    let len = this.length;
    if (len === 0) return false; // If array is empty, return false

    let k;
    if (fromIndex < 0) {
      k = Math.max(len + fromIndex, 0); // Ensure index is not negative
    } else {
      k = fromIndex;
    }
    // 5. Iterate through the array
    while (k < len) {
      if (this[k] === searchElement) {
        return true;
      }
      k++; // Move to next index
    }
    return false; // Element not found
  };
}

console.log(arr.includes(2));
