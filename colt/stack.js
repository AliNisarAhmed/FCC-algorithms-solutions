"use strict";

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.size) return null;
    let popped;
    if (this.size === 1) {
      popped = this.first;
      this.first = this.last = null;
    } else {
      popped = this.first;
      this.first = this.first.next;
      popped.next = null;
    }
    this.size--;
    return popped;
  }
}

let stack = new Stack();

stack
  .push(1)
  .push(2)
  .push(3);

console.log(stack);

let popped = stack.pop();

console.log(popped);

console.log(stack);
