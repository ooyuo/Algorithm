# 깊이/너비 우선 탐색(DFS/BFS): 네트워크

https://programmers.co.kr/learn/courses/30/lessons/43162
'

## Pattern

- DFS/BFS의 목적: 모든 노드를 한 번씩 방문하는 것
- 방문을 한 번씩하려면 방문했는지 기록해야함
- 방문 했음을 기록할 배열을 노드의 갯수만큼 만들어야함

---

## 로직

https://velog.io/@noyo0123/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-javascript-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4

1. 배열 선언 (컴퓨터 갯수 만큼)
   -> false로 초기화
2. 배열에 방문한 적이 없다면 DFS 실행
3. DFS(): true로 업데이트

## Solution

```javascript
function solution(n, computers) {
  let answer = 0;
  let check = [];
  for (let computer of computers) {
    check.push(false);
  }
  function dps(idx) {
    check[idx] = true;
    for (let i = 0; i < computers.length; i++) {
      if (computers[idx][i] == 1 && !check[i]) {
        dps(i);
      }
    }
  }
  for (let i = 0; i < computers.length; i++) {
    if (!check[i]) {
      dps(i);
      answer++;
    }
  }
  return answer;
}
```
