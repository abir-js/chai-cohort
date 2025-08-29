// const user = {
//     userName: "Abir",
//     loginCount: 8,
//     getDetails: function() {
//         console.log(this);
//     }
// }

// console.log(user.userName);
// console.log(user.getDetails());


function user(userName, loginCount, isLoggedIn){
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function() {
        console.log("hello");
    }

    // return this
}

const obj1 = new user('abir', 10, true)
const obj2 = new user('hitesh', 10, false)
// console.log(obj1);
console.log(obj1.constructor);
// console.log(obj2);
// console.log(this);