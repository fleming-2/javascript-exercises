const fibonacci = function(n) {
  n = parseInt(n);
  if (n === 0) {
    return 0;
  }
  if (!n || n < 0) {
    return "OOPS";
  }

  let current = 1;
  let previous = 0;
  let temp;
  for (let i = 1; i < n; i++) {
    temp = current;
    current += previous;
    previous = temp;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
