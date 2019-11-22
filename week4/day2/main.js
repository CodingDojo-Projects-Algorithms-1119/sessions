

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
   * 
   * @param {BST: Add Create an add(val) method on the BST object to add new value to the tree. 
   * This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. 
   * Unless specified otherwise, BSTs can contain duplicate values.} 
   * newNode 
   */
  add(newNode) {
    console.log(`attempting to place node with value ${newNode.value} -- comparing with ${this.value}`);
    if (newNode.value < this.value) {
      // go left 
      if (this.left) {
        return this.left.add(newNode);
      }

      this.left = newNode;
    } else {
      if (this.right) {
        return this.right.add(newNode);
      }

      this.right = newNode;
    }

    return this;
  }


  /**  
   * BST: Contains
Create a contains(val) method on BST that returns whether the tree contains a given value. 
Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.
  */

  contains(value) {
    if (this.value === value) {
      return true;
    }

    if (value < this.value) {
      // go left
      if (this.left) {
        return this.left.contains(value);
      }
    } else {
      // go right
      if (this.right) {
        return this.right.contains(value);
      }
    }

    return false;
  }

  /**  
   * BST: Min
Create a min() method on the BST class that returns the smallest value found in the BST.
  */

  min() {
    if (this.left) {
      return this.left.min();
    }

    return this.value;
  }

  /**  
   * BST: Max
Create a max() BST method that returns the largest value contained in the binary search tree.
  */

  max() {
    return this.right ? this.right.max() : this.value;
  }

  /** 
   * BST: Size
Write a size() method that returns the number of nodes (values) contained in the tree.
  */

  size() {
    let count = 1;

    if (this.left) {
      console.log(`counting left of node ${this.value}`);
      count += this.left.size();
    }

    if (this.right) {
      console.log(`counting right of node ${this.value}`);

      count += this.right.size();
    }

    return count;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(newNode) {
    if (!(newNode instanceof Node)) {
      newNode = new Node(newNode);
    }

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.root.add(newNode);
      // add new newNode  to tree

      // console.log(`need to add newNode with value ${newNode.value} to tree`);

      // let currentNode = this.root;

      // while (currentNode) {
      //   if (newNode.value < currentNode.value) {
      //     // go left 
      //     if (currentNode.left) {
      //       currentNode = currentNode.left;
      //     } else {
      //       currentNode.left = newNode;
      //       break;
      //     }
      //   } else {
      //     // go right 
      //     if (currentNode.right) {
      //       currentNode = currentNode.right;
      //     } else {
      //       currentNode.right = newNode;
      //       break;
      //     }
      //   }
      // }
    }



    return this;
  }

  isEmpty() {
    return this.root === null;
  }

  contains(value) {
    // (expression) ? (if true) : (if false)
    return this.isEmpty() ? false : this.root.contains(value);


    if (this.isEmpty()) {
      return false;
    }

    return this.root.contains(value);
  }

  min() {
    return this.isEmpty() ? null : this.root.min();
  }

  max() {
    return this.isEmpty() ? null : this.root.max();
  }

  size() {
    return this.isEmpty() ? 0 : this.root.size();
  }
}

const tree = new Tree();

const node1 = new Node(10);

// tree.root = node1;
// console.log(`tree is empty? ${tree.isEmpty()}`);

tree.add(node1).add(7).add(17).add(11).add(9).add(21).add(4).add(5).add(1).add(23).add(10000);

console.log(tree.contains(-1));
console.log(tree.min())
console.log(tree.max())
console.log(tree.size())

// console.log(`tree is empty? ${tree.isEmpty()}`);