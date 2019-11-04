# 문자열 편집

하나 빼기: 문자열을 편집하는 방법에는 세 가지 종류가 있다. 문자 삽입, 문자 삭제, 문자 교체, 문자열 두 개가 주어졌을 때, 문자열을 같게 만들기 위한 편집 횟수가 1회 이내인지 확인하는 함수를 작성하라.  

   

예)  

pale, ple -> true  

pales, pale -> true  

pale, bale -> true  

pale, bake -> true  



```javascript
const first = "fale";
const second = "bale";

function oneEditAway(first, second) {
  if (first.length == second.length) {
    oneEditReplace(first, second);
  } else if (first.length + 1 == second.length) {
    oneEditInsert(first, second);
  } else if (first.length == second.length + 1) {
    oneEditInsert(second, first);
  }
  return false;
}
//#1. 문자의 길이가 같고, 다른 문자가 1개일때 true를 반환
function oneEditReplace(first, second) {
  /*
  1. foundDifference = false를 초기값으로 지정후 시작
  2. 문자가 다르다면 => foundDifference = true
  3. 문자가 다른게 1개 이상일때 => return false;
  */
  let foundDifference = false;
  for (let i = 0; i < first.length; i++) {
    if (first.charAt(i) != second.charAt(i)) { // 문자가 다를경우
      if (foundDifference) { // 문자가 다른게 1개 이상일때
        return false;
      }
      foundDifference = true;
    }
  }
  return true;
}

//#2. 문자열의 길이가 -1이나 +1 차이가 나며, 삽입or삭제를했을때 문자가 동일해야함
function oneEditInsert(first, second) {
  /*
  1. 문자 각각 index를 지정하고 해당 문자열까지만으로 길이제한을 두고
  2. 문자가 다를경우 index를 비교해서 index가 다르다 => return false
  3. 문자가 다를경우 index를 비교해서 index가 같다 => 두번째 문자의 index를 +1
  4. 문자가 같을경우 각 index + 1 
  */
  let index1 = 0,
    index2 = 0;
  while (index2 < second.length && index1 < first.length) { // 각 index들은 해당 문자열보다 작아야함
    if (first.charAt(index1) != second.charAt(index2)) { // 문자가 다를경우
      if (index1 != index2) { // index가 다르다면
        return false;
      }
      index2++; // 문자가 다르고, index가 같을경우 두번째 문자의 index를 +1
    } else { // 문자가 같을경우 index 각각에 +1
      index1++;
      index2++;
    }
  }
  return true;
}
oneEditAway(first, second);
```

