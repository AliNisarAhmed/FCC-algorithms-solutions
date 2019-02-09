export default class Set {
  constructor() {
    this.collection = [];
  }

  has (elem) {
    return this.collection.indexOf(elem) !== -1;
  }

  values () {
    return this.collection;
  }

  add (elem) {
    if (this.collection.includes(elem)) return false;
    this.collection.push(elem);
    return true;
  }

  remove (val) {
    let index = this.collection.indexOf(val);
    if (index !== -1) {
      this.collection.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  size () {
    return this.collection.length;
  }

  union (set2) {
    for (let elem of set2.values()) {
      this.add(elem);
    }
    return this;
  }

  intersection (set2) {
    const newSet = new Set();
    for (let elem of set2.values()) {
      if (this.collection.includes(elem)) {
        newSet.add(elem);
      }
    }
    return newSet
  }
}