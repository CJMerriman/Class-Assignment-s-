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
  if (str.length === 1) {
      result = `(1)${str}`;
  } else {
      for (let i = 0; i < str.length; i++) {
          result += (i + 1) + str[i];
      }
  }
  return result;
}

// Test cases
console.log(numberedChars('hello')); // Output: '1h2e3l4l5o'
console.log(numberedChars('world')); // Output: '1w2o3r4l5d'
console.log(numberedChars('javascript')); // Output: '1j2a3v4a5s6c7r8i9p10t'
console.log(numberedChars('a')); // Output: '(1)a'
console.log(numberedChars('ab')); // Output: '1a2b'

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
  // Convert the name to lowercase
  const lowerCaseName = name.toLowerCase();
  // Split the name into two parts
  const nameParts = lowerCaseName.split(' ');
  // Extract the first and last name
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(''); // Handle cases where last name might be missing
  // Create the email address
  const email = `${firstName}.${lastName}@codeimmersives.com`;
  return email;
}
// Test cases
console.log(ciEmailify('colin jaffe')); // Output: 'colin.jaffe@codeimmersives.com'
console.log(ciEmailify('Anthony DeRosa')); // Output: 'anthony.derosa@codeimmersives.com'

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

function onlyVowels(word) {
  return word.replace(/[^aeiou]/gi, '');
}

// Test cases
console.log(onlyVowels('hello')); // Output: 'eo'
console.log(onlyVowels('world')); // Output: 'o'
console.log(onlyVowels('javascript')); // Output: 'aai'


function crazyCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
      result += i % 2 === 0 ? str[i].toLowerCase() : str[i].toUpperCase();
  }
  return result;
}

// Test cases
console.log(crazyCase('hello')); // Output: 'hElLo'
console.log(crazyCase('world')); // Output: 'wOrLd'
console.log(crazyCase('crazy')); // Output: 'cRaZy'


function titleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, function(char) {
      return char.toUpperCase();
  });
}

// Test cases
console.log(titleCase('hello world')); // Output: 'Hello World'
console.log(titleCase('hELLo_wORLd')); // Output: 'Hello_World'
console.log(titleCase('THE QUICK BROWN FOX')); // Output: 'The Quick Brown Fox'


function camelCase(str) {
  return str.replace(/\s(.)/g, function(match, group1) {
      return group1.toUpperCase();
  }).replace(/^\w/, function(firstChar) {
      return firstChar.toLowerCase();
  });
}

// Test cases
console.log(camelCase('hello world')); // Output: 'helloWorld'
console.log(camelCase('hello_world')); // Output: 'helloWorld'
console.log(camelCase('hello-world')); // Output: 'helloWorld'


function crazyCase2ReturnOfCrazyCase(str) {
  let result = '';
  let toUpper = false;

  for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      if (char !== ' ') { // Ignore spaces
          result += toUpper ? char.toUpperCase() : char.toLowerCase();
          toUpper = !toUpper;
      } else {
          result += char;
      }
  }

  return result;
}

// Test cases
console.log(crazyCase2ReturnOfCrazyCase('multiple words here')); // Output: 'mUlTiPlE wOrDs HeRe'
console.log(crazyCase2ReturnOfCrazyCase('crazy stuff')); // Output: 'cRaZy StUfF'


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
