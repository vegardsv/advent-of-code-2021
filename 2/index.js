import { readFileSync } from "fs";

const input = readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((x) => x.split(" "));

function part1(input){
    let horizontal = 0;
    let depth = 0;
    for (let i = 0; i < input.length; i++) {
      const dir = input[i][0];
      const len = parseInt(input[i][1], 10);
      if (dir === "forward"){
        horizontal += len;
      }  
      if (dir === "up"){
        depth -= len;
      }
      if (dir === "down"){
        depth += len;
      }
    }
    return depth * horizontal
}


function part2(input){
    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    for (let i = 0; i < input.length; i++) {
      const dir = input[i][0];
      const len = parseInt(input[i][1], 10);
      if (dir === "up"){
        aim -= len;
      }
      if (dir === "down"){
        aim += len;
      }
      if (dir === "forward"){
        horizontal += len;
        depth += aim * len
      }  


    }
    return depth * horizontal
}

console.log(part2(input))