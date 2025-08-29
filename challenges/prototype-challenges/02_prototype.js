function Robot(name, batteryLevel) {
  // Initialize name and batteryLevel properties
  this.name = name;
  this.batteryLevel = batteryLevel;
}

Robot.prototype.charge = function () {
  this.batteryLevel = Math.min(this.batteryLevel + 20, 100);
};
