"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (val === this.val) {
      return this;
    } else {
      if (val < this.val) {
        if (!this.left) return undefined
        return this.left.findRecursively(val);
      } else if (val > this.val) {
        if (!this.right) return undefined
        return this.right.findRecursively(val);
      }
    }
  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    if (val < this.val) {
      if (this.left) {
        this.left.insertRecursively(val);
      } else {
        this.left = new Node(val);
      }
    } else {
      if (this.right) {
        this.right.insertRecursively(val);
      } else {
        this.right = new Node(val);
      }
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {

    let arr = [];

    if (!this) return;

    arr.push(this.val);

    if (this.left) arr.push(...this.left.dfsPreOrder());
    if (this.right) arr.push(...this.right.dfsPreOrder());

    return arr;

  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {
    let arr = [];

    if (!this) return;


    if (this.left) arr.push(...this.left.dfsInOrder());
    arr.push(this.val);
    if (this.right) arr.push(...this.right.dfsInOrder());

    return arr;
  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {
    let arr = [];

    if (!this) return;


    if (this.left) arr.push(...this.left.dfsPostOrder());
    if (this.right) arr.push(...this.right.dfsPostOrder());
    arr.push(this.val);

    return arr;
  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    let assigned = false;

    if (!this.root) {
      this.root = new Node(val);
      assigned = true;
    }

    let current = this.root;

    while (!assigned) {
      if (val < current.val) {
        if (!current.left) {
          current.left = new Node(val);
          assigned = true;
        } else {
          current = current.left;
        }
        // TODO: What should we do when val === current.val?
      } else {
        if (!current.right) {
          current.right = new Node(val);
          assigned = true;
        } else {
          current = current.right;
        }
      }
    }

    return this;

  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val);
    } else {
      this.root.insertRecursively(val);
    }

    return this;
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) {
      return undefined;
    }

    let found = false;
    let current = this.root;

    while (!found) {
      if (!current) {
        return undefined;
      }
      if (val === current.val) {
        found = true;
      } else {
        if (val < current.val) {
          current = current.left;
        } else if (val > current.val) {
          current = current.right;
        }
      }
    }
    return current;
  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) {
      return undefined;
    }

    return this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    if (!this.root) return [];
    return this.root.dfsPreOrder();

  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    if (!this.root) return [];
    return this.root.dfsInOrder();
  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {
    if (!this.root) return [];
    return this.root.dfsPostOrder();
  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {
    let visitedArray = [];
    if (!this.root) return visitedArray;

    let todoQueue = [this.root];

    while (todoQueue.length) {
      let current = todoQueue.shift();

      visitedArray.push(current.val);

      if (current.left) todoQueue.push(current.left);
      if (current.right) todoQueue.push(current.right);
    }
    return visitedArray;
  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
