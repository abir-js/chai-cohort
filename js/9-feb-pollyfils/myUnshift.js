const arr = [1, 2, 3, 4, 5];

if (!Array.prototype.myUnshift) {
    Array.prototype.myUnshift = function (...items) {
        let len = this.length;
        let inputCount = items.length;

        if (inputCount === 0) return len;

        // Step 4c: Shift existing elements forward
        for (let i = len - 1; i >= 0; i--) {
            this[i + inputCount] = this[i];
        }
        // Step 4d: Insert new items at the beginning
        for (let j = 0; j < inputCount; j++) {
            this[j] = items[j];
        }
        // Step 5: Update length
        this.length = len + inputCount
        // Step 6: Return new length
        return this.length
    };
}

console.log(arr.myUnshift(6, 7, 8)); // 8
console.log(arr); // [6, 7, 8, 1, 2, 3, 4, 5]
