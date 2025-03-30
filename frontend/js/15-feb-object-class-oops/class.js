class Person {
    constructor(fname, lname) {
        this.pehlaName = fname
        this.lastName = lname
    }
    getFullName() {
        return `${this.pehlaName} ${this.lastName}`
    }
}

const p1 = new Person('piyush', 'garg')
const p2 = new Person('akash', 'kadlag')

console.log(p1.getFullName());
console.log(p2.getFullName());