//

var myName = "Colette";
var myAge = 40;
var isHappy = true;
var myUndefined = undefined;
var myNull = null;
var myNumber = 77777777777;

// array
var favColours = ["red", "green", "blue"];

// object

var me = {
  name: "Colette",
  age: 40,
  height: "5ft 4in",
};

var num1 = Number("100");

var num2 = Number("200");

console.log(num1 + num2);

//https://slides.com/jmsherry/js-data-types?token=2ZKuwgVk#/0/51

var age = 10;

if (age > 42) {
  console.log("you are old");
} else if (age > 17) {
  console.log("you are an adult");
} else {
  console.log("you are a child");
}

// instead of that ^

var age = 2;

switch (age) {
  case 18:
    console.log("You are 18");
    break;

  case 19:
    console.log("You are 19");
    break;

  default:
    console.log("You are some age");
}

//Object
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

// slide 57 - different ways of doing this

console.log(myObject.location.directions.distance);
console.log(myObject.location.directions["distance"]);

var key = "distance";
console.log(myObject.location.directions[key]);

// for multiple object variations

// array for a collection

var myArray = ["milk", "chocolate", "cheese"];

console.log(myArray);

// //multidimentional array AVOID- like this array containing an array and a string
// var myArray = [["milk", "chocolate", "cheese"] name = "keanu"] ;

//do this

var myArray = ["milk", "chocolate", "cheese"];
console.log(myArray[2]);

// why do we count from zero in code  - because zero is the first no...
//arrays ae called exotic numbers

var myArray = ["0 is milk", "1 is chocolate", "2 is cheese"];
console.log(myArray[2]);

//this will make cheese come out....

var object = {
  name: "Keanu",
  favColors: ["black", "blue", "the matrix"],
};

console.log(object.favColors[2]);

var persons = [
  { name: "Dave", age: 30 },
  { name: "Tally", age: 40 },
  { name: "Alan", age: 50 },
];

console.log(persons[2].name);

///next is itteration page 8 of https://slides.com/jmsherry/structures?token=aaHnZX89#/0/7

var myArray = ["black", "blue", "the matrix", "lemon"];

for (var i = 0; i < myArray.length; i++) {
  console.log(myArray, [i]);
}

// console.log(myArray.length)

// eg for loop
for (var i = 0; i < 25; i++) {
  console.log(myArray, [i]);
}

// eg for loop https://slides.com/jmsherry/structures?token=aaHnZX89#/0/9
for (var i = 0; i < myArray.length; i++) {
  console.log("Looking:", i);
  if (myArray[i] === "blue") {
    console.log("Blue found at position :", i);
    break;
    // continue; would carry on
    // break; would stop it at the item its looking for
  }

  // console.log(myArray, [i]);
}

//do while loop

var i = 0;

do {
  console.log("running");
  i++;
} while (i < 10);

// best to learn this most complex and most functional
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// for in loop to itterate - where an object isntnaturarruu itterable
//key is the next thing in array - 1st time it runs item is a, 2nd its b etc using dynamic object keys
//https://slides.com/jmsherry/structures?token=aaHnZX89#/0/14

var obj = { a: 1, b: 2, c: 3 };

for (var key in obj) {
  console.log(key, obj[key]);
}

//This is the best loop to use - For ... Of (ES6) simple but lacking flexibilty

for (var item of myArray) {
  console.log(item);
}

//super simple but lacks flexibilty
myArray.forEach((item) => {
  console.log(item);
});

//functions

//declaration
function sayHi() {
  console.log(`hello`);
}

sayHi();

//anonymoous function expression

var sayHi2 = function () {
  console.log(`hello`);
};

sayHi();

//declaration
function add(x, y) {
  var result = x + y;
  console.log(result);
}

add(2, 2);
add(20, 0);

//or
function multiply(x, y) {
  console.log(x * y);
}

multiply(2, 2);

//annonymous declaration  or higher order function https://slides.com/jmsherry/functions#/0/7

function demo(theFunc) {
  theFunc();
}

demo(function () {
  console.log("i am passed around");
});

//envolking function - add(x, y) IS A PARAMETER OR PLACEHOLDER slide 11 of functions
//all parameters are separated by a comma

function add(x, y) {
  console.log(x + y);
}
//these are called ARGUMENTS
add(2, 2);
//The arguments object - https://slides.com/jmsherry/functions#/0/13
function sayHi(name, age) {
  console.log(`${name} is ${age} years old`);
}

sayHi("Colette", 40);

//The return keyword - you can only return once - also like breaking a loop
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return;
  }
  return x + y;
}

const result = add(2, 2);
console.log(result);

//async function - multiple things happening at same tyme

async function myAsyncFunction() {
  const people = await axios.get("/people");
  const vacancies = await axios.get("/vacancies");
  // etc.
}

//IIFEs - functions that run automatically

(function () {
  console.log("I need to run straight away");
})();

//Sequenced Execution - for currying

function getAFunc() {
  return function () {
    console.log(`Hello World`);
  };
}

console.log(getAFunc());

//immediately envolking a function
getAFunc()();

// var hello = getAFunc();
// hello();

// function chaining (commented out because of error msg)
// var name = `Colette`;

// var result = myName.toUpperCase().toLowerCase();

// console.log(result);

//Callback Functions

function add(x, y) {
  console.log(x + y);
}

function demo(f) {
  f(3, 3);
}

demo(add);

// call a function from within itself loop - tail recursion
//  https://slides.com/jmsherry/functions#/0/25  https://www.youtube.com/watch?v=Mv9NEXX1VHc
var arr = [1, 2, 3, 4, 5, 6, 7];

var i = 0;
function loop() {
  console.log("loop running");
  i++;
  if (i < 10) {
    loop();
  }
}

loop();
