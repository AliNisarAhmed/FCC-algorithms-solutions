// WRite a funcntion which accepts an array of integers, and a number n
// the function calculates the maximum sum of n consecutive elements in the array

function maxSubArraySum(arr, n) {
  if (arr.length < n) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  // now that we have the sum of first n elements, we move the window once to right,
  // and calculate the sum of the next "window", if that sum is greter than maxSum, we replace maxSum
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    // sutracting 1 element to the left of window, adding one element to the right
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))  // 19);