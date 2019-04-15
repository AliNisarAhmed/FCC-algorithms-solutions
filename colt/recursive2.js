function reverse(str) {
  if (str === '') return '';
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('abcdefg'));


//============================

function isPalindrome(str) {
  if (str === '') return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}

// console.log(isPalindrome('abcddcba'));
// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false

//==================================

function someRecursive([first, ...rest], cb) {
  if (cb(first)) return true;
  if (rest.length === 0) return false;
  return someRecursive(rest, cb);
}

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // fa)lse
console.log(someRecursive([4,6,8], val => val > 10)) // false

//=========================================


function flatten([first, ...rest]) {
  if (!first) return [];  // let [first, ...rest] = [], then in this case, first = undefined, rest = []
  if (Array.isArray(first)) {
    return [...flatten(first), ...flatten(rest)];
  } else {
    return [first, ...flatten(rest)];
  }
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3

//===========================


function capitalizeFirst([first, ...rest]) {
  if (rest.length === 0) return [first[0].toUpperCase() + first.slice(1)];
  return [first[0].toUpperCase() + first.slice(1), ...capitalizeFirst(rest)];
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana'])