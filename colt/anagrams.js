// Given two strings, write a function to determine if the second string is an anagram of the first

// We can use the frequency counter technique

function validAnagram (str1, str2) {
  let obj = {};
  if (str1.length !== str2.length) return false;
  for (let char of str1) {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  }
  for (let char of str2) {
    if (!obj[char]) {
      return false;
    } else {
      obj[char]--;
    }
  }
  return true;
}

console.log(validAnagram('', ''));  // true
console.log(validAnagram('aaz', 'zza'));  // false
console.log(validAnagram('anagram', 'agnaram'));  // true