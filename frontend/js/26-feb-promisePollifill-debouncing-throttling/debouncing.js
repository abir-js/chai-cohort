function pataNhi(fn, delay) {
  // console.log(arguments);

  let myId;
  return function (...args) {
    clearTimeout(myId);
    myId = setTimeout(() => {
      fn.apply(this, args);
    }, delay * 1000);
  };
}

function greet(fname) {
  console.log("hello ", fname);
}

const returnedPtaNhi =  pataNhi(() => greet("abir"), 5);
returnedPtaNhi()
returnedPtaNhi()