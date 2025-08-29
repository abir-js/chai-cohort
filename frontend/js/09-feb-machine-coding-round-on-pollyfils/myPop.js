const arr = [1, 2, 3, 4, 5]

if(!Array.prototype.myPop) {
    Array.prototype.myPop = function() {
        if(this.length === 0) return undefined
        let lastElement = this[this.length - 1]
        delete this[this.length - 1]
        this.length = this.length - 1
        return lastElement
    }
}

console.log(arr.myPop())
console.log(arr);