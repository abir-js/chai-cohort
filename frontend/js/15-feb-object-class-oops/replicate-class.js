// const obj = {
//   getFullname: function () {
//     console.log("hello");
//   },
// };

// const p1 = {};

// p1.__proto__ = obj;

// p1.getFullname();



class A {
    funcA() { console.log('a'); }
}

class B {
    funcB() { console.log('b'); }
}

const p = new B()

p.__proto__ = A.prototype

p.funcA()
p.funcB()