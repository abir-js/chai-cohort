const arr = [1, 2, 3, 4, 5];

// Signature
// input - searchElement, fromIndex
// Functionality: Searches for `searchElement` in the given array.
// - If found, returns the index of the first occurrence.
// - If not found, returns -1.
// - If `startIndex` is negative:
//      - Convert it to `array.length + startIndex`.
//      - Example: If `arr.length = 4` and `startIndex = -10`, then sum = -6.
//      - If sum < 0, start searching from index 0.
//      - Otherwise, start searching from the calculated sum index.
// - If `startIndex >= 0`, start searching from `startIndex` directly.
if (!Array.prototype.myIndexOf) {
    Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
      let len = this.length;
      if (len === 0) return -1; // If array is empty, return -1 (element not found)
  
      let k;
      if (fromIndex < 0) {
        k = len + fromIndex;
        if (k < 0) k = 0; 
      } else {
        k = fromIndex;
      }

      while (k < len) {
        if (this[k] === searchElement) {
          return k; 
        }
        k++; 
      }
      return -1; 
    };
  }
  

console.log(arr.indexOf(2));
