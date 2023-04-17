export const input_cmd = () => {
    process.stdin.setEncoding("utf8");

    let lines:any[] = [];
    var reader = require("readline").createInterface({
        input: process.stdin,
    });

    reader.on("line", (line:void) => {
        lines.push(line);
    });
    reader.on("close", () => {
        console.log(lines);
    });
}
