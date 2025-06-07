const arr = [1, 2, 3, 4, 5];

// input - no input
// functionalities - removes first element from an array
// output - returns removed item

if (!Array.prototype.myShift) {
    Array.prototype.myShift = function () {
        if (this.length === 0) return undefined;
        let firstElement = this[0];
        for (let i = 0; i < this.length - 1; i++) {
            this[i] = this[i + 1];
        }
        this.length -= 1;
        return firstElement;
    };
}

console.log(arr.shift());
console.log(arr);
