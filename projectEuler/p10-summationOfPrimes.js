// Project Euler: Problem 10: Summation of primes

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below n.

function primeSummation(n) {
  let arr = [2];
  let nextElement = 3;
  let sum = 2;
  while (nextElement < n) {
    for (let elem of arr) {
      if (elem > Math.sqrt(nextElement)) {
        arr.push(nextElement);
        sum += nextElement;
        break;
      } else {
        if (nextElement % elem === 0) {
          break;
        }
      }
    }
    nextElement += 2;
  }
  return sum;
}

console.log(primeSummation(17));  //should return 41.
console.log(primeSummation(2001));  //should return 277050.
console.log(primeSummation(140759));  //should return 873608362.
console.log(primeSummation(2000000));  //should return 142913828922.