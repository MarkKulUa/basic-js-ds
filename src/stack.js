const { NotImplementedError } = require('../extensions/index.js');
const {assert} = require("chai");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
  }

  push(element) {
    this.arr.push(element);

    return this;
  }

  pop() {
    return this.arr.pop();
  }

  peek() {
    return this.arr.slice(-1)[0]
  }
}

module.exports = {
  Stack
};
