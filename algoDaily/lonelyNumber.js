// In a given array of numbers, one element will show up once and the rest will show up twice. Can you find that number in O(n) linear time?


// lonelyNumber([4, 4, 6, 1, 3, 1, 3])
// 6

//lonelyNumber([3, 3, 9])
// 9


// ### MY SOLUTION ###
// function lonelyNumber([ first, ...rest ]) {
//   if (rest.length === 0) return first;
//   let index = rest.findIndex(elem => elem === first);
//   if (index >= 0) {
//     return lonelyNumber([...rest.slice(0, index), ...rest.slice(index + 1)]);
//   } else {
//     return first;
//   }
// }

function lonelyNumber(arr) {
  let matches = {};
  for (let elem of arr) {
    if (matches[elem]) {
      delete matches[elem];
    } else {
      matches[elem] = true;
    }
  }
  return Object.keys(matches)[0];
}

// I think my solution is O(n^2), the given solution, using hashMaps, is O(n)

console.log(lonelyNumber([4, 4, 6, 1, 3, 1, 3]))  // 6
console.log(lonelyNumber([3, 3, 9]));  // 9
console.log(lonelyNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1]))  // 9