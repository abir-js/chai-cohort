// You just need to implement the cleanObject function
function cleanObject(obj) {
    // Remove all properties with null or undefined values
    for(let key in obj){
      if(obj[key]== null || obj[key]== undefined){
        delete obj[key]
      }
    }
    return obj
  }