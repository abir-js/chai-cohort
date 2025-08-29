class Person {
  constructor(fname, lname) {
    this.fname = fname
    this.lname = lname
  }

  getFullName() {
    return `${this.fname} ${this.lname}`
  }
}

const p1 = new Person("Abir", "Bhattacharjee")
const p2 = new Person("piyush", "garg")

console.log(p1.getFullName());
console.log(p2.getFullName());


class a {
    constructor(parameters) {

    }
}

class b {
    constructor(parameters) {
        
    }
}

// class c extends a extends b {
//     constructor(parameters) {
        
//     }
// }