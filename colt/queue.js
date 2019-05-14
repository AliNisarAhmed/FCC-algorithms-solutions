class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (!this.size) return null;
    let dq;
    dq = this.first;
    if (this.size === 1) {
      this.first = this.last = null;
    } else {
      this.first = this.first.next;
      dq.next = null;
    }
    this.size--;
    return dq;
  }
}

const q = new Queue();
q.enqueue(1)
  .enqueue(2)
  .enqueue(3);

q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q);
