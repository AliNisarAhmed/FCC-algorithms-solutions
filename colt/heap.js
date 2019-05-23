class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    if (this.values.length === 1) return;
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.values[parentIndex] < this.values[index]) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  swap(idx1, idx2) {
    // Using ES6 method for swapping
    [this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1]
    ];
  }

  extractMax() {
    // returns the root of the heap, and re-adjusts, "sinks-down", "bubble-downs" the heap
    this.swap(0, this.values.length - 1);
    let root = this.values.pop();
    this.bubbleDown();
    return root;
  }

  bubbleDown() {
    let rootIndex = 0;
    let root = this.values[0];
    let firstChildIndex = 1;
    let secondChildIndex = 2;
    while (
      this.values[firstChildIndex] > root ||
      this.values[secondChildIndex] > root
    ) {
      let firstChild = this.values[firstChildIndex];
      let secondChild = this.values[secondChildIndex];
      if (firstChild > root && secondChild > root) {
        // both greater than root
        if (firstChild > secondChild) {
          this.swap(rootIndex, firstChildIndex);
          rootIndex = firstChildIndex;
        } else {
          this.swap(rootIndex, secondChildIndex);
          rootIndex = secondChildIndex;
        }
      } else if (firstChild > root) {
        // only firstChild is greater than root
        this.swap(rootIndex, firstChildIndex);
        rootIndex = firstChildIndex;
      } else {
        // only right Child is greater than root
        this.swap(rootIndex, secondChildIndex);
        rootIndex = firstChildIndex;
      }
      firstChildIndex = 2 * rootIndex + 1;
      secondChildIndex = 2 * rootIndex + 2;

      // if (
      //   firstChildIndex > this.values.length - 1 &&
      //   secondChildIndex > this.values.length - 1
      // )
      //   return;

      // We dont need to check for the above commented out condition because in JS
      // undefined > 1 == false.
      // undefined < 1 == false.
      // undefined == or === 1 is false as well,
      // hence no need to check the condition as the while condition will return false if the index exceeds length of the array
    }
  }
}

let h = new MaxBinaryHeap();
h.insert(67)
  .insert(58)
  .insert(65)
  .insert(45)
  .insert(31)
  .insert(40)
  .insert(53)
  .insert(44)
  .insert(15);

console.log(h.extractMax());
console.log(h);
