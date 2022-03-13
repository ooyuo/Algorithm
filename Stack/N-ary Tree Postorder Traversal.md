# N-ary Tree Postorder Traversal

## Description

> Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
>
> Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

## Examples

> ## Example 1:
>
> ```html
> Input: root = [1,null,3,2,4,null,5,6] Output: [5,6,3,2,4,1]
> ```
>
> ## Example 2:
>
> ```html
> Input: root =
> [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
> Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
> ```

## Constraints:

> - The number of nodes in the tree is in the range [0, 104].
> - 0 <= Node.val <= 104
> - The height of the n-ary tree is less than or equal to 1000.

## Idea:

> 1. If `root` is null, return the list.
> 2. Call the recursive function (`post()`) with the `children element of the root`.
>    In this function, we receive `root` and `list` (initial value: []).
> 3. If the for statement is finished (If you put all the `root.children` elements in the recursive function), push the `val` of the root to the stack.

## JavaScript Code:

```javascript
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  let stack = [];
  const post = (root, list = []) => {
    if (root === null) return list;
    for (let node of root.children) {
      post(node, list);
    }
    stack.push(root.val);
    return stack;
  };
  return post(root, stack);
};
```
