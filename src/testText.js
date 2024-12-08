export const resetText = `
function isPrime(n) {

}// Big-O: 

function isPowerOfTwo(n) {

}// Big-O: 

function recursiveFibonacci(n) {

}// Big-O: 

function recursiveFactorial(n) {

}// Big-O: 

function linearSearch(arr, tar) {

}// Big-O: 

function binarySearch(arr,tar) {

}// Big-O: 

function bubbleSort(arr) {

}// Big-O: 

function insertionSort(arr) {

}// Big-O: 

function quickSort(arr) {

}// Big-O: 

function mergeSort(arr) {
    
}// Big-O: 

class LinkedList {
    constructor() {

    }// Big-O: 
    isEmpty() {

    }// Big-O: 
    getSize() {

    }// Big-O: 
    prepend(value) {

    }// Big-O: 
    append(value) {

    }// Big-O: 
    removeFromFront() {

    }// Big-O: 
    removeFromEnd() {

    }// Big-O: 
    insert(value,index) {

    }// Big-O: 
    removeFrom(index) {

    }// Big-O: 
    removeValue(value) {

    }// Big-O: 
    search(value) {

    }// Big-O: 
    reverse() {

    }// Big-O: 
    print() {

    }// Big-O: 
}

class HashTable {
    constructor(size) {

    }// Big-O: 
    hash(key) {

    }// Big-O: 
    set(key, value) {

    }// Big-O: 
    get(key) {

    }// Big-O: 
    remove(key) {

    }// Big-O: 
    display() {

    }// Big-O: 
}

class BinarySearchTree {
    constructor() {

    }// Big-O: 
    isEmpty() {

    }// Big-O: 
    insert(value) {

    }// Big-O: 
    insertNode(root,node) {

    }// Big-O: 
    search(root,value) {

    }// Big-O: 
    preOrder(root) {

    }// Big-O: 
    inOrder(root) {

    }// Big-O: 
    postOrder(root) {

    }// Big-O: 
    levelOrder() {

    }// Big-O: 
    min(root) {

    }// Big-O: 
    max(root) {

    }// Big-O: 
    delete(value) {

    }// Big-O: 
    deleteNode(root, value) {

    }// Big-O: 
}

class Graph {
    constructor() {

    }// Big-O: 
    addVertex(vertex) {

    }// Big-O: 
    addEdge(vertex1, vertex2) {

    }// Big-O: 
    removeEdge(vertex1, vertex2) {

    }// Big-O: 
    removeVertex(vertex) {

    }// Big-O:
    hasVertex(vertex) {

    }// Big-O:
    hasEdge(vertex1, vertex2) {

    }// Big-O: 
    display() {

    }// Big-O: 
}

// isPrime
console.log('isPrime Test 1: ', isPrime(1) === false);
console.log('isPrime Test 2: ', isPrime(2) === true);
console.log('isPrime Test 3: ', isPrime(5) === true);

// isPowerOfTwo
console.log('isPowerOfTwo Test 1: ', isPowerOfTwo(1) === true);
console.log('isPowerOfTwo Test 2: ', isPowerOfTwo(2) === true);
console.log('isPowerOfTwo Test 3: ', isPowerOfTwo(5) === false);

// recursiveFibonacci
console.log('recursiveFibonacci Test 1: ', recursiveFibonacci(0) === 0);
console.log('recursiveFibonacci Test 2: ', recursiveFibonacci(1) === 1);
console.log('recursiveFibonacci Test 3: ', recursiveFibonacci(6) === 8);

// recursiveFactorial
console.log('recursiveFactorial Test 1: ', recursiveFactorial(0) === 1);
console.log('recursiveFactorial Test 1: ', recursiveFactorial(1) === 1);
console.log('recursiveFactorial Test 1: ', recursiveFactorial(5) === 120);

// Linear Search
console.log('linearSearch Test 1: ', linearSearch([-5, 2, 10, 4, 6], 10) === 2);
console.log('linearSearch Test 2: ', linearSearch([-5, 2, 10, 4, 6], 6) === 4);
console.log(
  'linearSearch Test 3: ',
  linearSearch([-5, 2, 10, 4, 6], 20) === -1
);

// Binary Search
console.log('binarySearch Test 1: ', binarySearch([-5, 2, 4, 6, 10], 10) === 4);
console.log('binarySearch Test 2: ', binarySearch([-5, 2, 4, 6, 10], 6) === 3);
console.log(
  'binarySearch Test 3: ',
  binarySearch([-5, 2, 4, 6, 10], 20) === -1
);

// Bubble Sort
const arrBubbleSort = [8, 20, -2, 4, -6];
bubbleSort(arrBubbleSort);
console.log('bubbleSort Test 1: [-6,-2,4,8,20] === ', arrBubbleSort);

// Insertion Sort
const arrInsertionSort = [8, 20, -2, 4, -6];
insertionSort(arrInsertionSort);
console.log('insertionSort Test 1: [-6,-2,4,8,20] === ', arrInsertionSort);

// Quick Sort
const arrQuickSort = [8, 20, -2, 4, -6];
console.log('quickSort Test 1: [-6,-2,4,8,20] === ', quickSort(arrQuickSort));

// Merge Sort
const arrMergeSort = [8, 20, -2, 4, -6];
console.log('mergeSort Test 1: [-6,-2,4,8,20] === ', mergeSort(arrMergeSort));

// Linked-List
const list = new LinkedList();
console.log('LinkedList Test 1 - IsEmpty: ', list.isEmpty() === true);

list.prepend(10);
console.log(
  'LinkedList Test 2 - prepend: ',
  list.print() === '10, ',
  list.getSize() === 1
);

list.append(30);
console.log(
  'LinkedList Test 3 - append: ',
  list.print() === '10, 30, ',
  list.getSize() === 2
);

console.log(
  'LinkedList Test 4 - removeFromFront: ',
  list.removeFromFront() === 10,
  list.getSize() === 1
);
console.log(
  'LinkedList Test 5 - removeFromFront: ',
  list.removeFromFront() === 30,
  list.isEmpty() === true
);
list.prepend(10);
list.prepend(20);
console.log(
  'LinkedList Test 6 - removeFromEnd: ',
  list.removeFromEnd() === 10,
  list.getSize() === 1
);
console.log(
  'LinkedList Test 7 - removeFromEnd: ',
  list.removeFromEnd() === 20,
  list.isEmpty() === true
);

console.log(
  'LinkedList Test 8 - insert: ',
  list.insert(10, 1) === -1,
  list.isEmpty() === true
);
console.log(
  'LinkedList Test 9 - insert: ',
  list.insert(10, -1) === -1,
  list.isEmpty() === true
);
list.insert(10, 0);
console.log(
  'LinkedList Test 10 - insert: ',
  list.print() === '10, ',
  list.isEmpty() === false
);
console.log(
  'LinkedList Test 11 - insert: ',
  list.insert(20, 1) === -1,
  list.print() === '10, '
);
console.log(
  'LinkedList Test 12 - insert: ',
  list.insert(20, 1) === -1,
  list.print() === '10, '
);

console.log(
  'LinkedList Test 13 - removeFrom: ',
  list.removeFrom(-1) === -1,
  list.print() === '10, '
);
console.log(
  'LinkedList Test 14 - removeFrom: ',
  list.removeFrom(1) === -1,
  list.print() === '10, '
);
list.prepend(20);
list.prepend(30);
console.log(
  'LinkedList Test 15 - removeFrom: ',
  list.removeFrom(1) === 20,
  list.print() === '30, 10, '
);
console.log(
  'LinkedList Test 16 - removeFrom: ',
  list.removeFrom(1) === 10,
  list.print() === '30, '
);
console.log(
  'LinkedList Test 17 - removeFrom: ',
  list.removeFrom(0) === 30,
  list.isEmpty() === true
);

console.log(
  'LinkedList Test 18 - removeValue: ',
  list.removeValue(10) === -1,
  list.isEmpty() === true
);
list.prepend(20);
list.prepend(30);
list.prepend(10);
console.log(
  'LinkedList Test 19 - removeValue: ',
  list.removeValue(0) === -1,
  list.print() === '10, 30, 20, '
);
console.log(
  'LinkedList Test 20 - removeValue: ',
  list.removeValue(20) === 20,
  list.print() === '10, 30, '
);
console.log(
  'LinkedList Test 21 - removeValue: ',
  list.removeValue(10) === 10,
  list.print() === '30, '
);
console.log(
  'LinkedList Test 22 - removeValue: ',
  list.removeValue(30) === 30,
  list.isEmpty() === true
);

console.log(
  'LinkedList Test 23 - search: ',
  list.search(30) === -1,
  list.isEmpty() === true
);
list.prepend(20);
list.prepend(30);
list.prepend(10);
list.print();
console.log(
  'LinkedList Test 24 - search: ',
  list.search(30) === 1,
  list.print() === '10, 30, 20, '
);
console.log(
  'LinkedList Test 25 - search: ',
  list.search(20) === 2,
  list.print() === '10, 30, 20, '
);
console.log(
  'LinkedList Test 26 - search: ',
  list.search(10) === 0,
  list.print() === '10, 30, 20, '
);

list.reverse();
console.log('LinkedList Test 27 - reverse: ', list.print() === '20, 30, 10, ');

list.reverse();
console.log('LinkedList Test 28 - print: ', list.print() === '10, 30, 20, ');
list.removeFromEnd();
list.removeFromEnd();
list.removeFromEnd();
console.log(
  'LinkedList Test 29 - print: ',
  list.print() === 'This list is empty',
  list.isEmpty() === true
);

// Hash Table
const table = new HashTable(50);
table.set('name', 'bruce');
table.set('age', 25);
console.log('HashTable Test 1 - set: ', table.get('name') === 'bruce');
table.set('mane', 'Clark');
table.set('name', 'Diana');
console.log('HashTable Test 2 - set: ', table.get('name') === 'Diana');
table.remove('name');
console.log('HashTable Test 3 - remove: ', table.get('name') === undefined);
console.log("HashTable Test 4 - display: [[ 'age', 25 ]], [['mane', 'Clark']]");
table.display();

// Binary Search Tree
const bst = new BinarySearchTree();
console.log('BinarySearchTree Test 1 - empty: ', bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log('BinarySearchTree Test 2 - search: ', bst.search(bst.root, 10));
console.log('BinarySearchTree Test 3 - search: ', bst.search(bst.root, 5));
console.log('BinarySearchTree Test 4 - search: ', bst.search(bst.root, 15));
console.log('BinarySearchTree Test 5 - search: ', bst.search(bst.root, 3));
console.log(
  'BinarySearchTree Test 6 - search: ',
  bst.search(bst.root, 4) === false
);

console.log('BinarySearchTree Test 7 - preOrder: 10, 5, 3, 7, 15');
bst.preOrder(bst.root);
console.log('BinarySearchTree Test 8 - inOrder: 3, 5, 7, 10, 15');
bst.inOrder(bst.root);
console.log('BinarySearchTree Test 9 - postOrder: 3, 7, 5, 15, 10');
bst.postOrder(bst.root);
console.log('BinarySearchTree Test 10 - levelOrder: 10, 5, 15, 3, 7');
bst.levelOrder();
console.log('BinarySearchTree Test 11 - min: ', bst.min(bst.root) === 3);
console.log('BinarySearchTree Test 12 - max: ', bst.max(bst.root) === 15);
bst.delete(10);
console.log(
  'BinarySearchTree Test 13 - delete: ',
  bst.search(bst.root, 10) === false
);

// Graph
const graph = new Graph();
graph.addVertex('A');
console.log(
  'Graph Test 1 - addVertex/hasVertex: ',
  graph.hasVertex('A') !== undefined
);
graph.addEdge('A', 'B');
console.log(
  'Graph Test 2 - addEdge/hasEdge: ',
  graph.hasEdge('A', 'B') !== undefined
);
graph.addEdge('A', 'C');
graph.removeEdge('A', 'B');
console.log('Graph Test 3 - removeEdge: ', graph.hasEdge('A', 'B') === false);
graph.removeVertex('B');
console.log(
  'Graph Test 4 - removeVertex: ',
  graph.hasVertex('B') === undefined
);
console.log('Graph Test 5 - display: A -> C C -> A');
graph.display();

`;


