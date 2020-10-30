'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    let max = 1;
    for (let i = 0; i < a.length; i++) { // first determine how many of the target number there are
        let equal = 1;
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) {
                equal++;
            }
        }
        let plusone = 0;
        let minusone = 0;
        for (let j = i + 1; j < a.length; j++) { // now determine how many +1 and -1 of the target there are
            if (a[i] - a[j] == -1) {
                plusone++;
            }
            if (a[i] - a[j] == 1) {
                minusone++;
            }
        }
        let count = Math.max(plusone, minusone) + equal // eliminate the lower frequency
        if (max < count) {
            max = count;
        }
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
