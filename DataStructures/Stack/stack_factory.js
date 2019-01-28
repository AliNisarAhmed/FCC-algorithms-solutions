function Stack() {
  let collection = [];

  let obj = {
    push (elem) {
      collection.push(elem);
      return this;
    },
  
    pop () {
      return collection.pop();
    },
  
    peek () {
      return collection[collection.length - 1];
    },
  
    isEmpty () {
      return collection.length === 0;
    },
  
    clear () {
      collection.length = 0;
      return this;
    },
  
    getCollection () {
      return collection;
    },

    constructor: Stack,
  };

  return Object.freeze(obj);
}

export default Stack;