const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((item) => item * 2);
console.log(newArr);

/**
 * iterates through all elements
 * performs user function
 * returns new array
 */

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const value = userFn(this[i], i);
      result.push(value);
    }

    return result;
  };
}

const newArr2 = arr.myMap((item) => item * 3);
console.log(newArr2);
