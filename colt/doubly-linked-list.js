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

  shift() {
    if (this.length === 0) return undefined;
    let currentHead = this.head; 
    if (this.length === 1) {
      currentHead.next = null;
      currentHead.prev = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      currentHead.next = null;
    }
    this.length--;
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let mid = Math.floor(this.length / 2);
    if (index <= mid) {
      let node = this.head;
      let count = 0;
      while (count !== index) {
        node = node.next;
        count++;
      }
      return node;
    } else {
      let node = this.tail;
      let count = this.length - 1;
      while (count !== index) {
        node = node.prev;
        count--;
      }
      return node;
    }
  }

  set(index, value) {
    let node = this.get(index);
    if (!node) return false;
    node.val = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    let node = this.get(index - 1);
    let newNode = new Node(value);
    let nextNode = node.next;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    newNode.prev = node;
    node.next = newNode;
    this.length++;
    return true;
  }
}

let list = new DoublyLinkedList();
list.push(1).push(2).push(3).push(4).push(5).push(6);
// console.log(list.pop());
console.log(list.insert(3, 200));
// console.log(list.pop());
// list.pop();
// list.pop();
console.log(list);