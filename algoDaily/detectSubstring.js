// How would you write a function to detect a substring in a string?

// If the substring can be found in the string, return the index at which it starts. Otherwise, return -1.

function detectSubstring(str, subStr) {
  let idxStart = 0;
  let matches = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === subStr[matches]) {  // we have a match
      if (matches === 0) {  // if this is the first match
        idxStart = i;
      }
      matches++;
      if (matches === subStr.length) {  // we have complete match
        return idxStart;
      }
    }
  }
  return -1;
}


console.log(detectSubstring('geography', 'graph'))  // 0
console.log(detectSubstring('carnival', 'car')); // 0
console.log(detectSubstring('carnival', 'bye')); // -1
console.log(detectSubstring('trust', 'rust')); // 1
console.log(detectSubstring('ggraph', 'graph'));  // 0
console.log(detectSubstring('ggrap', 'graph'));  // -1