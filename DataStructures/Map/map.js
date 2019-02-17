class Map {
  constructor() {
    this.collection = {};
  }

  add (key, value) {
    this.collection[key] = value;
    return this;
  }

  remove (key) {
    delete this.collection[key];
    return this;
  }

  get (key) {
    return this.collection[key];
  }

  has (key) {
    return this.collection.hasOwnProperty(key);
  }

  values () {
    return Object.values(this.collection);
  }

  size () {
    return this.values().length;
  }

  clear () {
    this.collection = {};
    return this;
  }
}