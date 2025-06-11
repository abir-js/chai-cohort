// console.log("Hello");

// setTimeout(() => {
//     console.log("timeout");
// }, 0);

console.log("hi");


const person1 = {
    fname: "Abir",
    greet: function() {
        console.log(`Hello ${this.fname}`);
    }
}

// person1.greet()

setTimeout(person1.greet.bind(person1), 2 * 1000);