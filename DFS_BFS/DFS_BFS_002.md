# 깊이/너비 우선 탐색(DFS/BFS): 불량 사용자

https://programmers.co.kr/learn/courses/30/lessons/64064

## Pattern

- DFS/BFS의 목적: 모든 노드를 한 번씩 방문하는 것
- 한 조합에 중복되는 원소가 없도록 한다. (visit 체크)  
  -> 중복제거 방법
  - 1. string으로 넘어온 조합의 값들을 배열로 변경
  - 2. 배열을 오름차순으로 정렬
  - 3. 배열을 다시 string으로 변경
  - 4. set에 저장  
       \*\* 위 과정을 거치면 set에는 문제의 조건을 만족하는 경우의 수가 중복없이 string형식으로 저장됨, set의 size를 return

---

## 로직

https://gwang920.github.io/algorithm/progreammers-2-64064/

1. banned_id의 '\*'를 '.'로 치환
2. matches: user_id 목록에서 정규표현식 실행  
   2.1. regex.exec(): 정규표현식 조건에 맞으면 배열로 반환해줌  
   2.2. 글자수가 같다면 matches에 넣어줌
3. matches배열에서 isUsed에 방문하지 않았다면 방문표시, current배열에 push, bannedIdx를 1 증가해서 dfs함수 실행, isUsed를 다시 false처리

---

## Solution

```javascript
const isUsed = {};
const usedSets = new Set();
const current = [];

function solution(user_id, banned_id, bannedIdx = 0) {
  const bannedLen = banned_id.length;
  if (bannedIdx === bannedLen) {
    const sorted = current.slice().sort().toString(); // string으로 넘어온 조합의 값들을 배열로 바꿔줌, 오름차순 정렬, 다시 string으로 바꿔줌
    if (usedSets.has(sorted)) {
      return 0;
    }
    usedSets.add(sorted); // set에 저장
    return 1;
  }
  const regex = new RegExp(banned_id[bannedIdx].replace(/\*/g, "."));

  const matches = user_id.filter((user) => {
    const result = regex.exec(user);
    return result && result[0].length === user.length;
  });

  let ret = 0;
  for (const user of matches) {
    if (!isUsed[user]) {
      isUsed[user] = true;
      current[bannedIdx] = user;
      ret += solution(user_id, banned_id, bannedIdx + 1);
      isUsed[user] = false;
    }
  }
  return ret;
}
```
