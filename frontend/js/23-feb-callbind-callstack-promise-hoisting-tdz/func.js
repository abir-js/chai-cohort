function greet(name) {
    console.log(`Hello ${name}`);
}
greet("abir")

let globalVar = "I am global variable"

function modifyGlobal() {
    globalVar = "I am modified"
    let localVar = "I am local Var"
    console.log(localVar);
}
modifyGlobal()

console.log(globalVar);


// -----------------------------------------------------
// call apply bind
const person1 = {
    fname: "Abir",
    greet: function(){
        console.log(`hello ${this.fname}`);
    }
}

const person2 = {
    fname: "Ram"
}

person1.greet.call(person2)
const greetFn = person1.greet.bind(person2)
greetFn()
