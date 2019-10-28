# 순열확인 알고리즘  
  

순열확인: 문자열 두 개가 주어졌을 때 이 둘이 서로 순열 관계에 있는지 확인하는 메서드를 작성하라.  
  
  
  
## 풀이. 문자열에 포함된 문자의 출현 횟수가 같은지 검사하라  
  
배열 두개를 사용해서 각 문자열 내의 문자 출현 횟수를 기록한 다음 두 배열을 비교한다.  



```javascript
const text1 = "abc";
const text2 = "acb";
let count = 0;

function permutation(text1, text2) {
  for (let i = 0; i < text1.length; i++) {
    for(let j = 0; j < text2.length; j++) {

      if(text1.length === text2.length) {
        if ( text1[i] === text2[j]) {
          count += 1;
        }   
      }
    }
  }
  if(count === text1.length) {
    console.log("true");
  } else {
    console.log("false");
  }
}

permutation(text1, text2);
```

