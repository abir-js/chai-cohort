// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart() {
    // Initialize items property
    this.prices = []
}

ShoppingCart.prototype.addItem = function(price){
  this.prices.push(price)
}

ShoppingCart.prototype.getTotalPrice = function() {
  return this.prices.reduce((acc, immediate)=> acc+immediate, 0)
}