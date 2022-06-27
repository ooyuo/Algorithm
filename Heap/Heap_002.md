# Heap: 이중우선순위큐

https://programmers.co.kr/learn/courses/30/lessons/42628

## Pattern

---

## 로직

https://kyun2da.github.io/2020/07/24/priorityQueue/

1. 'I'로 시작하는 경우 list에 삽입
2. 원소에 '-'가 포함되는 경우 최솟값삭제, 아닌경우 최댓값삭제
3. 큐가 비어있다면 [0,0], 아닌경우 [최댓값, 최솟값] 반환

## Solution

```javascript
function solution(arg) {
  var list = [];
  arg.forEach((t) => {
    if (t[0] === "I") {
      list.push(+t.split(" ")[1]);
    } else {
      if (!list.length) return;

      var val = (t[2] === "-" ? Math.min : Math.max)(...list);
      var delIndex = list.findIndex((t) => t === val);

      list.splice(delIndex, 1);
    }
  });

  return list.length ? [Math.max(...list), Math.min(...list)] : [0, 0];
}
```
