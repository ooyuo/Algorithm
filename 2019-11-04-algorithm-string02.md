# 문자열 압축 in Javascript



문자열 압축: 반복되는 문자의 개수를 세는 방식의 기본적인 문자열 압축 메서드를 작성하라. 예를 들어 문자열 aabccccaaa를 압축하면 a2b1c4a3이 된다. 만약 '압축된'문자열의 길이가 기존 문자열의 길이보다 길다면 기존 문자열을 반환해야 한다. 문자열은 대소문자 알파벳(a-z)으로만 이루어져 있다. 

  

  

  

```javascript
let text = "aabccccaaa";
let count = 0;
let res = "";

function alzip(text) {
  for (let i = 0; i < text.length; i++) {
    count++;
    if (text[i] !== text[i + 1]) {
      res += text[i] + count;
      count = 0;
    }
  }
  return res;
}

alzip(text);
```

