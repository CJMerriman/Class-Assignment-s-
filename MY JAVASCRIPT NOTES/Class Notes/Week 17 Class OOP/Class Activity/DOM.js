//Create different car objects

// class Car{
//     constructor(make, model, year, title, color){
//         this.make=make
//         this.model=model
//         this.year=year
//         this.title=title
//         this.color=color
//     }
// }

// let honda= new Car("honda", "Accord", 2024, true, "silver")
// console.log(honda)
// class car{
//     constructor(make, model, year, engineSize, brakePrices, nagivation){
//         this.make=make
//         this.model=model
//         this.year=year
//         this.engineSize=engineSize
//         this.brakePrices=brakePrices
//         this.nagivation=nagivation
//     }
// }       
// class Suv extends Car{
//     constructor(make, model, year, engineSize, brakePrices, nagivation, towCampacity){
//         super(make, model, year, engineSize, brakePrices, nagivation)
//         this.awd=this.awd
//         this.numberOfPassengers=numberOfPassengers
//         this.towCampacity=towCampacity
//     }
// }
// const hondaPilot=new Suv


// Create an Animal class. The class will have name, age, color, legs properties and create different methods And Make sure to use a getter and sette



// Create a Dog and Cat child class from the Animal Class.
class Animal {
    constructor(name, age, color, legs) {
      this._name = name;
      this._age = age;
      this._color = color;
      this._legs = legs;
      this.count = 0};

      set animalCount(count){
        return this.count+=count
      };
      get animalCount(){
       return this.count
      };

  

    // Method to make the animal speak
    speak() {
      return "I am an animal.";
    }
  
    // Method to describe the animal
    describe() {
      return `My name is ${this.name}. I am ${this.age} years old, ${this.color}, and have ${this.legs} legs.`;
    }
  }

  const Lion = new Animal("Toby", 8, "Red and White", 4) 
  Lion.animalCount=5;  
  console.log(Lion);
  console.log(Lion.animalCount);

  
  class Dog extends Animal {
    constructor(name, age, color) {
      super(name, age, color, 4);
    }
  
    // Method to make the dog bark
    speak() {
      return "Woof!";
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, color) {
      super(name, age, color, 4);
    }
  
    // Method to make the cat meow
    speak() {
      return "Meow!";
    }
  }
  
  // Example usage:
  const dog = new Dog("Buddy", 3, "brown");
  console.log(dog.describe()); // Output: My name is Buddy. I am 3 years old, brown, and have 4 legs.
  console.log(dog.speak()); // Output: Woof!
  
  const cat = new Cat("Whiskers", 2, "gray");
  console.log(cat.describe()); // Output: My name is Whiskers. I am 2 years old, gray, and h
  