// Problem: Create an object representing a type of tea with properties for name, type and caffeine content.

const teas = {
    name: "Lemon Tea",
    type: "Green",
    caffeine: "low"
}

// Problem: Access and print the name and type properties of the tea object.

console.log(teas.name);
console.log(teas["type"]);

// Problem: Add a new property origin to the tea object.

teas.origin = "China"

// Problem: Change the caffeine level of the tea object to "medium".

teas.caffeine = "medium"

// Problem: Remove the type property from tea object.

delete teas.type
console.log(teas);

// Problem: Check if the tea object has a property origin.

console.log("origin" in teas);
console.log(teas.hasOwnProperty("origin"));

// Problem: Use a for...in loop to print all properties of the tea object.

for (const key in teas) {
    console.log(teas[key]);
}

// Problem: Create a nested object representing different types of teas and their propertiees.

const myTeas = {
    greenTea: {
        name: "Green Tea"
    },
    blackTea: {
        name: "Black Tea",
        origin:{
            origin: "China"
        }
    }
}

// Problem: Create a copy of the tea object.

const teaCopy = {
     ...myTeas
}
console.log(teaCopy);

// Problem: Add a custom method describe to the tea object that returns a description string.

myTeas.describe = function() {
    return "description"
}

// Problem: Merge two objects representing different teas into one.

const allTeas = {...teas, ...myTeas}