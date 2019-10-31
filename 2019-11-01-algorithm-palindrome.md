# [Algorithm] 회문(palindrome)확인 in Javascript



주어진 문자열이 회문(palindrome)의 순열인지 아닌지 확인하는 함수를 작성하라. 회문이란 앞으로 읽으나 뒤로 읽으나 같은 단어 혹은 구절을 의미한다.  

   

   

회문일 경우 Return true, 아니면 Return false  

먼저, 알파벳이 아닌것을 제거하고 소문자로 바꾸고 시작한다.  

   

```javascript
let text = "taco cat";

function palindrome(text) {
  let lowRegStr = text.toLowerCase().replace(/[\W_]/g, ''); 
  let reverseStr = lowRegStr.split('').reverse().join(''); 

  return lowRegStr === reverseStr;
}
console.log(palindrome(text));
```

