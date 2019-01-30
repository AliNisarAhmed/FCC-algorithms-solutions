function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function (item) {
    if (this.collection.length === 0) {  // if colleciton is empty, just push the item in the list
      this.collection.push(item);
    
    } else {  
      // else, we need to check the priority of the incoming item & compare it to items in list till 
      // we get to the first item whose priority is higher than or item,
      // we insert the item right before it.
      let index = this.collection.findIndex(x => x[1] > item[1]);
      if (index !== -1) {
        this.collection.splice(index, 0, item);
      } else {
        this.collection.push(item);
      }
    }
    return this;
  };

  this.dequeue = function () {
    return this.collection.shift()[0];  // return the Item without the priority number;
  }

  this.size = function () {
      return this.collection.length;
  }

  this.isEmpty = function () {
      return this.collection.length === 0;
  }
  // Only change code above this line
}

export default PriorityQueue;