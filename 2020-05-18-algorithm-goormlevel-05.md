> [몫과 나머지](https://level.goorm.io/exam/43222/%EB%AA%AB%EA%B3%BC-%EB%82%98%EB%A8%B8%EC%A7%80/quiz/1)

**Solution**

```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let a = line.split(" ")[0];
  let b = line.split(" ")[1];
  let sum = parseInt(a / b);
  let namonege = parseInt(a % b);
  console.log(`${sum} ${namonege}`);
}).on("close", function () {
  process.exit();
});
```
