import LinkedListNode from './LinkedListNode';
import Comparator from '../../utils/Comparator';

export default class LinkedList {
  
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  prepend(value) {  // takes a value and puts it at the start of the list
    const newNode = new LinkedListNode(value, this.head);  // the current head becomes the next of the new node.
    this.head = newNode;

    if (!this.tail) {  
      // if there is no tail, then newNode is the first node in this list,
      // hence the nedNode must be added as a tail
      this.tail = newNode
    }

    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value)

    if (!this.head) {
      // if there is  no head, the list was empty, newNode hence is both the head and the tail
      // we do that, and exit
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    // however, if there was an exsiting head, we need to attach the newNode at the end of the
    // existing list.
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  delete(value) {  // deleting all occurences of 'value' inside the list

    if (!this.head) {
      return null;   // if the list is empty, we cannot delete anything.
    }

    let deletedNode = null;

    // if we are going to delete the head, then the next differing node must be made the head
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    // now the current node will be the last element from the above while loop
    let currentNode = this.head;
    if (currentNode !== null) {
      // if next node is to be deleted, then make next's next to be next
      if (this.compare.equal(currentNode.next.value, value)) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next // since the value were not equal, we move on to the next node.
      }

      // check if the tail must be deleted
      if (this.compare.equal(this.tail.value, value)) {
        this.tail = currentNode;
      }

      return deletedNode;
    }
  }

  find({value = undefined, callback = undefined}) {
    // we traverse the list, trying to find the matching node, either with the value or with the callback
    if (!this.head) {
      // return null for empty linked-list
      return null;
    }

    let currentNode = this.head;  // starting with the current head
    while (currentNode) {
      // if callback is given, we try tp find a match with it
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      // if value is specified, we check by value
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      
      currentNode = currentNode.next;  // no match -> move on to the next node
    }

    return null;
  }

  deleteTail () {
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      // there was only one node, which was both head and tail, now the list becomes empty
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    // if there are many nodes in the list
    // traverse to the seond last node, remove its connection to the "tail" by removing the "next" link 
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null  // removing the link
      } else {
        currentNode = currentNode.next;
      }
    }
    // current node will become the tail now.
    this.tail = currentNode;
    return deletedTail;
  }

  deleteHead () {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;
    if (this.head.next) {  // if there is a node after the current head, make it head
      this.head = this.head.next;
    } else {  // if there is no node after the current head, that means the list will now be empty.
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }

  fromArray(values) {
    values.array.forEach(value => {
      this.append(value);
      return this;
    });
  }

  toArray () {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  reverse () {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
      // store the next node
      nextNode = currentNode.next;
      // change the "next" of currentNode to point to "previous" node
      currentNode.next = prevNode;
      // move prevNode & current node one step forward
      prevNode = currentNode;
      currentNode = nextNode;
    }

    // reset head and tail
    this.tail = this.head;
    this.head = prevNode;
    return this;
  }

  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }

}