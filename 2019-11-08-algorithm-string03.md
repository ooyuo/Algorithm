# 문자열 회전

 문자열 회전: 한 단어가 다른 문자열에 포함되어 있는지 판별하는 isSubstring이라는 메서드가 있다고 하자. s1과 s2의 두 문자열이 주어졌고, s2가 s1을 회전시킨 결과인지 판별하고자 한다(가령 'waterbottle'은 'erbottlewat'을 회전시켜 얻을 수 있는 문자열이다). isSubstring 메서드를 한 번만 호출해서 판별할 수 있는 코드를 작성하라. 

  

  

```javascript
let s1 = "waterbottle";
let s2 = "erbottlewat";

function isRotation(s1, s2) {
  if (s1.length === s2.length && s1.length > 0) {
    let s1s1 = s1 + s1; // s1s1 = "waterbottlewaterbottle"
    return s1s1.includes(s2);
  }
  return false;
}

isRotation(s1, s2);
```

