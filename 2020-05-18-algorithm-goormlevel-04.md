> [Bubble Sort](https://level.goorm.io/exam/43243/bubble-sort/quiz/1)

**Solution**

```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let number = [];
let temp = 0;
rl.on("line", function (line) {
  number = line.split(" ").map((item) => parseInt(item));
}).on("close", function () {
  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number.length - 1; j++) {
      if (number[j] > number[j + 1]) {
        temp = number[j];
        number[j] = number[j + 1];
        number[j + 1] = temp;
      }
    }
  }
  console.log(number.join(" ") + " ");
  process.exit();
});
```
