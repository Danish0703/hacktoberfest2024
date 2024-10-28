let nums = [1, 2, 3, 4, 5];
const square = nums.map((num) => num * num);
console.log(square);
let sum = square.reduce((acc, cur) => acc + cur, 0);
let avg = sum / nums.length;
console.log(avg);

console.log(nums.map((num) => num + 5));
 let strings = ['aman','baman','caman','daman'];
 console.log(strings.map((str) => str.toUpperCase()));

 const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((val) => val * 2)];
    console.log(doubleAndReturnArgs([7, 8, 9], 4, 4));
    console.log(doubleAndReturnArgs([2], 10, 4));

const mergeobjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeobjects({ a: 7, b: 8 }, { c: 9, d: 10 }));