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

  push (val) {  // push a value to the end of the list
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

  pop () { // pops the value from the end of the list
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

  shift () {  // removes the first element
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

  get (index) {  // returns the node at the index;
    if (index >= this.length || index < 0) return null;
    let current = this.head;
    while(index > 0) {
      current = current.next;
      index--;
    }
    return current;
  }

  set (index, value) {  // replaces the value of the node at the index with the given value
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false
  }

  insert (index, val) {  // inserts a new node at the index with the value of val
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode; 
    this.length++;
    return true;
  }

  remove(index) {  // remove a node @ the index
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    // let nodeToBeRemoved = this.head;
    // let prevNode = this.head;
    // while (index > 0) {
    //   prevNode = nodeToBeRemoved;
    //   nodeToBeRemoved = nodeToBeRemoved.next;
    //   index--;
    // }
    // prevNode.next = nodeToBeRemoved.next;

    // Can also use the code above
    let prevNode = this.get(index - 1);
    let nodeToBeRemoved = prevNode.next;
    prevNode.next = nodeToBeRemoved.next
    this.length--;
    return true;
  }

  print() {
    let arr = [];
    let current = this.head;
    while(current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  reverse() {
    if (!this.head) return;

    // [this.tail, this.head] = [this.head, this.tail];
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let prev = null;
    let next = null;
    let node = this.tail;
    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

}

let list = new LinkedList();

list.push(1).push(2).push(3);
// console.log(list.remove(2));
// console.log(list.remove(1));
// console.log(list.remove(-1));
// console.log(list.remove(2));

list.reverse();
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