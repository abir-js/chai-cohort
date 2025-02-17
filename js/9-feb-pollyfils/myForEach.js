const arr = [1, 2, 3, 4, 5];

// Error - forEach doesnot exist
// Signtire - No retuen, function input, value and index as output
//calls my function for every value

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    const originalArr = this; // current object ke taraf point kara hai

    for (let i = 0; i < originalArr.length; i++) {
        userFn(originalArr[i], i)
    }
  };
}

// Real Signature - input, output, format

const result = arr.myForEach(function (value, index) {
  console.log(`Value at index ${index} is ${value}`);
});

console.log(result);

// Doesnot returns anything
