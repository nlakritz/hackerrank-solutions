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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let dict = new Object();
    for (let a = 1; a <= 5; a++) { // Add all possible bird types (1-5) to dictionary with a default frequency of zero
        dict[a] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        dict[arr[i]]++; // Update dictionary with bird frequencies
    }
    let maxFrequency = 0;
    let mostCommon = -1;
    for (let j = 5; j >= 0; j--) { // Determine most common bird, with lowest bird ID winning in a tie
        if (dict[j] >= maxFrequency) { 
            maxFrequency = dict[j];
            mostCommon = j;
        }
    }
    return mostCommon;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
