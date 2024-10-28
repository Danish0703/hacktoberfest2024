const arrayAverage = (arr) => {
    let total = 0;
    for (let number  of arr) {
        total += number;
    }
    return total / arr.length;
};
let arr = [1, 2, 3, 4, 5];
console.log(arrayAverage(arr)); 

let n = prompt("Enter a number: ");
const isEven = (n) => n%2==0;
console.log(isEven(n));

const object = {
    message: 'Hello, World!',
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(() => object.logMessage(), 1000);


