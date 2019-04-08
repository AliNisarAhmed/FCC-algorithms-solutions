// You're given an array of strings containing alphabetical characters and certain $ characters. A $ represents a DELETE action whereby the character before it is deleted.

// Each of these strings will be run through a method to operate on the $ DELETE action. We want to find out if the final string is the same for all of them. Let's take an example:

// const input = ["f$st", "st"]
// isDollarDeleteEqual(input);
// true
// true because both become "st"


// function dollarDelete(str) {  // removes the dollar sign, and the letter before it.
//   let arr = [...str];
//   let length = str.length;
//   for (let i = 0; i < length; i++) {
//     if (arr[i] === '$') {
//       arr.splice(i - 1, 2);
//     }
//   }
//   return arr.join('');
// }

function dollarDelete(str) {
  let indicator = 0;
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '$') {
      indicator++;
    } else {
      if (indicator > 0) {
        // we dont add that letter, instead just reset the indicator
        indicator--;
      } else {
        // indicator was 0, meaing we did not encounter the $ sign before this letter, hence this letter should be added to the result.
        result += str[i];
      }
    }
  }
}

function isDollarDeleteEqual([first, second]) {
  return dollarDelete(first) === second;
}


console.log(dollarDelete('f$st'))  // 'st'
console.log(dollarDelete('sam$ra$h'))  // 'sarh'

console.log(isDollarDeleteEqual(['f$st', 'st'])) // true