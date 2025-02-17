const arr = [1, 2, 3, 4, 5]


// myFilter
if(!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(userFn) {
        const result = []
        for(let i=0; i< this.length; i++) {
            if (userFn(this[i])) result.push(this[i])
        }
        return result
    }
}



const newArr = arr.filter((num) => num % 2 == 0)
console.log(newArr);

const newArr2 = arr.myFilter((num) => num % 2 == 0)
console.log(newArr2);

const arr3 = arr.myFilter((num)=> num > 2)
console.log(arr3);