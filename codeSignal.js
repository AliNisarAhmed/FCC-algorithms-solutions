// XBONACCI - CodeWars  

// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. 
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// Think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

// Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

function Xbonacci(s, n){
  let l = s.length;

  return (function itself(sign, m) {
      if (m < l) return sign.slice(0, m);
      if (m === l) return sign;
      let sum = sign.slice(-l).reduce((acc, x) => acc + x, 0);
      return itself([...sign, sum], m - 1);
    }(s, n));
}




// ======================================================================================================================

// FIRST DUPLICATE

// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. 
//In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

// For a = [2, 1, 3, 5, 3, 2], the output should be
// firstDuplicate(a) = 3.

function firstDuplicate (arr) {

}

function findDuplicates (arr) {

}

// console.log(firstDuplicate([2,1,3,5,3,2])) // 3
// console.log(firstDuplicate([2, 4, 3, 5, 1]))  // -1