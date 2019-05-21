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
    //swap idx1 value with idx2 value and vice-versa
    let temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }
}

let h = new MaxBinaryHeap();
h.insert(41)
  .insert(39)
  .insert(33)
  .insert(18)
  .insert(27)
  .insert(12)
  .insert(55);

console.log(h);
