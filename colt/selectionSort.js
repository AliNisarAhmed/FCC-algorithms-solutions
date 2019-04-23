function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {  // swapping only if the elements to be swapped are different
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 7, 8]))