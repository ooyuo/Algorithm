```javascript
/*
우선순위 큐 : fifo인 큐와 달리 우선 순위가 높은 요소가 먼저나가는 큐
자료구조가 아닌 개념으로 접근

1. 힙 (가장적합): 이진 트리 형태를 가지며 우선순위가 높은 요소가 먼저나가기위해 요소가 삽입, 삭제될 때 바로 정렬되는 특징이있다
그치만 우선순위큐는 힙과 다르다

힙의특징
- 우선순위가 높은 요소가 먼저 나가는 특징을 가진다
- 루트가 가장 큰 값이 되는 최대 힙(max heap)과 루트가 가장 작은 값이 되는 최소 힙(min heap)이 있다
- 아쉽게도 자바스크립트에선 직접 구현하여 사용할수밖에..

힙 요소추가
- 요소가 추가될 때는 트리의 가장 마지막에 정점에 위치한다
- 추가 후 부모정점보다 우선순위가 높다면 부모정점과 순서를 바꾼다
- 이과정을 반복하면 결국 가장 우선순위가 높은정점이 루트가된다
- 완전이진트리의 높이는 logN이기에 힙의 요소추가알고리즘은 O(logN) 시간복잡도를 가진다

힙 요소제거
- 요소제거는 루트정점만 가능하다
- 루트정점이 제거된 후 가장 마지막정점이 루트에 위치한다
- 루트정점의 두 자식 정점 중 더 우선순위가 높은 정점과 바꾼다
- 두 자식 정점이 우선순위가 더 낮을때까지 반복한다
- 완전이진트리의 높이는 logN이기에 힙의 요소제거알고리즘은 O(logN)시간복잡도를 가진다
*/

// 힙 요소추가
class MaxHeap {
  constructor() {
    this.heap = [null]; // root를 null로 초기화
  }
  push(value) {
    this.heap.push(value); // 일단 값을 넣고
    // 현재정점과 부모정점의 index구하기
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    // 부모정점이 0이 아니면서 현재값보다 부모정점의 값이 작을때
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex]; // 일단 부모정점을 temp에 넣기
      this.heap[parentIndex] = value; // 부모정점에 값 넣기
      this.heap[currentIndex] = temp; // 부모정점의 값을 현재정점에 넣기
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
}

const heap = new MaxHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap); // [null, 63, 54, 45, 27, 36]

// 힙 요소삭제
class MaxHeap {
  constructor() {
    this.heap = [null]; // root를 null로 초기화
  }
  push(value) {
    this.heap.push(value); // 일단 값을 넣고
    // 현재정점과 부모정점의 index구하기
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    // 부모정점이 0이 아니면서 현재값보다 부모정점의 값이 작을때
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex]; // 일단 부모정점을 temp에 넣기
      this.heap[parentIndex] = value; // 부모정점에 값 넣기
      this.heap[currentIndex] = temp; // 부모정점의 값을 현재정점에 넣기
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
  pop() {
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }
}

const heap = new MaxHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap); // [null, 63, 54, 45, 27, 36]

const array = [];
array.push(heap.pop()); // 54
array.push(heap.pop()); // 45
array.push(heap.pop()); // 36
array.push(heap.pop()); // 27
console.log(array); // [63, 54, 45, 36]
```
