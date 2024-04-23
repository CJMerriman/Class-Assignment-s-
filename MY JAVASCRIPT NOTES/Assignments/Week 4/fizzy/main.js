/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
// Define the fizzBuzz function
function fizzBuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          result.push("FizzBuzz");
      } else if (i % 3 === 0) {
          result.push("Fizz");
      } else if (i % 5 === 0) {
          result.push("Buzz");
      } else {
          result.push(i.toString());
      }
  }
  return result;
}

// Call the fizzBuzz function with an argument (e.g., 15)
//
//console.log(fizzBuzz(15));
function fizzy(number) {
  if (number % 3 === 0 && number % 5 !== 0) {
      return 'Fizz';
  } else if (number % 5 === 0 && number % 3 !== 0) {
      return 'Buzz';
  } else if (number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz';
  } else {
      return number;
  }
}
function fizzy(number) {
  if (number % 3 === 0 && number % 5 !== 0) {
      return 'Fizz';
  } else if (number % 5 === 0 && number % 3 !== 0) {
      return 'Buzz';
  } else if (number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz';
  } else {
      return number;
  }
}




/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
