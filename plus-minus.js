'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeCount++;
        }
        else if (arr[i] == 0) {
            zeroCount++;
        }
        else {
            positiveCount++
        }
    }
    let positiveRatio = (positiveCount/arr.length).toFixed(6);
    let negativeRatio = (negativeCount/arr.length).toFixed(6);
    let zeroRatio = (zeroCount/arr.length).toFixed(6);
    console.log(positiveRatio + "\n" + negativeRatio + "\n" + zeroRatio);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
