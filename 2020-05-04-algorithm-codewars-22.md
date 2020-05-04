# Series of integers from m to n

**Task**

Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

**Input**

Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.

**입출력 예**

generateIntegers(2, 5) // --> [2, 3, 4, 5]

**Solution**

```javascript
function generateIntegers(m, n) {
  let res = [];
  for (let i = m; i <= n; i++) {
    res.push(i);
  }
  return res;
}
```
