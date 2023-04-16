export const input_cmd = () => {
    process.stdin.setEncoding("utf8");

    let lines:any[] = [];
    var reader = require("readline").createInterface({
        input: process.stdin,
    });

    reader.on("line", (line:void) => {
        //改行ごとに"line"イベントが発火される
        lines.push(line); //ここで、lines配列に、標準入力から渡されたデータを入れる
    });
    reader.on("close", () => {
        //標準入力のストリームが終了すると呼ばれる
        console.log(lines);
    });
}
