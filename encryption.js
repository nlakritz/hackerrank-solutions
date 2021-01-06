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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the encryption function below.
function encryption(s) {
    let nospace = s.replace(/\s/g, "");
    let row = Math.floor(Math.sqrt(nospace.length));
    let col = Math.ceil(Math.sqrt(nospace.length));
    if (row * col < nospace.length) {
        row++;
    }
    var newstr = "";
    for (let i = 0; i < col; i++) {
        let jump = 0;
        while (i + jump < nospace.length) {
            newstr += nospace[i + jump];
            jump += col;
        }
        newstr += " ";
    }
    return newstr;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
