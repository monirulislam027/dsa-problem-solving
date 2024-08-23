class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = node;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          if (!currentNode.left) {
            currentNode.left = node;
            break;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
      return this;
    }
  }

  BFS() {
    let currentNode = this.root;
    const data = [currentNode];

    while (data.length) {
      if (currentNode.right) {
        data.push(currentNode.right);
      }
      if (currentNode.left) {
        data.push(currentNode.left);
      }
      console.log(data[0].value);
      data.shift();
      currentNode = data[0];
    }
  }
  search(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return null;
  }

  // get the biggest value of root's left
  predecessor() {
    let currentNode = this.root.left;
    while (true) {
      if (!currentNode.right) {
        return currentNode.value;
      }
      currentNode = currentNode.right;
    }
  }
  // get the lowest value of root's right
  successor() {
    let currentNode = this.root.right;
    while (true) {
      if (!currentNode.left) {
        return currentNode.value;
      }
      currentNode = currentNode.left;
    }
  }
  inOrder(node) {
    if (node.left) {
      this.inOrder(node.left);
    }
    console.log(node.value);
    if (node.right) {
      this.inOrder(node.right);
    }
  }
  preOrder(node) {
    console.log(node.value);
    if (node.left) {
      this.preOrder(node.left);
    }
    if (node.right) {
      this.preOrder(node.right);
    }
  }
  postOrder(node) {
    if (node.left) {
      this.postOrder(node.left);
    }
    if (node.right) {
      this.postOrder(node.right);
    }
    console.log(node.value);
  }
}

const bst = new BST();

const data = {
  root: {
    value: "A",
    left: {
      value: "B",
      left: {
        value: "D",
        left: {
          value: "H",
          left: {
            value: "P",
            left: null,
            right: null,
          },
          right: null,
        },
        right: {
          value: "I",
          left: null,
          right: null,
        },
      },
      right: {
        value: "E",
        left: {
          value: "J",
          left: null,
          right: null,
        },
        right: {
          value: "K",
          left: {
            value: "Q",
            left: null,
            right: null,
          },
          right: null,
        },
      },
    },
    right: {
      value: "C",
      left: {
        value: "F",
        left: {
          value: "L",
          left: null,
          right: {
            value: "R",
            left: null,
            right: null,
          },
        },
        right: {
          value: "M",
          left: null,
          right: null,
        },
      },
      right: {
        value: "G",
        left: {
          value: "N",
          left: null,
          right: null,
        },
        right: {
          value: "O",
          left: null,
          right: null,
        },
      },
    },
  },
};

bst.inOrder(data.root);
