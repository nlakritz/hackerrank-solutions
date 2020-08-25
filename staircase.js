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

// Complete the staircase function below.
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let string = ""; // start with a blank string for each line
        for (let j = 0; j < n-i; j++) {
            string += " "; // add to the string as needed
        }
        for (let k = 0; k < i; k++) {
            string += "#";
        }
        console.log(string); // print the string once completed
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
