var ForagerBee = function() {
  // Calling the bee constructor on the new instance of ForagerBee. Allows us to add methods from Bee onto foragerBee	
  Bee.call(this);
  this.age = 10;
  this.job = "find pollen"
  this.canFly = true;
  this.treasureChest = [];

};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function(treasure){
	this.treasureChest.push(treasure);
}




