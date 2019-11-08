

// function Node(value) {
//   this.value = value;
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
  }

  /**  
   * Add Front

Rudy isn’t nice: he cuts in line in front of everyone else. 
Given a pointer to the first ListNode and a value, create a new node, 
assign it to the list head, and return a pointer to the new head node.
  */
  addFront(value) {
    const node = new Node(value);

    node.next = this.head;

    this.head = node;

    return this;
  }


  /** 
   * Remove Front

Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, 
remove the head node and return the new list head node. If the list is empty, return null.
   * 
  */

  removeFront() {
    const node = this.head;

    if (node) {
      this.head = node.next;
    }


    return this;
  }

  /**  
   * Front

Finally, Tad and Sam reach the front of the line to get movie tickets. 
Oh no – only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) 
at the head of the list. If the list is empty, return null.
   * 
  */

  front() {
    return this.head ? this.head.value : null;
    // (expression) ? (if true) : (if false);
    if (this.head) {
      return this.head.value;
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.head === null;

    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }

  /**  
   * 
Contains

Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. 
Given a ListNode pointer and a val, return whether val is found in any node in the list.

  */

  contains(value) {
    if (this.isEmpty()) {
      return false;
    }

    let runner = this.head;

    while (runner) {
      if (runner.value === value) {
        return true;
      }
      console.log('in while llop node has value', runner);
      runner = runner.next;
    }

    return false;
  }

  /**  
   * 
Length

July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. 
Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList.

  */

  get length() {
    let nodeCount = 0;

    this.traverse(function () {
      nodeCount = nodeCount + 1;
    });


    return nodeCount;
  }

  /**  
   * 
Display

Create display(node) for debugging that returns a string containing all list values. 
Build what you wish console.log(myList) did!

  */

  print() {
    this.traverse(function (node) {
      console.log(`The node has a value of ${node.value}`);
    });
    return this;
  }

  traverse(callback) {
    // console.log(callback.toString());
    // callback(90099000);

    let runner = this.head;

    while (runner) {
      // do something\
      callback(runner);

      // advance our list
      runner = runner.next;
    }
  }
}


// function removeFront(head) {

// }


const list = new List();

const node = new Node(7);
// const node1 = new Node(11);

// node.next = node1;

// list.head = node;
list.addFront(11).addFront(9).addFront(15).addFront(99)

console.log('before', list);
// list.removeFront();

// list.addFront(node);
console.log(list.contains(11));

console.log('afdter', list.print());
console.log('afdter', list.length);
