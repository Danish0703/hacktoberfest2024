// Ans1
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

// Ans2
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

// Ans3
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// Ans4
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);
// Ans5
let paragraph = document.createElement("p");
paragraph.innerText = "Hello, world!";
document.querySelector("body").append(paragraph);