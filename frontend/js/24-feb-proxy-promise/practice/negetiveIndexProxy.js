let arr = [1, 2, 3, 4, 5];

// console.log(arr[-1]);

const user = {
  name: "abir",
  age: 20,
  password: "123",
};

// example 1: set as nobody can't access password
const proxyUser = new Proxy(user, {
  get(target, prop) {
    if (prop === "password") return "Can't access password";
    return target[prop];
  },
  set(target, prop, user) {},
});
// console.log(proxyUser.password);

// example 2: enable negetive index using proxy
function negetiveIndex(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) return target[target.length + index];
      return target[prop];
    },
    set(target, prop, value) {
      const index = Number(prop);
      if (index < 0) {
        target[target.length + index] = value;
      }
      return true;
    },
  });
}

let newArr = negetiveIndex(arr);
console.log(newArr);
console.log(newArr[-1]);

console.log(arr.at(-1));

arr[-2] = 25;
console.log(arr[-2]);
