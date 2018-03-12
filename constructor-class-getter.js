class Person {
  constructor(firstName, lastName, favoriteFood) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteFood = favoriteFood;
  }
  
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
  greet() {
    console.log(`Hi, I'm ${this.name} and I like to eat ${this.favoriteFood}!`);
  }
}