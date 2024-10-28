let num = 20; // Assign a value to the variable

if (num % 10 === 0) {
    console.log("good");
} else {
    console.log("bad");
}

let name = prompt("Enter your name:"); // Prompt the user to enter their name
let age = prompt("Enter your age:"); // Prompt the user to enter their age

alert(`${name} is ${age} years old.`); // Display the statement to the user using an alert

let month = 2; // Prompt the user to enter the month number
switch (month) {
    case 1:
        console.log("Months in Quarter 1: January, February, March");
        break;
    case 2:
        console.log("Months in Quarter 2: April, May, June");
        break;
    case 3:
        console.log("Months in Quarter 3: July, August, September");
        break;
    case 4:
        console.log("Months in Quarter 4: October, November, December");
        break;
    default:
        console.log("Invalid quarter number");
}


if (name.length > 5 && (name.startsWith("A") || name.startsWith("a"))) {
    console.log("The string is a golden string.");
} else {
    console.log("The string is not a golden string.");}
    let num1 = 10;
    let num2 = 20;
    let num3 = 30;

    if (num1 >= num2 && num1 >= num3) {
        console.log("The largest number is num1: " + num1);
    } else if (num2 >= num1 && num2 >= num3) {
        console.log("The largest number is num2: " + num2);
    } else {
        console.log("The largest number is num3: " + num3);
    }

    let number1 = 32;
    let number2 = 47852;

    if (number1 % 10 === number2 % 10) {
        console.log("The numbers have the same last digit.");
    } else {
        console.log("The numbers do not have the same last digit.");
    }

