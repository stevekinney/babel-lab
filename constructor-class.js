class Person {
  constructor(name, favoriteFood) {
    this.name = name;
    this.favoriteFood = favoriteFood;
  }
  
  greet() {
    console.log(`Hi, I'm ${this.name} and I like to eat ${this.favoriteFood}!`);
  }
}