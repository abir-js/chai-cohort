class User{
    constructor(username){
        this.username = username
    }
    logMe() {
        console.log(`Username: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // call(this, username)
        this.email = email
        this.password = password

    }
    addCourse()  {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher('chai', 'chai@fb.com', '123')
console.log(chai);
chai.addCourse();