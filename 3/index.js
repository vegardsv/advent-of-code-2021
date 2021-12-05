import { readFileSync } from "fs";

const input = readFileSync("input.txt")
  .toString()
  .split("\n");


function gamma(input){    
    let res = [];
    for (let i = 0 ; i < input.length; i++){
        for (let j = 0; j < input[i].length; j++){
            res[j] = res[j] ? res[j] + input[i][j] : input[i][j]
        }
    }
    return res;
} 

function mostOne(str){
   if (str.match(/1/g).length <  str.match(/0/g).length){
       return 1
   }
    return 0;
}

function leastOne(str){
    if (str.match(/1/g).length <  str.match(/0/g).length){
        return 0
    }
     return 1;
 }


const gammaBin = gamma(input).map(mostOne).join("");
const epsilonBin  =  gamma(input).map(leastOne).join("")
console.log(parseInt(gammaBin, 2) * parseInt(epsilonBin, 2));
