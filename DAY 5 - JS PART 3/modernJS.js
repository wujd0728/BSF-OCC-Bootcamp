//Arrow Functions

const greet = (name) => {
    console.log(name);
}

greet("Ron");

const square = (a) => a*a;

console.log(square(4));

// Spread and Rest Operators

//Rest Operator
function restOperator(first, ...restOfArgs){ //three dots is the key, put the rest in an array; can change restOfArgs to anything
    console.log(first);
    console.log(restOfArgs);
}

restOperator("one", "two", "three", "four", "five");

//Spread operator
function sum(x,y,z){
    return x + y +z;
}

const numbers = [1,2,3,4];
console.log(sum(numbers[0],numbers[1],numbers[2]))//normal way
console.log(sum(...numbers))//spread, it will take first 3

//Common Built-in Methods

// => Array

//  filter()
let nums = [1,2,3,4,5,6,7,8,9,10];
//console.log(nums.filter((num) => num %2 == 0));
const even = nums.filter((num) => num %2 == 0);
const odd = nums.filter((num) => num %2 == 1);
console.log(even)
console.log(odd)

// => String

// split()
const message = "Hello, world!";
const words = message.split("o");//seems there is no default () = (" ") like python
console.log(words);

// includes()
const sentence = "The quick brown fox jumps over the lazy dog."
const containsWord = sentence.includes("Fox");
console.log(containsWord);

// length; length is not a method
const str = "Wlecome to Modern JS Features!";
console.log(str.length)

// to lowercase and to upper case
let string = "HELLO, world";
console.log(string.toLowerCase());
console.log(string.toUpperCase());

// trim
let str2 = "   I love JavaScript!   ";
console.log(str2.trim());

// => Math

// max and min
const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber);
const minNumber = Math.min(10, 5, 20);
console.log(minNumber);

// round
console.log(Math.round(3.5));//4 down 5 up

//floor
console.log(Math.floor(3.6));//go down no matter 0.9 or 0.1

//ceil
console.log(Math.ceil(3.1));// go up no matter 0.1 or 0.9

//random
console.log(Math.random()); //choose from 0~1
console.log(Math.random() * 10);

//mested math methods
console.log(Math.floor(Math.random()*10));

// => Other

// to fixed
const price = 40.2567.toFixed(2);//will round
console.log(price);

// data
const currentDate = new Date();
console.log(currentDate);

const christmas = new Date(2024, 11, 25)//weired month = month -1
console.log(christmas);