const arr = [1, 2, 3, 4, 5];

const n = arr.filter((n) => n > 3);
console.log(n);

/**
 * Signature
 *
 * => iterates through all elements
 * => input - userFn()
 * => returns new array
 * => agar userFn true hua to current value ko new array mai add kr deta hai
 */

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const data = userFn(this[i]);
      if (data) result.push(this[i]);
    }

    return result;
  };
}

const n2 = arr.myFilter((n) => n % 2 === 0);

console.log(n2);
