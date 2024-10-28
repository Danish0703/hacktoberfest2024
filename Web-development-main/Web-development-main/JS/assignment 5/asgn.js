let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function getElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}

getElements(arr, num);let str = "abcdabcdefgggh";

function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }
    return ans;
}

getUnique(str);

let county = ["Australia", "Germany", "UnitedStatesofAmerica"];

function longestName(county) {
    let ansIdx = 0;
    for (let i = 0; i < county.length; i++) {
        let ansLen = county[ansIdx].length;
        let currLen = county[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return county[ansIdx];
}

longestName(county);

let country = ["Australia", "Germany", "UnitedStatesofAmerica"];

function longestName(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}

longestName(country);

let strr = "apnacollege";

function countVowels(strr) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (strr.charAt(i) == "a" || strr.charAt(i) == "e" || strr.charAt(i) == "i" || strr.charAt(i) == "o" || strr.charAt(i) == "u") {
            count++;
        }
    }
    return count;
}

countVowels(str);

let start = 100;
let end = 200;

function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

generateRandom(start, end);