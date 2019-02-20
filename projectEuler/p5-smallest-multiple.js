
// !!! Project Euler: Problem 5: Smallest Multiple

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function smallestMult(n) {
  // Good luck!
  let arr = new Array(n).fill(1);
  arr = arr.map((elem, i) => i + 1);
  let number;
  if (n < 5) {
    number = n * (n - 1);
    while(arr.some(elem => number % elem !== 0)) {
      number++;
    }
  } else {
    number = 20;
    while(arr.some(elem => number % elem !== 0)) {
      number = number + 10;
    }
  }
  return number;
}

// My solution works as well, but takes a lot more time than FCC solution as it is a brute force approach

// FCC SOLUTION
// function smallestMult(n){
//   function gcd(a, b) {
//     return b === 0 ? a : gcd(b, a%b); // Euclidean algorithm
//   }

//   function lcm(a, b) {
//     return a * b / gcd(a, b);  // Using the fact that a * b = LCM(a, b) * GCD (a, b)
//   }
//   var result = 1;
//   for(var i = 2; i <= n; i++) {
//     result = lcm(result, i);  // Using the fact that LCM(a, b, c) = LCM(LCM(a, b), c);
//   }
//   return result;
// }

export default smallestMult;

console.log(smallestMult(5)) // should return 60
console.log(smallestMult(7)); // should return 420..
console.log(smallestMult(10));  // 2520
console.log(smallestMult(13)) // should return 360360.
console.log(smallestMult(20)) // should return 232792560.