const {NotImplementedError} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class TreeNode {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }

    root() {
        return this.rootNode;
    }

    add(data) {

        this.rootNode = this.insertionIterative(this.rootNode, data);

        return this;
    }

    insertionIterative(root, data) {

        let tempNode = new TreeNode(data),
            current = null;

        if (root === null) {
            root = tempNode;
            return root;
        } else {
            current = root;
        }

        while (true) {
            let parent = current;

            if (data < current.data) {
                current = current.left;
                if (current === null) {
                    parent.left = tempNode;
                    return root;
                }

            } else if (data > current.data) {
                current = current.right;

                if (current === null) {
                    parent.right = tempNode;
                    return root;
                }
            }
        }
    }

    has(data) {
        if (this.find(data)) {
            return true;
        }

        return false;
    }

    find(data) {
        return this.findIteratively(this.rootNode, data)
    }

    findIteratively(root, data) {
        while (root !== null) {
            if (root.data === data) {
                return root;
            }

            if (data < root.data) {
                root = root.left;
            } else {
                root = root.right;
            }
        }

        return null;
    }

    remove(data) {
        this.rootNode = this.removeNode(this.rootNode, data)
    }

    removeNode(root, data) {

        if (root == null) {
            return root;
        }

        if (data < root.data) {
            root.left = this.removeNode(root.left, data);
        } else if (data > root.data) {
            root.right = this.removeNode(root.right, data);
        } else {

            if (root.left === null) {
                return root.right;
            } else if (root.right === null)
                return root.left;

            root.data = this.findMin(root.right);
            root.right = this.removeNode(root.right, root.data);
        }

        return root;
    }

    findMin(root) {
        let min = root.data;
        while (root.left !== null) {
            min = root.left.data;
            root = root.left;
        }
        return min;
    }

    findMax(root) {
        let max = root.data;
        while (root.right !== null) {
            max = root.right.data;
            root = root.right;
        }
        return max;
    }

    min() {
        return this.findMin(this.rootNode);
    }

    max() {
        return this.findMax(this.rootNode);
    }
}

module.exports = {
    BinarySearchTree
};