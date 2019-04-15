// Write a funciton that takes in two string, and checks whether the 
// the characters in the first first string form a subsequence of the 
// characters in the second string, without their order changing

function isSubsequence(str1, str2) {
  let first = 0;
  let second = 1;
  for (let elem of str2) {
    if (elem === str1[second] && str1[first] !== str1[second]) {
      // wrong order, immediately return false
      return false;
    } else if (elem === str1[first]) {
      // correct order so far, move one place up
      first++;
      second++;
    }
  }
  return true;
}

console.log(isSubsequence('hello', 'hello world'));  // true
console.log(isSubsequence('sing', 'sting'));  // true
console.log(isSubsequence('abc', 'abracadabra'));  // true
console.log(isSubsequence('abc', 'acb'));  // false
console.log(isSubsequence('abcdefgggro', 'acbdefggrg'));  // false
console.log(isSubsequence('abcd', 'abcdefgh'));  // false