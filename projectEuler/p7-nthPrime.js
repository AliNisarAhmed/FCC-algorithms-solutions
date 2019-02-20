// This solves the problem, but FCC has an arbitraty cutoff of 100ms, that is why the solution is failing for 10001th prime.
// Even FCC's solution is failing, an issue was opened abt this, and it is marked as closed and resolved, but has not been shipped to master branch yet

function nthPrime(n) {
  let arr = [2];
  let nextElement = 3;
  while (arr.length < n) {
    for (let elem of arr) {
      if (elem > Math.sqrt(nextElement)) {
        arr.push(nextElement);
        break;
      } else {
        if (nextElement % elem === 0) {
          break;
        }
      }
    }
    nextElement += 2;
  }

  return arr[arr.length - 1];
}

console.log(nthPrime(6)); // should return 13.
console.log(nthPrime(10)); // should return 29.
console.log(nthPrime(100)); // should return 541.
console.log(nthPrime(1000)); // should return 7919.
// let t1 = performance.now();
console.log(nthPrime(10001)); // should return 104743.
// let t2 = performance.now();

// console.log(t2 - t1);