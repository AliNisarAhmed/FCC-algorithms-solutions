class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.tail = this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return;
    let nodeToBeRemoved = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.prev.next = null;
      this.tail = nodeToBeRemoved.prev;
      nodeToBeRemoved.prev = null;
    }
    this.length--;
    return nodeToBeRemoved;
  }
}

let list = new DoublyLinkedList();
list.push(1).push(2).push(3);
// console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
// list.pop();
// list.pop();
// console.log(list)