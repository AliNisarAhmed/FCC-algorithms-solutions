function divisibleTriangleNumber (n) {
  let res;
  let i = n; 
  while (!res) {
    let triangleNumber = i * (i + 1) / 2;
    let factors = findAllFactors(triangleNumber);
    if (factors.length > n) {
      res = triangleNumber;
    }
    i++;
  }
  return res;
}

// Important: ALl factors can be found by adding + 1 to all exponents of prime factors and multiplying the result
// hence e.g. p1^n * p2^m  (prime factors)
// (n + 1) x (m + 1) is the number of all factors
// hence for 36, prime factors = 2^2 + 3^2 = 3 x 3 = 9
// for 28 => 2^2 + 7 = 3 * 2 = 6

function findAllFactors (m) {
  let result = [];
  for (let i = 1; i <= Math.sqrt(m); i++) {
    if (m % i === 0) {
      result.push(i);
      if (m / i !== i) {
        result.push(m / i);
      }
    }
  }
  return result;
}

console.log(divisibleTriangleNumber(5))   //should return 28.
// console.log(divisibleTriangleNumber(23))  // should return 630.
// console.log(divisibleTriangleNumber(167))  //) should return 1385280.
console.log(divisibleTriangleNumber(374))  //) should return 17907120.
console.log(divisibleTriangleNumber(500))  //) should return 76576500.

console.log(findAllFactors(36));