let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor : "hammer",
    spiderman: "sling",

    getSpiderPower: function ()  {
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.abir = function() {
    console.log("present in all objects");
}

heroPower.abir()