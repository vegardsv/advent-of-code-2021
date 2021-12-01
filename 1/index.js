import { readFileSync } from 'fs';

const input = readFileSync('input.txt').toString().split('\n').map((x) => parseInt(x, 10));

const inc = (xs) => xs.reduce((a, _c, i) => (xs[i] > xs[i - 1] ? a + 1 : a), 0);

const grouped = (xs) => xs.map((x, i) => x + xs[i - 1] + xs[i + 1]);

// eslint-disable-next-line no-console
console.log(`Answer part 1: ${inc(input)}`, `Answer part 2: ${inc(grouped(input))}`);
