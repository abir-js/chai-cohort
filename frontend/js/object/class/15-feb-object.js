// - new keyword is used to create an instance of an object from a constructor function or class
// - new keyword in JavaScript allocates memory on the heap for the new object instance


const obj1 = {
  fname: "abir",
  lname: "bhattacarjee",
  getFullName: function() {
    return `${this.fname} ${this.lname}`
  }
};

const obj2 = {
  fname: "piyush",
  lname: "garg",
};

console.log(obj1.getFullName());
console.log(obj2);
