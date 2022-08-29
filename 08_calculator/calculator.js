const add = function(x, y) {
	return (x + y);
};

const subtract = function(x, y) {
	return (x - y)
};

const sum = function(x) {
  let sum = 0;
	for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum
};

const multiply = function(x) {

  let result = x[0];
  for (let i = 1; i < x.length; i++) {
    result = result * x[i];
  } 
  return (result)
};

const power = function(x, y) {
  result = x;

  if (y == 0) {
    result = 1;
  }

  for (let i = 2; i <= y; i++) {
    result = result * x;
  }

	return result
};

const factorial = function(x) {
  let result = 1;

  for (let i = 1; i <= x; i++) {
    result = result * i;
  }
	return result
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
