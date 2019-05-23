class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  // MinBinaryHeap -  lower numbers mean higher priority
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    if (this.values.length === 1) return;
    var index = this.values.length - 1;
    var parentIndex = Math.floor((index - 1) / 2);
    console.log(this.values[parentIndex]);
    while (this.values[parentIndex].priority > this.values[index].priority) {
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
}

const q = new PriorityQueue();

q.enqueue("ali", 1).enqueue("sam", 0);
// .enqueue("papa", 3)
// .enqueue("ammi", 5)
// .enqueue("myself", 2);

console.log(q);
