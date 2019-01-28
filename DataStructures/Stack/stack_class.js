
class Stack {
  constructor() {
    this.collection = [];
  }

  push (elem) {
    this.collection.push(elem);
    return this;
  }

  pop () {
    return this.collection.pop();
  }

  peek () {
    return this.collection[this.collection.length - 1];
  }

  isEmpty () {
    return this.collection.length === 0;
  }

  clear () {
    this.collection.length = 0;
    return this;
  }

  getCollection () {
    return this.collection;
  }
}

export default Stack;