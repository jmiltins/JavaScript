// https://www.youtube.com/watch?v=PkZNo7MFNFg
// https://www.youtube.com/watch?v=x_2sYpk75Ic
// instal node.js - NodeJS : https://nodejs.org/en/download/

// cmd node --version, npm --version
// instal in codestudio JavaScript and Code Runner, 
// ctrl + Alt + M - start/Stop code
//npm install prompt-sync + enter in terminal for user input

// Shift + Alt + F - arrange code
// !!! save before running!!!!
console.log("Hello world!");
// single line coment

//variables
var myName = "Janis"; // can be used throu all the programm
myName = 8;
let ourName = "Joe"; //only in the scope
const pi = 3.14;
var a; // declaring
var b = 5; // assigning
b = 6; // reAssigning

//= assign, == compare // 3 == '3' =>true(casts 3 and '3' to same type(type convertion)), === strictly compare // 3 == '3' false
//STRINGS

// escape character
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
//or
var myStr1 = 'I am a "double quoted" string inside "double quotes".';
console.log(myStr);
// concatinating the strings
var str1 = "I am ";
var str2 = "happy!";
var newStr = str1 + str2;
console.log(newStr);
var ourString = "I come first. " + "I come second";
var firstLetter = str2[0];
// lenght of a string
var lastLetter = str2[str2.length - 1];
console.log(firstLetter + lastLetter);
console.log("Pi is", pi, ", ", str2, "?");

/*
Code output
\' single quote
\" double quote
\\ backlsash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed

*/
// ARRAYS
var ourArray = ["John", 3];
var ourArray1 = [["the universe", 24], ["everything"], 101010];
var array1 = [];
//arr.push(3) => appends el to the end
array1.push("They say, that");
array1.push(ourArray1[0][0]);
array1.push("is");
array1.push(ourArray1[1][0]);
console.log("array mod: ", array1);
//arr.shift() => returns the first element
array1.shift();
console.log("array mod: ", array1);
//arr.unshift() => adds the first element
array1.unshift("I say, that");
//Change to string - JSON.stringify()
console.log("array mod(JSON.stringify): ", JSON.stringify(array1));

//FUNCTIONS
globalStr = "Hey, world function!"
function ourReusableFunction(a = 1, b = 5) {
    globalStr = "Heyyyaaa, world function!" // overrides global
    var localVar = 3 // local var
    globalVar = 99 // since no var, becomes global
    console.log(globalStr, a + b);
}
ourReusableFunction(0, 5);
// Scope
console.log("globalVar is: ", globalVar)
//console.log("localVar is: ", localVar) //does`nt sees var, decl in f-tion

function minusSeven(num) {
    return num - 7
}
var result1 = minusSeven(10)
console.log("ten " + "minus seven is ", result1)

//BOOLEANS
// true or false
function isItTrue(value) {
    if (value) {
        return "It`s true"
    } else {
        return "It`s not true"
    }
}
console.log("Is it true? - ", isItTrue(false))
// Strict ===
function isItEqualTo3(value) {
    if (value === 3) {
        return "It`s striclty true"
    } else if (value == 3) {
        return "It`s kinda true"
    } else {
        return "It`s not equal!"
    }
}
console.log("Is it equal to 3? - ", isItEqualTo3("3"))

//if (val <= 50 && val >=25) and
//if (val >= 50 || val <=25) or

// SWITCH statements
var answer = "";
var val = 1;
switch (val) {
    case 1:
        answer = "alpha";
        break;
    case 2:
        answer = "beta";
        break;
    case 3:
    case 4:
    case 5:
        answer = "other";
        break;
    default:
        answer = "unknown";
        break;
}
console.log("switch case result is - ", answer)

// JAVA SCRIPT OBJECTS - dict?
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
}

console.log(ourDog.friends)
ourDog.friends = ["none"]
console.log(ourDog.friends)