export const compareText = `
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
} // Big-O: O(sqrt(n))

function isPowerOfTwo(n) {
  if (n === 0) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
} // Big-O: O(logn)

function recursiveFibonacci(n) {
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
} // Big-O: O(n)

function recursiveFactorial(n) {
  if (n === 0) return 1;
  return n * recursiveFactorial(n - 1);
} // Big-O: O(n)

function linearSearch(arr, tar) {
  for (let i = 0; i < arr.length; i++) {
    if (tar === arr[i]) return i;
  }
  return -1;
} // Big-O: O(n)

function binarySearch(arr, tar) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (tar === arr[mid]) return mid;
    if (tar < arr[mid]) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
} // Big-O: O(logn)

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
} // Big-O: O(n^2)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    const num = arr[i];
    while (j >= 0 && arr[j] > num) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = num;
  }
} // Big-O: O(n^2)

function quickSort(arr) {
  if (arr.length < 2) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
} // Big-O: O(n^2) Avg: O(nlogn)

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
} // Big-O: O(nlogn)

function merge(left, right) {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) sorted.push(left.shift());
    else sorted.push(right.shift());
  }
  return [...sorted, ...left, ...right];
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  } // Big-O: O(1)
  isEmpty() {
    return this.size === 0 && this.head === null && this.tail === null;
  } // Big-O: O(1)
  getSize() {
    return this.size;
  } // Big-O: O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  } // Big-O: O(1)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  } // Big-O: O(1)
  removeFromFront() {
    if (this.isEmpty()) return -1;
    const removedNode = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  } // Big-O: O(1)
  removeFromEnd() {
    if (this.isEmpty()) return -1;
    const removedNode = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) prev = prev.next;
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return removedNode.value;
  } // Big-O: O(n)
  insert(value, index) {
    if (
      index < 0 ||
      (index >= this.size && !this.isEmpty()) ||
      (index > this.size && this.isEmpty())
    )
      return -1;
    if (index === 0) this.prepend(value);
    else if (index === this.size - 1) this.append(value);
    else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) prev = prev.next;
      const node = new Node(value);
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  } // Big-O: O(n)
  removeFrom(index) {
    if (index < 0 || index >= this.size || this.isEmpty()) return -1;
    if (index === 0) return this.removeFromFront();
    if (index === this.size - 1) return this.removeFromEnd();
    else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) prev = prev.next;
      const removedNode = prev.next;
      prev.next = removedNode.next;
      this.size--;
      return removedNode.value;
    }
  } // Big-O: O(n)
  removeValue(value) {
    if (this.isEmpty()) return -1;
    if (value === this.head.value) return this.removeFromFront();
    else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) prev = prev.next;
      if (prev.next) {
        const removedNode = prev.next;
        if (prev.next === this.tail) {
          prev.next = null;
          this.tail = prev;
        } else {
          prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
      } else return -1;
    }
  } // Big-O: O(n)
  search(value) {
    if (this.isEmpty()) return -1;
    let curr = this.head;
    let i = 0;
    while (curr) {
      if (curr.value === value) return i;
      i++;
      curr = curr.next;
    }
    return -1;
  } // Big-O: O(n)
  reverse() {
    let prev = null;
    let curr = this.head;
    this.tail = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  } // Big-O: O(n)
  print() {
    if (this.isEmpty()) {
      console.log('This list is empty');
      return 'This list is empty';
    } else {
      let listValues = '';
      let curr = this.head;
      while (curr) {
        listValues += \` \${curr.value}, \`;
        curr = curr.next;
      }
      console.log(listValues);
      return listValues;
    }
  } // Big-O:  O(n)
}

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  } // Big-O: O(1)
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) total += key.charCodeAt(i);
    return total % this.size;
  } // Big-O: O(n)
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) this.table[index] = [[key, value]];
    else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) sameKeyItem[1] = value;
      else bucket.push([key, value]);
    }
  } // Big-O: O(1)
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) return sameKeyItem[1];
    }
    return undefined;
  } // Big-O: O(1)
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) bucket.splice(bucket.indexOf(sameKeyItem), 1);
    }
  } // Big-O: O(1)
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) console.log(i, this.table[i]);
    }
  } // Big-O: O(n)
}

class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  } // Big-O: O(1)
  isEmpty() {
    return this.root === null;
  } // Big-O: O(1)
  insert(value) {
    const node = new BSTNode(value);
    if (this.isEmpty()) this.root = node;
    else this.insertNode(this.root, node);
  } // Big-O: O(logn)
  insertNode(root, node) {
    if (node.value < root.value) {
      if (!root.left) root.left = node;
      else this.insertNode(root.left, node);
    } else {
      if (!root.right) root.right = node;
      else this.insertNode(root.right, node);
    }
  } // Big-O: O(logn)
  search(root, value) {
    if (!root) return false;
    if (value === root.value) return true;
    if (value < root.value) return this.search(root.left, value);
    return this.search(root.right, value);
  } // Big-O: O(logn)
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  } // Big-O: O(n)
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  } // Big-O: O(n)
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  } // Big-O: O(n)
  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      const curr = queue.shift();
      console.log(curr.value);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  } // Big-O: O(n)
  min(root) {
    if (!root.left) return root.value;
    return this.min(root.left);
  } // Big-O: O(logn)
  max(root) {
    if (!root.right) return root.value;
    return this.max(root.right);
  } // Big-O: O(logn)
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  } // Big-O: O(logn)
  deleteNode(root, value) {
    if (!root) return root;
    if (value < root.value) this.deleteNode(root.left, value);
    else if (value > root.value) this.deleteNode(root.right, value);
    else {
      if (!root.left && !root.right) return null;
      if (!root.left) return root.right;
      if (!root.right) return root.left;
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  } // Big-O: O(logn)
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  } // Big-O: O(1)
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
  } // Big-O: O(1)
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  } // Big-O: O(1)
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  } // Big-O: O(1)
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;
    for (let adjVertex of this.adjacencyList[vertex])
      this.removeEdge(adjVertex, vertex);
    delete this.adjacencyList[vertex];
  } // Big-O:O(n)
  hasVertex(vertex) {
    return this.adjacencyList[vertex];
  } // Big-O:
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  } // Big-O: O(1)
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]]);
    }
  } // Big-O: O(n)
}

// isPrime
console.log('isPrime Test 1: ', isPrime(1) === false);
console.log('isPrime Test 2: ', isPrime(2) === true);
console.log('isPrime Test 3: ', isPrime(5) === true);

// isPowerOfTwo
console.log('isPowerOfTwo Test 1: ', isPowerOfTwo(1) === true);
console.log('isPowerOfTwo Test 2: ', isPowerOfTwo(2) === true);
console.log('isPowerOfTwo Test 3: ', isPowerOfTwo(5) === false);

// recursiveFibonacci
console.log('recursiveFibonacci Test 1: ', recursiveFibonacci(0) === 0);
console.log('recursiveFibonacci Test 2: ', recursiveFibonacci(1) === 1);
console.log('recursiveFibonacci Test 3: ', recursiveFibonacci(6) === 8);

// recursiveFactorial
console.log('recursiveFactorial Test 1: ', recursiveFactorial(0) === 1);
console.log('recursiveFactorial Test 1: ', recursiveFactorial(1) === 1);
console.log('recursiveFactorial Test 1: ', recursiveFactorial(5) === 120);

// Linear Search
console.log('linearSearch Test 1: ', linearSearch([-5, 2, 10, 4, 6], 10) === 2);
console.log('linearSearch Test 2: ', linearSearch([-5, 2, 10, 4, 6], 6) === 4);
console.log(
  'linearSearch Test 3: ',
  linearSearch([-5, 2, 10, 4, 6], 20) === -1
);

// Binary Search
console.log('binarySearch Test 1: ', binarySearch([-5, 2, 4, 6, 10], 10) === 4);
console.log('binarySearch Test 2: ', binarySearch([-5, 2, 4, 6, 10], 6) === 3);
console.log(
  'binarySearch Test 3: ',
  binarySearch([-5, 2, 4, 6, 10], 20) === -1
);

// Bubble Sort
const arrBubbleSort = [8, 20, -2, 4, -6];
bubbleSort(arrBubbleSort);
console.log('bubbleSort Test 1: [-6,-2,4,8,20] === ', arrBubbleSort);

// Insertion Sort
const arrInsertionSort = [8, 20, -2, 4, -6];
insertionSort(arrInsertionSort);
console.log('insertionSort Test 1: [-6,-2,4,8,20] === ', arrInsertionSort);

// Quick Sort
const arrQuickSort = [8, 20, -2, 4, -6];
console.log('quickSort Test 1: [-6,-2,4,8,20] === ', quickSort(arrQuickSort));

// Merge Sort
const arrMergeSort = [8, 20, -2, 4, -6];
console.log('mergeSort Test 1: [-6,-2,4,8,20] === ', mergeSort(arrMergeSort));

// Linked-List
const list = new LinkedList();
console.log('LinkedList Test 1 - IsEmpty: ', list.isEmpty() === true);

list.prepend(10);
console.log(
  'LinkedList Test 2 - prepend: ',
  list.print() === '10, ',
  list.getSize() === 1
);

list.append(30);
console.log(
  'LinkedList Test 3 - append: ',
  list.print() === '10, 30, ',
  list.getSize() === 2
);

console.log(
  'LinkedList Test 4 - removeFromFront: ',
  list.removeFromFront() === 10,
  list.getSize() === 1
);
console.log(
  'LinkedList Test 5 - removeFromFront: ',
  list.removeFromFront() === 30,
  list.isEmpty() === true
);
list.prepend(10);
list.prepend(20);
console.log(
  'LinkedList Test 6 - removeFromEnd: ',
  list.removeFromEnd() === 10,
  list.getSize() === 1
);
console.log(
  'LinkedList Test 7 - removeFromEnd: ',
  list.removeFromEnd() === 20,
  list.isEmpty() === true
);

console.log(
  'LinkedList Test 8 - insert: ',
  list.insert(10, 1) === -1,
  list.isEmpty() === true
);
console.log(
  'LinkedList Test 9 - insert: ',
  list.insert(10, -1) === -1,
  list.isEmpty() === true
);
list.insert(10, 0);
console.log(
  'LinkedList Test 10 - insert: ',
  list.print() === '10, ',
  list.isEmpty() === false
);
console.log(
  'LinkedList Test 11 - insert: ',
  list.insert(20, 1) === -1,
  list.print() === '10, '
);
console.log(
  'LinkedList Test 12 - insert: ',
  list.insert(20, 1) === -1,
  list.print() === '10, '
);

console.log(
  'LinkedList Test 13 - removeFrom: ',
  list.removeFrom(-1) === -1,
  list.print() === '10, '
);
console.log(
  'LinkedList Test 14 - removeFrom: ',
  list.removeFrom(1) === -1,
  list.print() === '10, '
);
list.prepend(20);
list.prepend(30);
console.log(
  'LinkedList Test 15 - removeFrom: ',
  list.removeFrom(1) === 20,
  list.print() === '30, 10, '
);
console.log(
  'LinkedList Test 16 - removeFrom: ',
  list.removeFrom(1) === 10,
  list.print() === '30, '
);
console.log(
  'LinkedList Test 17 - removeFrom: ',
  list.removeFrom(0) === 30,
  list.isEmpty() === true
);

console.log(
  'LinkedList Test 18 - removeValue: ',
  list.removeValue(10) === -1,
  list.isEmpty() === true
);
list.prepend(20);
list.prepend(30);
list.prepend(10);
console.log(
  'LinkedList Test 19 - removeValue: ',
  list.removeValue(0) === -1,
  list.print() === '10, 30, 20, '
);
console.log(
  'LinkedList Test 20 - removeValue: ',
  list.removeValue(20) === 20,
  list.print() === '10, 30, '
);
console.log(
  'LinkedList Test 21 - removeValue: ',
  list.removeValue(10) === 10,
  list.print() === '30, '
);
console.log(
  'LinkedList Test 22 - removeValue: ',
  list.removeValue(30) === 30,
  list.isEmpty() === true
);

console.log(
  'LinkedList Test 23 - search: ',
  list.search(30) === -1,
  list.isEmpty() === true
);
list.prepend(20);
list.prepend(30);
list.prepend(10);
list.print();
console.log(
  'LinkedList Test 24 - search: ',
  list.search(30) === 1,
  list.print() === '10, 30, 20, '
);
console.log(
  'LinkedList Test 25 - search: ',
  list.search(20) === 2,
  list.print() === '10, 30, 20, '
);
console.log(
  'LinkedList Test 26 - search: ',
  list.search(10) === 0,
  list.print() === '10, 30, 20, '
);

list.reverse();
console.log('LinkedList Test 27 - reverse: ', list.print() === '20, 30, 10, ');

list.reverse();
console.log('LinkedList Test 28 - print: ', list.print() === '10, 30, 20, ');
list.removeFromEnd();
list.removeFromEnd();
list.removeFromEnd();
console.log(
  'LinkedList Test 29 - print: ',
  list.print() === 'This list is empty',
  list.isEmpty() === true
);

// Hash Table
const table = new HashTable(50);
table.set('name', 'bruce');
table.set('age', 25);
console.log('HashTable Test 1 - set: ', table.get('name') === 'bruce');
table.set('mane', 'Clark');
table.set('name', 'Diana');
console.log('HashTable Test 2 - set: ', table.get('name') === 'Diana');
table.remove('name');
console.log('HashTable Test 3 - remove: ', table.get('name') === undefined);
console.log("HashTable Test 4 - display: [[ 'age', 25 ]], [['mane', 'Clark']]");
table.display();

// Binary Search Tree
const bst = new BinarySearchTree();
console.log('BinarySearchTree Test 1 - empty: ', bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log('BinarySearchTree Test 2 - search: ', bst.search(bst.root, 10));
console.log('BinarySearchTree Test 3 - search: ', bst.search(bst.root, 5));
console.log('BinarySearchTree Test 4 - search: ', bst.search(bst.root, 15));
console.log('BinarySearchTree Test 5 - search: ', bst.search(bst.root, 3));
console.log(
  'BinarySearchTree Test 6 - search: ',
  bst.search(bst.root, 4) === false
);

console.log('BinarySearchTree Test 7 - preOrder: 10, 5, 3, 7, 15');
bst.preOrder(bst.root);
console.log('BinarySearchTree Test 8 - inOrder: 3, 5, 7, 10, 15');
bst.inOrder(bst.root);
console.log('BinarySearchTree Test 9 - postOrder: 3, 7, 5, 15, 10');
bst.postOrder(bst.root);
console.log('BinarySearchTree Test 10 - levelOrder: 10, 5, 15, 3, 7');
bst.levelOrder();
console.log('BinarySearchTree Test 11 - min: ', bst.min(bst.root) === 3);
console.log('BinarySearchTree Test 12 - max: ', bst.max(bst.root) === 15);
bst.delete(10);
console.log(
  'BinarySearchTree Test 13 - delete: ',
  bst.search(bst.root, 10) === false
);

// Graph
const graph = new Graph();
graph.addVertex('A');
console.log(
  'Graph Test 1 - addVertex/hasVertex: ',
  graph.hasVertex('A') !== undefined
);
graph.addEdge('A', 'B');
console.log(
  'Graph Test 2 - addEdge/hasEdge: ',
  graph.hasEdge('A', 'B') !== undefined
);
graph.addEdge('A', 'C');
graph.removeEdge('A', 'B');
console.log('Graph Test 3 - removeEdge: ', graph.hasEdge('A', 'B') === false);
graph.removeVertex('B');
console.log(
  'Graph Test 4 - removeVertex: ',
  graph.hasVertex('B') === undefined
);
console.log('Graph Test 5 - display: A -> C C -> A');
graph.display();

`