class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.value = val;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert(val) {
  //   let newNode = new Node(val);
  //   if (!this.root) return (this.root = newNode);

  //   if (this.root.value < val) {
  //     if (!this.root.right) return (this.root.right = newNode);
  //     return this.root.right.insert(val);
  //   } else {
  //     if (!this.root.left) return (this.root.left = newNode);
  //     return this.root.left.insert(val);
  //   }
  // }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) return (this.root = newNode);
    let currentNode = this.root;
    while (currentNode) {
      if (val > currentNode.value) {
        if (!currentNode.right) return (currentNode.right = newNode);
        currentNode = currentNode.right;
      } else if (val < currentNode.value) {
        if (!currentNode.left) return (currentNode.left = newNode);
        currentNode = currentNode.left;
      } else {
        return null;
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) return true;
      if (value < currentNode.value) {
        if (!currentNode.left) return false;
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) return false;
        currentNode = currentNode.right;
      }
    }
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(12);
bst.insert(11);
bst.insert(9);
bst.insert(7);
bst.insert(6);

console.log(bst.find(2));
console.log(bst);