var ourCar = {
    "carBrand": "Wv",
    "carColor": "white",
    "carSpeed": 200,
    "carMass": [250]
}
var ourTruck = JSON.parse(JSON.stringify(ourCar)); // copy object
ourCar.carColor = "black"
ourTruck.carColor = "red"
console.log(ourTruck.carColor)
console.log(ourCar.carColor)

// if obj name has space in it, it is required to use bracket notation
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
// add new propperty two ways
testObj.log = "error";
testObj['foo fan'] = "china town";
console.log(testObj.log);
console.log(testObj['foo fan']);
console.log(testObj["an entree"]);
console.log(testObj['the drink']);
// delete property
delete testObj["an entree"]
// .hasOwnProperty()
console.log(testObj.hasOwnProperty("my side"))
//acces properties of the properties
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack",
            "shield": "engine"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
var whereIsEngine = myStorage.car.outside.shield;
console.log("gloveBoxContents: ", gloveBoxContents)
console.log("whereIsEngine: ", whereIsEngine)

// LOOPS
// while
var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log("while Loop array", myArray);
// for loop
var ourArray = [];
for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}
console.log("for Loop array", ourArray);

// do while
var myArray1 = [];
var i = 0;
do {
    myArray1.push(i);
    i++;
} while (i < 5);

console.log("do while Loop array", myArray1);

// Math.random() - returns nimber between 0 and 1
console.log("Math.random():", Math.random())

// random between 0 and 20
// Math.floor() - rounds up the number no decimals
console.log("random between 0 and 20 - ", Math.floor(Math.random() * 20));
// random in range
function randomInRange(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}
console.log("random in range: ", randomInRange(1, 10))

// parseIn - change str to int
var str3 = "56 aples";
console.log("parseInt:", parseInt(str3));

// Use the parseInt f-tion with a Radix
function convertToInteger(str) {
    return parseInt(str, 2);
}
console.log("convertToInteger: ", convertToInteger("10011"));

// Use the conditional (Ternary) Operator
// condition ? statement -if-true : statement -if-false;

function checkEqual(a, b) {
    return a === b ? true : false;
}
checkEqual(1, 2);

// Use the nested conditional (Ternary) Operator 
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log("checkSign: ", checkSign(10));
// var can be redeclared, let can not
"use strict"; // put on top to catch var dec vithout var let or const 
var catName = "Bou";
var catName = "Mou";
catName = "Mjou";

let dogName = "Wow";
//let dogName = "HWow"; // wil give error
dogName = "HWOW";
// VAR - (globaly or localy in the f-tion) and 
// LET (limited in the block) Scopes
function checkScope() {
    "use strict";
    var i = "function scope";
    if (true) {
        let i = "Block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
checkScope();
// CONST - use all cap in name
const SENTENCE = "free code camp" + " is cool!";
//sentence += " Yey!";  // can not be modified!!!
console.log(SENTENCE);

// Update const Array
const s = [5, 7, 6];
function editInPlace() {
    "use strict";

    //s = [1, 2, 3];

    s[0] = 1;
    s[1] = 1;
    s[2] = 1;
    console.log("Array is updated!!! : ", s);
}
editInPlace();
// Prevent Object Mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS)//To freeze the object!!!
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex)
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(PI);
// Use Arrow Functions to Write concise Anonymous Functions
var magic = function() { // Anonymous f-tion
    return new Date();
};
console.log(magic)
// Arrow f-tion
var magic = () => new Date();
// Arrow f-tion with Parameters
var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log("myConcat: ", myConcat([1, 2], [3, 4, 5]));

// Write Higer Order Arrow Functions
// like map, filter and reduce

// rest operator ...
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log("rest operator ... ", sum(1,2,3,4,5));

// Spread operator ...arr
const arr1 = ['JAN', 'FEB', 'MAR', 'APR'];
let arr2;
(function() {
    //arr2 = arr1; // change this line
    arr2 = [...arr1]; // change this line
    arr1[0] = 'potatoe'
})();
console.log(arr2);







// const prompt = require('prompt-sync')();

// var fName = prompt("Enter your first name : ");
// var lName = prompt("Enter your last name : ");

// console.log("Hi", fName + " " + lName + "!")


