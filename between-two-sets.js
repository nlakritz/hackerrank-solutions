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
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    let count = 0;
    let aMax = a[0];
    let bMin = b[0];
    // finding range of possible values
    for (let i = 0; i < a.length; i++) { 
        if (aMax < a[i]) {
            aMax = a[i]; 
        }
    }
    for (let j = 0; j < b.length; j++) {
        if (bMin > b[j]) {
            bMin = b[j];
        }
    }
    // checking values against all array ints
    for (let target = aMax; target <= bMin; target++) {
        let between = true;
        for (let i = 0; i < a.length; i++) {
            if ((target % a[i]) != 0) {
                between = false;
            } 
        }
        for (let j = 0; j < b.length; j++) {
            if ((b[j] % target) != 0) {
                between = false;
            }
        }
        if (between) {
            count++;
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}
