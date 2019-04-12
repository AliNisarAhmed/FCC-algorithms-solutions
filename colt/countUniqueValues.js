// Given a sorted Array, count unique values inside it and return the value

function countUniqueValues (arr) {
  if (arr.length == 0) return 0;
  let i = 0; 
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {  // a unique value
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));  // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));  // 7
console.log(countUniqueValues([]));  // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1]));  // 4