const person1 = {
  fname: "Abir",
  greet: function () {
    console.log(`hello ${this.fname}`);
  },
};

const person2 = {
  fname: "Ram",
};

/**
 * call => context changing
 * bing => also context changing, but returns function
 */
person1.greet.call(person2);
person1.greet.call({fname: "Shyam"});

const greetFn = person1.greet.bind(person2);
greetFn();
