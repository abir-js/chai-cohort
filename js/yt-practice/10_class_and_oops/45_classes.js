// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPass = function(){
//     return `${this.password}abc`
// }

// User.prototype.upperUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const abir = new User('abir', 'abir@gmail.com', '123')
// console.log(abir);
// console.log(abir.encryptPass());
// console.log(abir.upperUsername());

// Traditional

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPass() {
    return `${this.password}abc`;
  }
  upperUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const abir = new User("abir", "abir@gmail.com", "123");
console.log(abir);
console.log(abir.encryptPass());
console.log(abir.upperUsername());
