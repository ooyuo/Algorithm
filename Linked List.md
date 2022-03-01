# Linked List

A linked list is a linear data structure managed by linking each element with a pointer.
Each element is called a node and consists of a data area and a pointer area.

## Features of linked list

You can add an unlimited number of elements as memory permits.
Time required: Search - O(n), Add/Remove - O(1)
There are Single Linked List, Doubly Linked List, and Circular Linked List.

## Singly Linked List

It is a linked list that runs in one direction from the head to the tail.
It is the simplest form of a linked list.

## Doubly Linked List

It is a bidirectionally linked list.
The size of the data structure is slightly larger than that of a Signly Linked List.

## Circular Linked List

It is a linked list in which the tail is connected to the head in a singly or doubly linked list.
You can save memory. It is also used to create a circular queue.

## implemented in javascript

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  find(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next; // move on to the next until a value is found
    }
    return currentNode;
  }
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }
  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next; // move on to the next until a value is found
    }
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }
  display() {
    let currentNode = this.head;
    let displayString = "[";
    while (currentNode !== null) {
      displayString += `${currentNode.value}, `;
      currentNode = currentNode.next;
    }
    displayString = displayString.substr(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }
}
```
