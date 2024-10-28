arr=[1,2,3,4,5,6,7,8,9,10];
let n=5;
arr.slice(0,n);
console.log(arr.slice(0,n));
let ans=arr.slice(arr.length-n);
console.log(ans);

str=prompt("Enter a string");
if(str.length==0){
    console.log("String is empty");
}else{
    console.log("String is not empty");
}
let sec="ApnaC0LLEGE";
let idx=6;
if(sec[idx]= sec[idx].toLowerCase()){
    console.log("The character is lowercase");
}else{
    console.log("The character is uppercase");
}
let strr = "   Hello, World!   ";
let trimmedStr = strr.trim();
console.log(trimmedStr);

let element = "example";
let array = ["apple", "banana", "cherry", "example", "grape"];
let exists = array.includes(element);
if(exists){
    console.log("Element exists in the array");}
else{    
    console.log("Element does not exist in the array");
}