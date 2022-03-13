# Remove All Adjacent Duplicates In String

## Description:

> You are given a string s consisting of lowercase English letters. A _duplicate removal_ consists of choosing two _adjacent_ and _equal_ letters and removing them.
>
> We repeatedly make _duplicate removals_ on s until we no longer can.
>
> Return the final string after all such duplicate removals have been made. It can be proven that the answer is _unique_.

## Examples

> ## Example 1:
>
> ```html
> Input: s = "abbaca" Output: "ca" Explanation: For example, in "abbaca" we
> could remove "bb" since the letters are adjacent and equal, and this is the
> only possible move. The result of this move is that the string is "aaca", of
> which only "aa" is possible, so the final string is "ca".
> ```
>
> ## Example 2:
>
> ```html
> Input: s = "azxxzy" Output: "ay"
> ```

## Constraints:

> 1 <= s.length <= 105
> s consists of lowercase English letters.

## Idea:

> There is something to think carefully about. `pop()` should be performed only when Duplicate with the last value of the stack array.

## JavaScript Code:

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [];
  for (let item of s) {
    if (stack[stack.length - 1] === item) {
      stack.pop();
    } else {
      stack.push(item);
    }
  }
  return stack.join("");
};
```
