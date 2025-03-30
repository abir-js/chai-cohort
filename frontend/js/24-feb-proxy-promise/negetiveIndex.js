function negetiveIndex(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) {
        return target[arr.length + index];
      }
      return target[index];
    },
    set(target, prop, value) {
      const index = Number(prop);
      if (index < 0) {
        target[target.length + index] = value;
      } else {
        target[index] = value;
      }
      return true;
    },
  });
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const proxyarr = negetiveIndex(arr);

console.log(arr[-1]);
console.log(proxyarr[-1]);
proxyarr[-1] = 20;
console.log(arr);
console.log(proxyarr);
