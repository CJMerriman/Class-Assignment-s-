// Fill in the body of each function with the code required

var add = function(num1, num2) {
    return num1 + num2;
};
console.log(add(4,5))

var subtract = function(num1, num2) {
    return num1 - num2;
};

var multiply = function(num1, num2) {
    return num1 * num2;
};

var divide = function(num1, num2) {
    if (num2 === 0) {
        return "Error: Cannot divide by zero";
}
    return num1 / num2;
};

