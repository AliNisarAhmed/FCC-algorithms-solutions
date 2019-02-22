// Project Euler: Problem 9: Special Pythagorean triplet

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2

// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

function specialPythagoreanTriplet(n) {
  // let a = 0;
  // let b = 1;
  // let c = 2;

  for (let a = 0; a < n / 3; a++) {
    for (let b = Math.floor((n / 2) - 1); b > a; b--) {
      let c = n - a - b;
      if (a**2 + b**2 === c**2) {
        return a * b * c;
      }
    }
  }
 }
 
console.log(specialPythagoreanTriplet(1000));  // should return 31875000.
console.log(specialPythagoreanTriplet(24));  // should return 480.
console.log(specialPythagoreanTriplet(120));  // should return 49920.