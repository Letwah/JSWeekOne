/************************************ *
THIS IS COLETTE'S 1ST JS HOMEWORK  - 22nd March 2023:)
****************************************/

//Q1

var favColours = ["Blue", "Green", "Yellow"]; // should be array but is object an array is etchnically a type of object tho....!?
var myName = "Colette"; //string
var myAge = "40"; //number
var isIrish = true; //boolean

//Q2 - Add two numbers
var num1 = Number("10");
var num2 = Number("20");

console.log(num1 + num2);
/*
console.log(num1 * num2); - this only works because they are numbers 

e.g. 
var num1 = "10" * 1;
var num2 ="20" * 1; - this has turned string into numbers because times by 1.  

FROM SLIDES: 
// Casting
// Use of number constructor to change type
typeof '11'; // string
typeof Number('11');  // number

// Type Coercion
// Multiplying the string causes its coercion to a number
typeof '11'*1; // number
*/

//Q3 Addition assignment - Use the shorthand to add 1 to a number

var num = 0;

num += 1; //adds 1 therefore makes it 1

num = num + 1; //this would then be 3 as it's been added on to 2 ^ (the previous number...)

num++; //another way of making it add 1 + 1 - so this would now be 3 because added on the previous (2)

//basically means (+ means increment plus 1)

//Q4 - Use the shorthand to remove 1 from a number

var num2 = 10;

num2--;

// console.log(num2--);

//Q5 - Concatenate two strings

var string1 = "No";
var string2 = "Thanks";
var result = string1.concat(string2);

console.log(string1, string2);

//Q6 - Create an IF statement which checks if a variable matches another variable, if so it should console log a message

var age = 60;

if (age >= 60) {
  console.log("Dave is old.");
} else {
  console.log("Dave is youngish.");
}

// console.log(age == 60); - makes the true of false happen

//Q7 - Extend one of the IF statements to check if two things are true, if so show a message
var age = 17;
var ownsCar = true;

if (age >= 16 && ownsCar) {
  console.log(
    "Dominic is old enough to drive but possibly shouldn't be driving."
  );
} else {
  console.log("Dominic is too young to drive.");
}

//Q8 - Store in a variable someone’s name, age and height. Chose an object
var keanu = {
  name: "Keanu Reeves",
  age: 48,
  height: "6' 1",
};

console.log(keanu);

// homework part 2

// Q1 - Create a function that accepts two numbers, adds them and returns the result

function add(x, y) {
  //Q2 - Create a defensive check inside the function that handles if the inputs to the function are invalid/non existent
  //Call the function above if it exists
  if (typeof x !== "number") return;
  var result = x + y;
  console.log(result);
}

add(20, 5);

//Q3 - Create an array containing a few items
var myArray = ["black", "blue", "the matrix", "beer"];

//a - for of
for (var item of myArray) {
  console.log(item);
}

//b - for each
myArray.forEach((item) => {
  console.log(item);
});

//c - for (full blown)
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

//Q5 - create an object

var myObject = {
  name: "Keanu Reeves",
  age: 58,
  height: "6' 1",

  // location is an object and can have multiple items
  location: {
    city: "LA",
    isBig: true,
    postCode: "la la la",
    directions: {
      distance: 5400,
    },
  },
};
//Q6 - Add an item to the above object (using . syntax)
console.log(myObject.location.directions.distance);

//Q7 - Add an item to the above object dynamically (using the [] syntax)
console.log(myObject.location.directions["distance"]);

//Q8 - Loop over the object using for in???? ----********DONT UNDERSTAND this ASK FOR HELPPPPPP******

var obj = { a: "black", b: "blue", c: "the matrix" };

for (var key in obj) {
  console.log(key, obj[key]);
}
