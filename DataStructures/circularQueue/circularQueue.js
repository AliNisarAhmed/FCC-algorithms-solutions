class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size;
    this.isFull = false;

    while (size > 0) {
       this.queue.push(null);
       size--;
    }

  }

  print() {
    return this.queue;
  }


  enqueue(item) {
   // Only change code below this line
    if (this.isFull) {
      // List is full
      return this;
    } else {  // list is neither empty nor full
      // console.log('write: ', this.write)
      this.queue[this.write] = item;
      this.write = (this.write + 1) % this.max; 
      if (this.write === this.read) {
        this.isFull = true
      }
      return this;
    }
   // Only change code above this line
  }

  dequeue() {
   // Only change code below this line
    if (this.read === this.write && !this.isFull) {  // meaning the list is empty
      return null;
    } else {
      let item = this.queue[this.read];
      this.read = (this.read + 1) % this.max;
      if (this.isFull) this.isFull = false;  // list is no longer full
      return item;
    }
   // Only change code above this line
  }
}

export default CircularQueue;