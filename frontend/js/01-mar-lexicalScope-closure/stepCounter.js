function stepCounter(stepSize = 1, initialStep = 0) {
  return function () {
    initialStep = stepSize + initialStep;
    return initialStep;
  };
}

let step = stepCounter(10, 5);
console.log(step());
console.log(step());
console.log(step());
console.log(step());
