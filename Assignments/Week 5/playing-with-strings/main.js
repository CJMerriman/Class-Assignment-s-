/******************
 * YOUR CODE HERE *
 ******************/
function xify(str) {
  let newXified = ''; // Initialize an empty string to store the xified version
  for (let i = 0; i < str.length; i++) {
      newXified += 'x'; // Append 'x' for each character in the input string
  }
  return newXified;
}

// Examples
console.log(xify('hello'));    // Output: 'xxxxx'
console.log(xify('hi there')); // Output: 'xxxxxxxx'


function yellingChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
      result += str[i] + '!';
  }
  return result;
}

// Examples
console.log(yellingChars('hello'));    // Output: 'h!e!l!l!o!'
console.log(yellingChars('hi there')); // Output: 'h!i! !t!h!e!r!e!'

function indexedChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
      result += i + str[i];
  }
  return result;
}

// Examples
console.log(indexedChars('hello'));    // Output: '0h1e2l3l4o'
console.log(indexedChars('hi there')); // Output: '0h1i 2t3h4e5r6e'

function numberedChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
      result += (i + 1) + str[i];
  }
  return result;
}

// Examples
console.log(numberedChars('hello'));    // Output: '1h2e3l4l5o'
console.log(numberedChars('hi there')); // Output: '1h2i3 4t5h6e7r8e'

function exclaim(sentence) {
  let result = '';
  for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === '?' || sentence[i] === '.') {
          result += '!';
      } else {
          result += sentence[i];
      }
  }
  return result;
}

// Examples
console.log(exclaim('Hello, how are you?'));    // Output: 'Hello, how are you!'
console.log(exclaim('Good morning. Have a nice day.')); // Output: 'Good morning! Have a nice day!'

function repeatIt(str, n) {
  let result = '';
  for (let i = 0; i < n; i++) {
      result += str;
  }
  return result;
}

// Examples
console.log(repeatIt('hello', 3));    // Output: 'hellohellohello'
console.log(repeatIt('abc', 5));      // Output: 'abcabcabcabcabc'

function truncate(str) {
  let truncated = ''; // Initialize an empty string to store the truncated version
  if (str.length <= 18) {
      return str; // Return the original string if its length is 18 characters or less
  } else {
      for (let i = 0; i < 15; i++) {
          truncated += str[i]; // Append the first 15 characters of the string
      }
      truncated += '...'; // Append an ellipsis to indicate truncation
  }
  return truncated;
}

// Examples
console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.')); // Output: 'The fault, dear...'
console.log(truncate("Well, that's just, like, your opinion man.")); // Output: "Well, that's ju..."

function ciEmailify(name) {
  let email = ''; // Initialize an empty string to store the email
  let part = ''; // Initialize an empty string to store each part of the name
  let isFirstPart = true; // Flag to track if it's the first part of the name
  
  // Iterate over each character in the name
  for (let i = 0; i < name.length; i++) {
      // If the character is a space, handle it as a separator between parts
      if (name[i] === ' ') {
          // If it's the first part, add it directly to the email
          if (isFirstPart) {
              email += part;
              isFirstPart = false; // Update flag
          } else {
              email += '.' + part; // For subsequent parts, add with a dot separator
          }
          part = ''; // Reset the part for the next part of the name
      } else {
          // Accumulate characters for each part of the name
          part += name[i].toLowerCase(); // Convert characters to lowercase
      }
  }
  // Add the last part of the name to the email
  email += '.' + part;
  // Append the domain
  email += '@codeimmersives.com';
  return email;
}

// Test cases
console.log(ciEmailify('John Doe')); // Output: 'john.doe@codeimmersives.com'
console.log(ciEmailify('Jane Smith')); // Output: 'jane.smith@codeimmersives.com'

function reverse(str) {
  let reversed = ''; // Initialize an empty string to store the reversed string
  // Iterate over each character in the input string from the end to the beginning
  for (let i = str.length - 1; i >= 0; i--) {
      // Append each character to the reversed string
      reversed += str[i];
  }
  return reversed; // Return the reversed string
}

// Test cases
console.log(reverse('colin'));    // Output: 'niloc'
console.log(reverse('mesuara'));  // Output: 'arausem'


 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
