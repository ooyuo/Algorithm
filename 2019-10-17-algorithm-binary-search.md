# 이진탐색(Binary Search) 알고리즘  
  
  
이진탐색은 정렬된 항목 목록에서 항목을 찾기위한 효율적인 알고리즘이다. 가능한 위치를 한 곳으로 좁힐 때까지 항목을 포함할 수 있는 목록 부분의 절반을 반복하여 작동한다.  

이진탐색을 사용하는 가장 일반적인 방법 중 하나는 배열에서 항목을 찾는 것이다.  
  
1. Let min = 1 and max = n  
2. Guess the average of max and min. rounded down so that it is an integer  
3. If you guessed the number, Stop. You found it!  
4. If the guess was too low, set min to be one larger than the guess  
5. If the guess was too high, set max to be one smaller than the guess  
6. Go back to step two.  
  
  
```javascript
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    
    while(min<=max){
        guess = Math.round((min + max) / 2);
        if(array[guess] === targetValue) {
            return array[guess];
        }else if(array[guess] > targetValue) {
            max = guess - 1;
        }else {
            min = guess + 1;
        }
    }
	return -1;
};

var primes = [2, 3, 6, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);
```  
  
출력결과  
> Found prime at index 73