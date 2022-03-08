# Computer Data Structures - Stack

Stack is a linear data structure that is "last in first out".  
Think of a long box with a closed floor like Pringles container.  
The element at the top of the stack is called 'Top'.  
Stack can be implemented as an array or linked list.

1. in Array

```javascript
const stack = [];

//push
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack); // [1, 2, 3]

// pop
stack.pop();
console.log(stack); // [1, 2]

// get top (the element of last in)
console.log(stack[stack.length - 1]); // 2
```

2. in Linked List

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }
  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }
  size() {
    return this.size();
  }
}
```
