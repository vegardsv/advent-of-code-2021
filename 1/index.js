const fs = require('fs');
const xs = fs.readFileSync('input.txt').toString().split("\n").map(x => parseInt(x))

let inc = xs => xs.reduce((a, c, i) => xs[i] > xs[i-1] ? a + 1 : a, 0);

let grouped = xs => xs.map((x, i) => x + xs[i-1] + xs[i+1])

// Part 1
console.log("Answer part 1: " + inc(xs))

// Part 2
console.log("Answer part 2: " + inc(grouped(xs)))
