const arr = [1, 2, 3, 4, 5]

if(!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (userFn) {
        let res = 0
        for(let i=0; i<=this.length; i++){
            res = userFn[i, i+1]
        }
        return res
    }
}

let val = arr.reduce((accumulator, currentVal) => accumulator + currentVal, 0 )
 val = arr.myReduce((accumulator, currentVal) => accumulator + currentVal, 0 )

console.log(val);