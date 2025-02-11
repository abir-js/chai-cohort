// Problem : Create an array containing different types of teas
const teas = [
  "Green Tea",
  "Black Tea",
  "Oolong Tea",
  "White Tea",
  "Herbal Tea",
];

// Problem : Add "Chamolie Tea" to the existing teas
teas.push("Chamolie Tea");

// Problem : Remove "Oolong Tea" from the list of teas
let index = teas.indexOf("Oolong Tea");
if (index > -1) teas.splice(index, 1);

// Problem : Filter the list to only include teas that are caffeinated.
const caffeinatedTeas = teas.filter((tea) => tea != "Herbal Tea");
// console.log(caffeinatedTeas);

// Problem : Sort the teas in alphabatical order
// console.log(teas.toSorted());

// Use for loop to print each type of teas in array
for (let i = 0; i < teas.length; i++) {
//   console.log(teas[i]);
}

// Problem : Count how many teas are caffeineated (exclude "Herbal Tea")
let caffeinatedMyTeas = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] != "Herbal Tea") {
    caffeinatedMyTeas++;
  }
}

// Problem : Use a for loop to create a new array with all tea names in uppercases.
const teaUppercase = []
for (let i = 0; i < teas.length; i++) {
    // teaUppercase[i] = teas[i].toUpperCase()
    teaUppercase.push(teas[i].toUpperCase())
}
// console.log(teaUppercase);

// Problem : Find tea name with most characters
let longestTea = ""
for (let i = 0; i < teas.length; i++) {
    if(teas[i].length > longestTea.length){
        longestTea = teas[i]
    }
}
// console.log(longestTea);


// Problem: For loop to reverse teas
for (let i = teas.length-1; i >= 0; i--) {
    console.log(teas[i]);
}