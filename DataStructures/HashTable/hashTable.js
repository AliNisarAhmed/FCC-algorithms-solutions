var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
// var HashTable = function() {
//   this.collection = {};
//   // change code below this line
//   add 
//   // change code above this line
// };

class HashTable {
  constructor () {
    this.collection = {};
  }
  add (key, value) {
    let newHash = hash(String(key));
    if (!this.collection[newHash]) {
      this.collection[newHash] = {};
    }
    this.collection[newHash][key] = value
  }

  remove (key) {
    let keyHash = hash(String(key));
    if (this.collection[keyHash]) {
      for (let k of Object.keys(this.collection[keyHash])) {
        if (k === key) {
          delete this.collection[keyHash][key];
        }
      }
    }
  }

  lookup (key) {
    let keyHash = hash(String(key))
    let value = this.collection[keyHash][key];
    return value ? value : null;
  }
}