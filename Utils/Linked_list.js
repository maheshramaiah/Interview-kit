class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(data, index) {
    if (index === 0 || !this.head) {
      this.head = new Node(data, this.head);
    } else {
      const node = new Node(data, null);
      index = index === undefined ? this.size : index;

      let current = this.head;
      let previous;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = node;
      node.next = current;
    }

    this.size++;
  }

  remove(index) {
    let current = this.head;

    if (index === 0) {
      this.head = current.next;
    } else {
      let count = 0;
      let previous;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  get(index) {
    let count = 0;
    let current = this.head;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current.data;
  }

  reverse() {
    let res = {};
    let prev = null;
    let current = this.head;

    while (current) {
      res = {
        data: current.data,
        next: prev
      };

      prev = res;
      current = current.next;
    }

    this.head = res;
  }

  printNodes() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

LinkedList.add = function(l1, l2) {
  while (l1.size < l2.size) {
    l1.insert(0, 0);
  }

  while (l2.size < l1.size) {
    l2.insert(0, 0);
  }

  l1.reverse();
  l2.reverse();

  let carry = 0;
  let remainder = 0;
  let sum = '';
  let lc1 = l1.head;
  let lc2 = l2.head;

  while (lc1 || lc2) {
    let temp = lc1.data + lc2.data + carry;

    carry = Math.floor(temp / 10);
    remainder = Math.floor(temp % 10);

    sum += remainder.toString();

    lc1 = lc1.next;
    lc2 = lc2.next;
  }

  if (carry) {
    sum += carry.toString();
  }

  return sum
    .split('')
    .reverse('')
    .join('');
};

module.exports = LinkedList;
