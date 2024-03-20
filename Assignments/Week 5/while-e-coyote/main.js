 function numberDoubler(num) {
     while (num < 100) {
         num *= 2;
     }
     return num;
 };

function stringRepeater(str) {
    while (str.length < 10) {
        str += str;
    }
    return str;
};
// // Examples
// console.log(stringRepeater('abc'));    // Output: 'abcabcabcabc'
// console.log(stringRepeater('a'));      // Output: 'aaaaaaaaaa'
// console.log(stringRepeater('hotdog')); // Output: 'hotdoghotdog'


function makeDivisible(x, y) {
    while (x % y !== 0) {
        x++;
    }
    return x;
};

module.exports = {
   numberDoubler,
   stringRepeater,
   makeDivisible
};