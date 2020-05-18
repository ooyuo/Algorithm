> [Hello Goorm !](https://level.goorm.io/exam/43267/hello-goorm/quiz/1)

**Solution**

```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  for (let i = 0; i < line; i++) {
    console.log("Hello Goorm !");
  }
  rl.close();
}).on("close", function () {
  process.exit();
});
```
