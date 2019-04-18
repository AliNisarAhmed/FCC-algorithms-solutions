function binarySearch(arr, val) {
  let left = 0, right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.ceil((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (val > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
} 



console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1