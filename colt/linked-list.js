class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push (val) {
    let newNode = new Node(val);
    if (!this.head) {  // if head does not exist, we make the new val as head and the tail
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;

    }
    this.length++;
    return this;
  }

  pop () {
    if (!this.head) return;
    if (this.length === 1) {
      let removed = this.head; 
      this.tail = null;
      this.head = null
      this.length--;
      return removed;
    }
    let pre = this.head;
    let current = this.head.next;
    while (current.next) {
      pre = current;
      current = current.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    return current;
  }

  shift () {
    if (!this.head) return;
    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return oldHead;
  }

  unshift (val) {  // puts the value at the beginning of the list
    let newNode = new Node(val);
    if (!this.head) {
      this.tail = this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get (index) {
    if (index >= this.length || index < 0) return null;
    let current = this.head;
    while(index > 0) {
      current = current.next;
      index--;
    }
    return current;
  }

  set (index, value) {
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false
  }

}

let list = new LinkedList();

list.push(1).push(2).push(3);
console.log(list.set(0, 4));
console.log(list.set(1, 5));
console.log(list.set(2, 6));
console.log(list.set(3, 4));
console.log(list);


// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);

// console.log(list.unshift(0));
// console.log(list.unshift(-1));
// console.log(list.unshift(-2));

// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.get(2));
// console.log(list.get(-1));
// console.log(list.get(3));