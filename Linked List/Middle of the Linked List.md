# Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:

Input: `head` = [1,2,3,4,5]  
Output: [3,4,5]  
Explanation: The middle node of the list is node 3.

Example 2:

Input: `head` = [1,2,3,4,5,6]  
Output: [4,5,6]  
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

Constraints:

The number of nodes in the list is in the range [1, 100].  
1 <= Node.val <= 100

## Solution

1. Set head to currNode and midNode.
2. Set count to 1
3. While currNode.next exists, count is incremented by 1 and move to the next node.
4. If count % 2 is 0, put the node's value in midNode.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
  let midNode = head,
    currNode = head;
  let count = 1;
  while (currNode.next) {
    count++;
    if (count % 2 === 0) {
      midNode = midNode.next;
    }
    currNode = currNode.next;
  }
  return midNode;
};
```
