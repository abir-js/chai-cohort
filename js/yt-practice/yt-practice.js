// singleton - made by constructor
// Object.create

// object literals

const mySym = Symbol("key1");

const user = {
  name: "Abir",
  age: 18,
  [mySym]: "mykey1",
  email: "user@google.com",
  isLoggedIn: false,
  loginHistory: ["Friday", "Monday"],
};

// console.log(user.name);
// console.log(user["name"]);
// console.log(typeof user[mySym]);

// Object.freeze(user)

user.greetings = function () {
  console.log("Hello there");
};

user.greetingsTwo = function () {
  console.log(`Hello there ${this.name}`);
};

// console.log(user.greetings);
// console.log(user.greetings());
// console.log("-----------------");
// console.log(user.greetingsTwo);
// console.log(user.greetingsTwo());



const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

console.log(tinderUser);



const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Abir",
            lastName: "Bhattacharjee"
        }
    }
}
 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));


// ---------------------------------------------------------------------

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseIntructor: "hitesh"
}

const {courseIntructor: instructor} = course
// console.log(courseIntructor);
console.log(instructor);