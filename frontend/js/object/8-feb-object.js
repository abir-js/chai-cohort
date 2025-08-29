const person = {
  x: 10,
  firstName: "Abir",
  lastName: "Bhattacharjee",
  hobbies: ["coding", "anime"],
  isMarried: false,
  hasGf: false,
  hasCrush: Infinity,
  getFullName: function() {
    return "Abir Bhattacharjee"
  },
  address: {
    houseNo: 1,
    countryCode: "IN",
    state: "WB"
  }
};

console.log(person.address.state);
