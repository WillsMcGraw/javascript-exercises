const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => {
    return total + num;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => {
    return total *= num;
  });
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let arr = []
  for (let i = 1; i <= a; i++) {
    arr.push(i);
  }
  if (arr.length == 0) {
    return 1;
  }
  return arr.reduce((total, num) => {
    return total *= num;
  }, 1);
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
