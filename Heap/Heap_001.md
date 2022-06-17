# Heap: 디스크 컨트롤러(우선순위큐)

https://programmers.co.kr/learn/courses/30/lessons/42627

## Pattern

- 작업의 최소, 최대 소요시간 구하기
- 작업이 수행되는 시점, 작업에 걸리는 시간 제공
- 보통 2차원 배열
- 짧은 작업부터 수행되는 경우가 빈번함
- 👀 어떤 순서로 작업을 실행해야 가장 최소의 평균 시간을 가지는지

---

## 로직

https://kyun2da.github.io/2020/07/21/diskController/

1. 먼저 요청 시간순으로 jobs 정렬
2. 최소 시간을 보장하기위해 우선순위큐 사용
   2.1. 각 작업을 처리하는 동안 요청이 오는 모든 jobs를 queue에 넣어줌
   2.2. 작업이 끝나면 queue에 있는 가장 처리 시간이 적은 작업을 실행
   2.3.👀 queue가 다 비었는데 작업이 남아있다?
   jobs의 첫번째 배열에 있는 작업을 실행(요청 시간 순으로 다시 실행)

## Solution

```javascript
function solution(jobs) {
  let total = jobs.length;
  let answer = 0;
  let tick = 0;
  let queue = [];
  while (true) {
    // 1. (jobs가 있을 때) tick보다 같거나 작은 작업 모두 추출 후 queue에 삽입
    let index = 0;
    while (true) {
      if (index >= jobs.length) break;
      if (jobs[index][0] <= tick) {
        // 요청이 들어온 작업
        queue.push(jobs.splice(index, 1)[0]);
      } else {
        // 요청 전 작업
        index++;
      }
    }

    // 3. queue와 jobs가 0이면 끝
    if (queue.length === 0) {
      if (jobs.length === 0) {
        break;
      } else {
        tick++;
      }
    } else {
      // 2. (queue가 있을 때) queue에서 작업량이 가장 작은 작업 수행
      let minIndex = 0;
      for (let i = 1; i < queue.length; i++) {
        if (queue[minIndex][1] > queue[i][1]) minIndex = i;
      }

      // 2.1 수행한 시간 만큼 tick 증가
      tick += queue[minIndex][1];

      // 2.2 answer += tick - 수행한 작업의 작업 처리 요청 시간
      answer += tick - queue[minIndex][0];

      // 2.3 queue에서 해당 job 삭제
      queue.splice(minIndex, 1);
    }
  }
  return Math.floor(answer / total);
}
```
