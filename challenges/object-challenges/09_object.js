// You just need to implement the deepClone function
function deepClone(obj) {
    // Return a deep copy of obj
    const newObjString = JSON.stringify(obj)
    const newObj = JSON.parse(newObjString)
    return newObj
  }