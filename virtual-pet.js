function VirtualPet(name, description, hunger, thirst) {
  this.name = name;
  this.description = description;
  this.hunger = hunger;
  this.thirst = thirst;
}

VirtualPet.prototype.feed = function () {
  this.hunger -= 5;
  this.thirst += 10;
};

VirtualPet.prototype.water = function () {
  this.thirst -= 5;
};

export default VirtualPet;
