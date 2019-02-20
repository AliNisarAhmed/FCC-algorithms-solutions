function sumSquareDifference (n) {
  let arr = Array.from({length: n}, (e, i) => i + 1);
  const square = x => x * x;
  const sumReducer = (a, x) => a + x;
  const sumOfSquares = arr.map(square).reduce(sumReducer, 0);
  const squaredSum = square(arr.reduce(sumReducer, 0));
  return squaredSum - sumOfSquares;
}

sumSquareDifference(10);