# Abbreviate a Two Word Name

**문제 설명**

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

**Solution**

```javascript
function abbrevName(name){
  let res = [];
  name.split(' ').map((item, idx) =>
    res.push(item.substring(0,1).toUpperCase());
  )
  return res.join('.');
}
```
