# Mumbling

**문제 설명**

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

**Solution**

```javascript
function accum(s) {
  return s
    .split("")
    .map((item, idx) => {
      return (item =
        item.substring(0, 1).toUpperCase() + item.toLowerCase().repeat(idx));
    })
    .join("-");
}
```
