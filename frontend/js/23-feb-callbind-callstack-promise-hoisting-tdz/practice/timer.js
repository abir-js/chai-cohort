console.log("Hello from js");

const obj = {
  fname: "Mukul",
  greet: function () {
    console.log("Hello ",this.fname);
  },
};

// setTimeout(() => console.log("I am delayed"), 5000);

setTimeout(obj.greet.bind(obj), 2 * 1000);

console.log("Bye Bye");
