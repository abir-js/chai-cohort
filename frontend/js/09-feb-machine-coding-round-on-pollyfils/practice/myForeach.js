const arr = [1, 2, 3, 4, 5];

// regular forEach
arr.forEach((index, currEle) => {
  console.log(`forEach: ${currEle} on index ${index}`);
});

//
/**
 * forEach pollyfil
 *
 *  key points
 *
 * => iterates through array
 * => takes user function with (arr[i], i) parameter
 * => doesnot changes original object
 * => returns undefined
 */

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    for (let i = 0; i < this.length; i++) {
      userFn(this[i], i);
    }
  };
}

arr.myForEach((index, currEle) => {
  console.log(`myForEach: ${currEle} on index ${index}`);
});
