// function add(x, y) {
//   return x + y;
// }

// exports.sub = function (x, y) {
//   return x - y;
// };
// exports.add = add;

// exports.add = (x, y)=> {
//   return x + y;
// }

// exports.sub = function (x, y) {
//   return x - y;
// };

// // default export
// module.exports = function() {
//     console.log('this is default export');

// }

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

module.exports = { sum, sub };
