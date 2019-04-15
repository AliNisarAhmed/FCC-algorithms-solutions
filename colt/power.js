

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

// console.log(power(2, 2));
// console.log(power(2, 0));


function factorial(num) {
  if (num === 0) return 1;
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(4));


function productOfArray([first, ...rest]) {
  if (rest.length === 0) return first;
  return first * productOfArray(rest);
}

// console.log(productOfArray([1,2,3,10])) // 60

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(10)) // 55 

//==================

// function fib(n) {
//   if (n === 1 || n === 2) return 1;
//   let first = 1;
//   let second = 1;
//   return (function helper(num) {
//     if (num === 0) return second;
//     [first, second] = [second, first + second];
//     return helper(num - 1);
//   })(n - 2);  // n - 2, since we already have the first two fib numbers
// }

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(2))  // 1
// console.log(fib(3))  // 3
console.log(fib(4))  // 5
console.log(fib(35))  // 5
// console.log(fib(10))  // 55
