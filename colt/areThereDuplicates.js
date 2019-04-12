// function accepts a variable number of arguments, and checks whethere there are any duplicates

function areThereDuplicates(...args) {
  let obj = {};
  for (let elem of args) {
    if (obj[elem]) return true;
    obj[elem] = true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 5, 6, 6));  // true
console.log(areThereDuplicates(1, 2, 3, 4, 5, 6));  // false
