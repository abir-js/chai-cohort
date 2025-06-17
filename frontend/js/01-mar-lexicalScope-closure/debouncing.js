function createDebounce(fn, delay) {
  let id;
  return function () {
    clearTimeout(id);
    id = setTimeout(() => {
      fn();
    }, delay * 1000);
  };
}

function createThrottling(fn, delay) {
  let id = null;
  return function () {
    if (id === null)
      id = setTimeout(() => {
        fn();
        id = null;
      }, delay * 1000);
  };
}
