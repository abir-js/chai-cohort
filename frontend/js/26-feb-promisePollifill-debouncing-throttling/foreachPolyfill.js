const arr = [1, 2, 3, 4, 5];

arr.forEach((item) => console.log(item));

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    for (let i = 0; i < this.length; i++) {
      userFn(this[i], i);
    }
  };
}

arr.myForEach((item) => console.log(item));
