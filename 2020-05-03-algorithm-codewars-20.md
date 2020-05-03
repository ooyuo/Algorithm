# Is There an Odd Bit?

**문제 설명**

Return 1 when ANY odd bit of x equals 1; 0 otherwise.

x is unsigned.

(Assume "0 index", aka the least significant bit is considered position 0)

Assume x is 32 bits.

Example:

any_odd(2) will return 1 because at least one odd bit is 1 (0010).

any_odd(170) will return 1 because all of the odd bits are 1 (10101010).

any_odd(5) will return 0 because none of the odd bits are 1 (0101).

**Solution**

```javascript
function anyOdd(x) {
  let bit = x.toString(2);
  let res = 0;
  for (let i = bit.length; bit.length % 4 != 0; i++) {
    bit = "0" + bit;
  }
  for (let i = 0; i < bit.length; i += 2) {
    if (bit[i] == 1) {
      res = 1;
    }
  }
  return res;
}
```

**Clever Solution**

```javascript
const MATCH = parseInt("10".repeat(16), 2);

function anyOdd(x) {
  return !!(x & MATCH) * 1;
}
```
