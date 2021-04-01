class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const node = new Node(val);

    if (this.root === null) {
      this.root = node;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (currentNode.val > val) {
        if (!currentNode.left) {
          currentNode.left = node;
          return this;
        }
        currentNode = currentNode.left;
      }

      if (currentNode.val < val) {
        if (!currentNode.right) {
          currentNode.right = node;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (current.val > val) {
      if (!current.left) {
        current.left = new Node(val);
        return this;
      } else {
        return this.insertRecursively(val, current.left);
      }
    }

    if (current.val < val) {
      if (!current.right) {
        current.right = new Node(val);
        return this;
      } else {
        return this.insertRecursively(val, current.right);
      }
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) return undefined;

    let current = this.root;

    while (current !== null) {
      if (current.val === val) return current;
      if (current.val > val) {
        current = current.left;
      }
      if (current.val < val) {
        current = current.right;
      }
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (current === null) return undefined;
    if (current.val === val) return current;
    if (current.val > val) return this.findRecursively(val, current.left)
    if (current.val < val) return this.findRecursively(val, current.right)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const treeArray = [];
    let current = this.root;

    function traverse(node) {
      treeArray.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return treeArray;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const treeArray = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      treeArray.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return treeArray;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const treeArray = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      treeArray.push(node.val);
    }

    traverse(current);
    return treeArray;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const queue = [this.root];
    const data = [];

    while (queue.length > 0) {
      let currentNode = queue.shift();
      data.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return data;
  }
}

module.exports = BinarySearchTree;
