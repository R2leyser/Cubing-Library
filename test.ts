import { Algorithms, Scrambler } from "./dist/index";

const perms = new Algorithms
const scrambler = new Scrambler

try {
    console.log(perms.getPll("aaaa"))    
} catch (error) {
    console.error(error)
}
//const scrambles = async () => {
//    console.log(await scrambler.scrambler(true, 101))
//}
//scrambles()
