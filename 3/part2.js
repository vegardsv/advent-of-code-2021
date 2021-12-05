import { readFileSync } from "fs";

const input = readFileSync("input.txt")
  .toString()
  .split("\n");

  function countInPosition(needle, pos, xs){
    return xs.reduce((acc, cur) => cur[pos] === needle ? acc + 1 : acc, 0);
  }

  function run(xs, pos = 0){
    if (xs.length === 1){
        return xs;
    } else {
        const maxOccurence = countInPosition("1", pos, xs) >= xs.length / 2 ? "1" : "0";
        return run(xs.filter(str => str[pos] === maxOccurence), pos + 1 )
    }    
  }

  function run2(xs, pos = 0){
    if (xs.length === 1){
        return xs;
    } else {
        const maxOccurence = countInPosition("1", pos, xs) >= xs.length / 2 ? "1" : "0";
       return run2(xs.filter(str => str[pos] !== maxOccurence), pos + 1 )
    }    
  }


const v1 = parseInt(run(input)[0], 2)
const v2 = parseInt(run2(input)[0], 2)

//run(input)
console.log(
    v1 * v2
)