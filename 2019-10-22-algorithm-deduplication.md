---  
title: "[javascript] 배열에서 중복제거하기"  
# permalink: /Archive/test/  
# layout: category  
categories: 
    - Archive  
    - Algorithm
tags:   
    - algorithm  
    - TIL  
author_profile: true  
toc_sticky: true  
--- 
자바스크립트로 배열안에서 중복을 제거하는 방법

```javascript
const array = ['1','1','2','3','4','5','3'];

console.log(...new Set(array)); // Set은 유니크한 값만 허용한다
console.log(array.filter((item, index) => array.indexOf(item) === index));
```



실행결과

> 1 2 3 4 5 
>
> ▶ *[ " 1 " , " 2 " , " 3 " , " 4 " , " 5 " ]*