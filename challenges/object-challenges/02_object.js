// You just need to implement the addCarColor function
function addCarColor(car, color) {
    // Add color property to the car object
    if(!color) return "Invalid color"
    car.color = color
    return car
  
  }