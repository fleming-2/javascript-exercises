const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
  return arr.reduce((acc, x) => acc + x, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, x) => acc * x, 1);
};

const power = function(x, pow) {
  return pow === 0 ? 1 : x * power(x, pow - 1);
};

const factorial = function(x) {
  return x <= 1 ? 1 : x * factorial(x - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
