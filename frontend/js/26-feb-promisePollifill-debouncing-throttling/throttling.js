const ptaNhi = (fn, delay) => {
  let myId = null;
  return (...args) => {
    if (myId === null) {
      fn(...args);
      myId = setTimeout(() => {
        myId = null;
      }, delay * 1000);
    }
  };
};

function sayHello(fname) {
  console.log("Hello ", fname);
}

const newFn = ptaNhi(() => sayHello("Abir"), 3);
newFn()
newFn()