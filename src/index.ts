process.stdin.setEncoding("utf8");

var lines = []; 
var reader = require("readline").createInterface({
  input: process.stdin,
});

reader.on("line", (line) => {
  //改行ごとに"line"イベントが発火される
  lines.push(line); 
  console.log(line);
});
reader.on("close", () => {
  //標準入力のストリームが終了すると呼ばれる
  console.log(lines); 
});

//console.log(lines);
