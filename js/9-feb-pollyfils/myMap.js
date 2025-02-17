const arr = [1, 2, 3, 4, 5];


// Define Map function
// input - function
// Each element iteration
// returns - new array

if(!Array.prototype.myMap) {
    Array.prototype.myMap = function (userFn) {
        const result = []

        for(let i = 0; i<this.length; i++) {
            const value = userFn(this[i], i)
            console.log(value)
            result.push(value)
        }

        return result
    }
}


const n = arr.map(n => n*2)
console.log(n);

const n2 = arr.myMap(n => n*2)
console.log(n2);