function negetiveIndex(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) {
        return target[target.length + index];
      } else {
        return target[index];
      }
    },
    set(target, prop, value) {
      const index = Number(prop);
      if (index < 0) {
        target[target.length + index] = value
      } else {
        target[index] = value
      }
      return true
    },
  });
}

const arr = [1, 2, 3, 4, 5];

const newArr = negetiveIndex(arr);

console.log(newArr[-1]);

newArr[-1] = 20
console.log(arr);
console.log(newArr);