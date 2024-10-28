const max = prompt("Enter the maximum number!");
console.log

const random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("guess the number");

while(true){
    if(guess== "quit"){
        console.log("You quit the game");
        break;
    }
    if(guess==random){
        console.log("You guessed it right");
        break;
    }
    else if(guess>random){
        guess = prompt("Too high, guess again");
    }
    else{
        guess = prompt("Too low, guess again");
    }

}