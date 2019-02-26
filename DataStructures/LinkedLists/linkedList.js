export class LinkedList {
  constructor () {
    this.length = 0;
    this.first = null;
  }

  head () {
    return this.first;
  }

  size () {
    return this.length;
  }

  add (elem) {
    let newNode = new Node(elem);
    if (!this.first) {
      this.first = newNode;
      this.length++;
    } else {
      let lastNode = this.first;
      while (lastNode.next) {
        lastNode = lastNode.next
      }
      lastNode.next = newNode;
      this.length++;
    }
    return this;
  }

  remove (elem) {
    if (this.elem === elem) {
      this.first = null;
      this.length--;
      return this;
    } else {
      let prevNode = this.first;
      let node = this.head;
      let nextNode = this.head.next
      while(!node.elem === elem) {
        prevNode = node;
        node = node.next
      }
    }

  }
}

export class Node {
  constructor (elem) {
    this.elem = elem;
    this.next = null;
  }
}

// Contructor Function solution
/*
function LinkedList() { 
  var length = 0; 
  var head = null; 

  var Node = function(element){
    this.element = element; 
    this.next = null; 
  }; 

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(elem){
    let newNode = new Node(elem);
    if (!head) {
      head = newNode;
      length++;
    } else {
      let lastNode = head;
      while (lastNode.next) {
        lastNode = lastNode.next
      }
      lastNode.next = newNode;
      length++;
    }
  };
}
*/
