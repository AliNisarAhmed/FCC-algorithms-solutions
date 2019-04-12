// Given two positive Integers, find out if the two numbers have the same frequency of digits

function sameFrequency(num1, num2) {
  if (num1 === num2) return true;
  num1 = String(num1);
  num2 = String(num2);
  if (num1.length !== num2.length) return false;
  let obj = {};
  for (let digit of num1) {
    obj[digit] = obj[digit] ? obj[digit] + 1: 1;
  }
  for (let digit of num2) {
    if (!obj[digit]) {
      return false;
    } else {
      obj[digit]--;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));  // true
console.log(sameFrequency(34, 14));  // false
console.log(sameFrequency(3589578, 5879385));  // true