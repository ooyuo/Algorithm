# Descending Order

**문제 설명**

Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: `21445` Output: `54421`

Input: `145263` Output: `654321`

Input: `123456789` Output: `987654321`

**Solution**

```javascript
function descendingOrder(n) {
  const toNumber = n
    .toString()
    .split("")
    .map((item) => +item);
  return Number(toNumber.sort((a, b) => b - a).join(""));
}
```
