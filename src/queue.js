const { NotImplementedError } = require('../extensions/index.js');
const {assert} = require("chai");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.elements = [];
    this.head = 0;
    this.end = 0;
  }

  getUnderlyingList() {
   return this.convertArrayToList(this.elements);
  }

  convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }

      return new ListNode(cur);
    }, null);
  }

  enqueue(value) {
    this.elements[this.end] = value;
    this.end++;
  }

  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
}

module.exports = {
  Queue
};
