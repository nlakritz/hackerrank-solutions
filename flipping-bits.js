'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the flippingBits function below.
function flippingBits(N) {
    let str = N.toString(2); // binary string representation
    let padding = "";
    for (let i = 0; i < 32 - str.length; i++) { 
        padding += "0";
    }
    let binary = padding + str; // extend to 32 bits
    let flipped = "";
    for (let i = 0; i < binary.length; i++) { // generate new string with flipped bits
        if (binary.charAt(i) == 0) {
            flipped += "1";
        }
        else {
            flipped += "0";
        }
    }
    return parseInt(flipped, 2); // convert binary string to unsigned int
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
