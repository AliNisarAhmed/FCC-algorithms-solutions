// Write a method to check if the given number is a power of 3

function powerOfThree(n) {
  let result = Math.log10(n) / Math.log10(3);  // Using the change of base formula
  return Number.isInteger(result);
}

// Change of base formula

// log b x = log known x / log known b
// log 3 n = log 10 n / log 10 3


function powerOfThree(num) {
  let quotient = num;
  while (quotient >= 1) {
    quotient /= 3;
    if (quotient === 1) return true;
  }
  return false;
}

console.log(powerOfThree(9))  // true
console.log(powerOfThree(27))  // true
console.log(powerOfThree(78))  // false
console.log(powerOfThree(81))  // true