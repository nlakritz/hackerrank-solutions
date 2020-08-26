'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let amPm = s.charAt(8);
    let militaryHour = "";
    if (amPm === "A") {
        if (s.substring(0,2) == "12") {
            militaryHour = "00";
        }
        else {
            militaryHour = s.substring(0,2);
        }
    }
    else {
        if (s.substring(0,2) == "12") {
            militaryHour = s.substring(0,2);
        }
        else {
            militaryHour = parseInt(s.substring(0,2), 10) + 12;
        }
    }
    return (militaryHour + s.substring(2, 8));
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
