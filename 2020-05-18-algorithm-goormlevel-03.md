> [삼각형의 넓이](https://level.goorm.io/exam/43251/%EC%82%BC%EA%B0%81%ED%98%95%EC%9D%98-%EB%84%93%EC%9D%B4/quiz/1)

**Solution**

```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(((line.split(" ")[0] * line.split(" ")[1]) / 2).toFixed(1));

  rl.close();
}).on("close", function () {
  process.exit();
});
```
