function Animal(name) {
    // Initialize name property
    this.name = name
}

Animal.prototype.makeSound = function() {
  return "Some generic sound"
}
