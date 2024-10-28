// Q1: Create a program that generates a random number representing a dice roll. The number should be between 1 and 6.
const diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Dice roll:", diceRoll);

// Q2: Create an object representing a car that stores the following properties for the car: name, model, color. Print the car's name.
const car = {
    name: "Toyota",
    model: "Camry",
    color: "Blue"
};
console.log("Car name:", car.name);

// Q3: Create an object Person with their name, age, and city. Edit their city's original value to change it to "Hyderabad". Add a new property country and set it to the India.
const person = {
    name: "Danish",
    age: 19,
    city: "Banswada"
};

person.city = "Hyderabad";
person.country = "India";

console.log("Person:", person);