function Person(name, favoriteFood) {
  this.name = name;
  this.favoriteFood = favoriteFood;
}
  
Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name} and I like to eat ${this.favoriteFood}!`);
}
