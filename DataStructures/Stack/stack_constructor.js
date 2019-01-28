function Stack () {
  let collection = [];
}
  


  Stack.prototype.push = (elem) => {
    collection.push(elem);
    return this;
  }

  Stack.prototype.pop = () => {
    return collection.pop();
  }

  Stack.prototype.peek = () => {
    return collection[collection.length - 1];
  }

  Stack.prototype.isEmpty = () => {
    return collection.length === 0;
  }

  Stack.prototype.clear = () => {
    collection.length = 0;
    return this;
  }

  Stack.prototype.getCollection = () => {
    return collection;
  }


export default Stack;