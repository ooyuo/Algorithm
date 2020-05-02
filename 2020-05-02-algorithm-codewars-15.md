# Count characters in your string

**문제 설명**

The main idea is to count all the occurring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }

**Solution**

```javascript
function count(string) {
  let res = {};
  string.split("").map((item, idx) => (res[item] = res[item] + 1 || 1));
  return res;
}
```
