# Vowel Count

**문제 설명**

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

**Solution**

```javascript
function getCount(str) {
  const vowel = str.match(/\a|e|i|o|u/g);
  return vowel ? vowel.length : 0;
}
```

**Clever Solution**

```javascript
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
```
