const user = {
  name: "abir",
  age: 40,
  password: "123",
};

const proxyUser = new Proxy(user, {
  get(target, prop) {
    console.log(target);
    console.log(prop);
    if (prop === "password") {
      throw new Error("Access denied");
    }
    return target[prop];
  },
  set(target, prop, user) {

  },
});

console.log(proxyUser.name);
console.log(proxyUser.password);
