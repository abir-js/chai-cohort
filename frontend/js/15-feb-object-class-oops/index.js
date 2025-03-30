const obj1 = {
    fname: "abir",
    lname: "bhattacharjee",
    getfullname: function() {
        return `${this.fname} ${this.lname}`
    }
}

const obj2 = {
    fname: "abir",
    lname: "bhattacharjee",
    getfullname: function() {
        return `${this.fname} ${this.lname}`
    }
}

console.log(obj1.getfullname());