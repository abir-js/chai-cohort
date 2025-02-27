let chaiTypes = ["masala chai", "ginger chai", "green tea", "lemon tea"];

// Total Count
console.log(chaiTypes.length);

//Push
console.log(chaiTypes.push("hetbal tea"));
// POP
console.log(chaiTypes.pop());

// Find and remove an element from array
// Find index of a element
let index = chaiTypes.indexOf("green tea");
if (index !== -1) chaiTypes.splice(index, 1);
console.log(chaiTypes);

// Loop over arrays
chaiTypes.forEach((chai, index) => {
  console.log(`${index + 1} : ${chai}`);
});

//----------------------------------------------------------------
// add two arrays
const moreChaiTypes = ["oolong tea", "white tea"];

// let allChaiTypes = chaiTypes.concat(moreChaiTypes)
let allChaiTypes = [...chaiTypes, ...moreChaiTypes];
console.log(allChaiTypes);

// -----------------------------------------------------------------------------
//                      Objects

const chaiRecepie = {
  name: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "Full cream milk",
    sugar: "Brown Sugar",
    spices: ["DaalChini", "Ginger"],
  },
  instructions: "Boil water",
};

let updatedChaiRecepie = {
  ...chaiRecepie,
  instructions: "boil water, add tea leaves",
};


let {name, ingredients} = chaiRecepie // Object destructuring 
let [firstChai, secondChai] = chaiTypes // Array destructuring

console.log(secondChai);