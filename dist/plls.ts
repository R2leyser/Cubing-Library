import algos from "./algorithms.json"

export class Algorithms 
{
    getPll(inputPll:any){
        const pll_list = algos.plls
        let pllFound = pll_list.find(index => index == inputPll)!
        return pllFound
    }
}