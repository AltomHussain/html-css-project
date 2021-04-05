var greeting = "Hello code your future";
console.log(greeting);
console.log(greeting);
console.log(greeting);
var cyf = "I am very happy to learn how to code in code your future.";
console.log(cyf);
var coding = "Coding amazing but it is stressful sometimes";
const name = "Altom";
let food = "Checkin";
console.log(name + " " + food);

const numberOfStudents = 20;
const numberOfMentors = 10;
console.log(numberOfStudents + numberOfMentors);
const total = numberOfStudents + numberOfMentors;
const precent = (numberOfStudents / total) * 100;
console.log(Math.round(precent));
/*Function has four parameters two strings and two numbers 
it adds the two numbers and concatinate two strings and return to outputS */
function ourEx(a, b, numOne, numTwo) {
  var total = numOne + numTwo;
  return a.concat(" ", b) + " " + total;
}

console.log(ourEx("hi ", "code your future", 10, 20));

function calculateSalesTax(number) {
  let charge = 0.2;
  let percent = number * charge;
  let total = percent + number;
  return total;
}
console.log(calculateSalesTax(15));

// function convertToBRL(pounds, number) {
//   const sign = calculateSalesTax(number);
//   const final = "I have £" + pounds + " " + sign;
//   return final;
// }
// console.log(convertToBRL(18.001111));
// function myMethod(number) {
//   var myNumber = number.toFixed(2);
//   var sign = "£";
//   var result = sign + myNumber;
//   return result;
// }
// console.log(myMethod(18.0));
