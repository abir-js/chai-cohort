const arr = [1, 2, 3, 4, 5];

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (userFn, initialValue = undefined) {
    if (!initialValue) {
      let acc = this[0];
      for (let i = 1; i < this.length; i++) {
        acc = userFn(acc, this[i]);
      }
      return acc;
    } else {
      acc = initialValue;
      for (let i = 0; i < this.length; i++) {
        acc = userFn(acc, this[i]);
      }
      return acc;
    }
  };
}

console.log(arr.myReduce((acc, curr) => acc + curr, 5));
