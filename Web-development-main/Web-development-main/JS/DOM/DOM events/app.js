// Q1: Try out the following events in EventListener on your own:
// - mouseout
// - keypress
// - scroll
// - load

// Example for mouseout event
document.addEventListener('mouseout', function(event) {
    console.log(event.target);
});

// Example for keypress event
document.addEventListener('keypress', function(event) {
    console.log(event.key);
});

// Example for scroll event
window.addEventListener('scroll', function(event) {
    console.log(window.scrollY);
});

// Example for load event
window.addEventListener('load', function(event) {
    console.log('Page is loaded');
});


// Q2: Create a button on the page using JavaScript. Add an event listener to the button that changes the button's color to green when it is clicked.
var button = document.createElement('button');
button.textContent = 'Click me';
button.addEventListener('click', function(event) {
    button.style.backgroundColor = 'green';
});
document.body.appendChild(button);


// Q3: Create an input element on the page with a placeholder "Enter your name" and an H2 heading inside HTML. The purpose of this input element is to enter a user's name, so it should only input letters from a-z, A-Z, and space (all other characters should not be detected). Whenever the user inputs their name, their input should be dynamically visible inside the heading.
var input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Enter your name');
input.addEventListener('input', function(event) {
    var name = input.value.replace(/[^a-zA-Z ]/g, '');
    heading.textContent = name;
});
document.body.appendChild(input);

var heading = document.createElement('h2');
document.body.appendChild(heading);


// Q4: Create a div element on the page. Add an event listener to the div that changes its background color to red when the mouse enters the div, and changes it back to white when the mouse leaves the div.
var div = document.createElement('div');
div.style.width = '100rem';
div.style.height = '100rem';
div.style.backgroundColor = 'white';
div.addEventListener('mouseenter', function(event) {
    div.style.backgroundColor = 'pink';
});
div.addEventListener('mouseleave', function(event) {
    div.style.backgroundColor = 'white';
});
document.body.appendChild(div);


// Q5: Create a function that adds a click event listener to all elements with the class "btn". When any of these elements are clicked, the function should log the element's text content to the console.
function logButtonText() {
    var buttons = document.getElementsByClassName('btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event) {
            console.log(event.target.textContent);
        });
    }
}
logButtonText();