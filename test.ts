import { Algorithms, Scrambler } from "./dist/index";

const perms = new Algorithms
const scrambler = new Scrambler

//console.log(perms.getPll("y"))
const scrambles = await scrambler.scrambler(true, 5) 
console.log(scrambles)