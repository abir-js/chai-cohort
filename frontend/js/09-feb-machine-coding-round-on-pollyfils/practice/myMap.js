const arr = [1, 2, 3, 4, 5];

const n = arr.map((n) => n * 2);
console.log(n);

/**
 * Signature
 *
 * => iterates through all elements
 * => returns new array
 * => doesnot modifies original array
 */

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        const result = []
        for (let i = 0; i < this.length; i++) {
            const element = userFn(this[i]) 
            result.push(element)           
        }
        return result
    }
}

const n2 = arr.myMap(n => n * 3)

console.log(n2);
