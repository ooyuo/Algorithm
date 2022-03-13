# Build an Array With Stack Operations

## Description

> You are given an array target and an integer n.
>
> In each iteration, you will read a number from list = [1, 2, 3, ..., n].
>
> Build the target array using the following operations:
>
> "Push": Reads a new element from the beginning list, and pushes it in the array.
>
> "Pop": Deletes the last element of the array.
>
> If the target array is already built, stop reading more elements.
>
> Return a list of the operations needed to build target. The test cases are generated so that the answer is unique.

## Examples

> ## Example 1:
>
> ```html
> Input: `target` = [1,3], n = 3 Output: ["Push","Push","Pop","Push"]
> Explanation: Read number 1 and automatically push in the array -> [1] Read
> number 2 and automatically push in the array then Pop it -> [1] Read number 3
> and automatically push in the array -> [1,3]
> ```
>
> ## Example 2:
>
> ```html
> Input: target = [1,2,3], n = 3 Output: ["Push","Push","Push"]
> ```
>
> ## Example 3:
>
> ```html
> Input: target = [1,2], n = 4 Output: ["Push","Push"] Explanation: You only
> need to read the first 2 numbers and stop.
> ```

## Constraints:

> 1 <= target.length <= 100
> 1 <= n <= 100
> 1 <= target[i] <= n
> target is strictly increasing.

## Idea:

> Let's say the `target = [1, 3]` and `n = 3`.
>
> 1. `res` : declare a variable that contains the element to be returned
> 2. while `i` traverses the target array, the variable `j` starts with 1 and increases by 1.
>    In the case below, `j` increases from 1 to 3.
> 3. if `j` is not in the target, put `"Push", "Pop"` in the `res`
>    then, `i` minus 1 because pop() in `res`

## JavaScript Code:

```javascript
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let res = [];
  for (let i = 0, j = 1; i < target.length; i++, j++) {
    if (target[i] === j) {
      res.push("Push");
    } else {
      res.push("Push", "Pop");
      i--;
    }
  }
  return res;
};
```
